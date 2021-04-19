import jwt from 'jsonwebtoken';
import config from '../config';

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const accessToken = authHeader && authHeader.startsWith('Bearer ') && authHeader.split(' ')[1];
  try {
    if (!accessToken) {
      throw {
        status: 401,
        message: 'Auth token is not supplied',
      };
    }
    jwt.verify(accessToken, config.jwt.secret, (error, authenticatedData) => {
      if (error) {
        throw {
          status: 403,
          message: 'Token is not valid',
        };
      }
      req.headers.data = authenticatedData;
      next();
    });
  } catch (error) {
    if (error.status) {
      console.log({ message: error.message });
      res.status(error.status).json({ error: error.message });
    } else {
      console.log({ message: error.message });
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

export default authenticateToken;
