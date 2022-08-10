const pool = require('../index.js');

function getStats(playerName = 'lebron', season = '2021') {
  const queryString = `
    SELECT player_name, sum(pts) ppg, sum(reb) reb, sum(ast) ast, sum(gp) gp
    FROM "players"
    WHERE UPPER(player_name) LIKE UPPER('%${playerName}%')
    AND season LIKE ('${season}%')
    GROUP BY player_name
    LIMIT 20;
  `;

  return (
    pool.query(queryString)
  );
}

// getStats();

module.exports = getStats;
