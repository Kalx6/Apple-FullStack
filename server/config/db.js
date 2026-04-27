import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "khalid",
  password: "@Khalid1",
  database: "mydatabase",
});

export default db;
