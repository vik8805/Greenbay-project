import { db } from '../data/connection';

export const userRepository = {
  async createUser(values) {
    const query = `INSERT INTO user (userName, password) VALUES (?, ?);`;
    const data = await db.query(query, values);
    return data.results.insertId;
  },
  
  async selectUserByUserName(value) {
    const query = `SELECT * FROM user WHERE userName=?;`;
    const data = await db.query(query, value);
    return data.results[0];
  },

  async selectUserById(value) {
    const query = `SELECT * FROM user WHERE id=?;`;
    const data = await db.query(query, value);
    return data.results[0];
  },

  async updateCurrencyAccountOfUserById(values) {
    const query = `UPDATE user SET currencyAccount=? WHERE id=?;`;
    await db.query(query, values);
  },
};
