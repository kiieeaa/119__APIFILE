require('dotenv').config();

const development = {
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_DATABASE,
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "dialect": process.env.DB_DIALECT
}


const test =  {
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_DATABASE,
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "dialect": process.env.DB_DIALECT
}

const production = {
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_DATABASE,
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "dialect": process.env.DB_DIALECT
}

require('dotenv').config();

// ... kode development, test, production ...

// TAMBAHKAN KODE INI SEMENTARA UNTUK CEK
console.log("Cek Password:", process.env.DB_PASSWORD); 
console.log("Tipe Data:", typeof process.env.DB_PASSWORD);

module.exports = {development, test, production}

module.exports = { development, test, production }



