import { db } from '../data/connection';

export const itemRepository = {
  async createItem(values) {
    const query = `INSERT INTO item (itemName, description, price, imageUrl, userId) VALUES (?, ?, ?, ?, ?);`;
    await db.query(query, values);
  },

  async getItems() {
    const query = `SELECT item.id, itemName, description, price, imageUrl, createdAt, soldAt, buyerName, userId, userName FROM item INNER JOIN user ON item.userId = user.id;`;
    const data = await db.query(query);
    return data.results;
  },

  async getItemById(value) {
    const query = `SELECT price, soldAt, userId FROM item WHERE id=?;`;
    const data = await db.query(query, value);
    return data.results[0];
  },

  async updateItemAfterPurchaseById(values) {
    const query = `UPDATE item SET soldAt=?, buyerName=? WHERE id=?;`;
    await db.query(query, values);
  },

};