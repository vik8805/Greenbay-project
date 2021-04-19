import { itemService } from '../services';

export const itemController = {
  async createItem(req, res) {
    const { itemName, description, price, imageUrl } = req.body;
    const { id: userId } = req.headers.data;
    try {
      await itemService.createItem(itemName, description, price, imageUrl, userId);
      res.status(200).json({ message: 'Your item has been added successfully!' });
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

  async getItems(req, res) {
    try {
      const response = await itemService.getItems();
      res.status(200).json(response);
    } catch (error) {
      console.log({ message: error.message });
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async buyItem(req, res) {
    try {
      const { id: itemId } = req.body;
      const { id: buyerId } = req.headers.data;
      const response = await itemService.buyItem(itemId, buyerId);
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
};