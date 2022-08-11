const pool = require('../index.js');

function getStats(playerName = 'lebron', season = '2021') {
  const queryString = `
    SELECT player_name, team_abbreviation, player_height, player_weight, college, season, sum(pts) ppg, sum(reb) rpg, sum(ast) apg, sum(gp) gp
    FROM "players"
    WHERE UPPER(player_name) LIKE UPPER('%${playerName}%')
    AND season LIKE ('${season}%')
    GROUP BY player_name, team_abbreviation, player_height, player_weight, college, season
    LIMIT 20;
  `;

  return (
    pool.query(queryString)
  );
}

// getStats();

module.exports = getStats;
