import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';
import { userRepository } from '../repository'
const saltRounds = 10;

export const userService = {
  async createUser(userName, password) {
    await userService.validateUser(userName, password);
    const hashPassword = await bcrypt.hash(password, saltRounds);
    const result = await userRepository.createUser([userName, hashPassword])
    return result;
  },

  async getUserData(userName, password) {
    await userService.validateUser(userName, password);
    const userData = await userService.verifyUser(userName, password);
    return userData;
  },

  async createToken(userData) {
    const { password, ...data } = userData;
    const accessToken = await jwt.sign(
      { ...data },
      config.jwt.secret || 'secret'
    );
    return accessToken;
  },

  async validateUser(userName, password) {
    if (!userName && !password) {
      throw {
        message: 'Username and password are required',
        status: 400,
      };
    };
    if (!userName || !password) {
      throw {
        message: `${!userName ? 'Username' : 'Password'} is required.`,
        status: 400,
      };
    };
    if (password.length < 6) {
      throw {
        message: 'Password must be at least 6 characters.',
        status: 400,
      };
    };
  },

  async verifyUser(userName, password) {
    const userData = await userRepository.selectUserByUserName(userName);
    if (userData && (await bcrypt.compare(password, userData.password))) {
      return userData;
    }
    throw { 
      message: 'Wrong username or password.', 
      status: 400 
    };
  },
};
