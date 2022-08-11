const pool = require('../index.js');

function getPlayerID(playerName = 'lebron') {
  const queryString = `
  SELECT player_name, person_id
  FROM "nba_ids"
  WHERE UPPER(player_name) LIKE UPPER('%${playerName}%')
  LIMIT 20;
  `;

  return (
    pool.query(queryString)
  );
}

// getPlayerID('carmelo')
//   .then((result) => console.log(result.rows));

module.exports = getPlayerID;
