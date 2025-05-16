//Here is where i write my sql queries in a function
//import the config to here now we will be able to communicate with our db to make queries
import { connection } from "../config/db";
export const getNotes = async () => {
  const query = `select * from Note`;
  const [result] = connection.query(query);
  return result;
};
export const createNote = async (userId, title, content) => {
  const query = `INSERT INTO notes(user_id,title,content) VALUES(?,?)`;
  const [result] = await connection.query(query, [userId, title, content]);
  return result;
};
export const getNoteByUser = async (userId) => {
  const query = `SELECT * FROM notes WHERE user_id= ? ORDER BY created_at DESC`;
  const [row] = await connection.query(query, [userId]);
  return row;
};
export const getNoteById = async (id) => {
  const query = "SELECT * FROM notes WHERE id = ?";
  const [rows] = await db.query(query, [id]);
  return rows[0];
};

export const updateNote = async (id, title, content) => {
  const query = `UPDATE notes SET title=?,content=? WHERE id=?`;
  const [result] = connection.query(query, [id, title, content]);
  return result;
};
export const deleteNote = async (id) => {
  const query = `DELETE FROM note WHERE id=?`;
  const [result] = connection.query(query,[id]);
  return result;
};
