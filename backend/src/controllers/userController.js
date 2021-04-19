import { userService } from '../services';

export const userController = {
  async createUser(req, res) {
    const { userName, password } = req.body;
    try {
      const response = await userService.createUser(userName,password);
      res.status(200).json(response);
    } catch (error) {
      if (error.status) {
        console.log({ message: error.message });
        res.status(error.status).json({ error: error.message });
      } else {
        console.log({ message: error.message });
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  },
  
  async loginUser(req, res) {
    const { userName, password } = req.body;
    try {
      const userData = await userService.getUserData(userName, password);
      const accessToken = await userService.createToken(userData);
      const { id, currencyAccount } = userData;
      res.status(200).json({ accessToken, id, userName, currencyAccount });
    } catch (error) {
      if (error.status) {
        console.log({ message: error.message });
        res.status(error.status).json({ error: error.message });
      } else {
        console.log({ message: error.message });
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  },
};
