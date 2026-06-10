import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "pantry_pilot",
  waitForConnections: true,
  connectionLimit: 10
});

export default pool.promise();