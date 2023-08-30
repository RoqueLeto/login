const { Pool } = require ( "pg" )
// import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  password: "crtb@300419!",
  host: "localhost",
  port: 5432,
  database: "db_login_system",
});

const createTblQry = `CREATE TABLE accounts (
  user_id serial PRIMARY KEY,
  username VARCHAR ( 50 ) UNIQUE NOT NULL,
  password VARCHAR ( 50 ) UNIQUE NOT NULL);`


pool
  .query(createTblQry)
  .then((Response) => {
    console.log("Table Created");
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

module.export = pool;