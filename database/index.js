const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'ibraheemazam',
  database: 'goat',
  password: null,
  port: 5432,
});

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
//   pool.end();
// });

module.exports = pool;
