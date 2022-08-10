DROP TABLE IF EXISTS players;

CREATE TABLE players (
  player_id SERIAL NOT NULL,
  player_name VARCHAR(50),
  team_abbreviation VARCHAR(50),
  age VARCHAR(50),
  player_height REAL,
  player_weight REAL,
  college VARCHAR(50),
  country VARCHAR(50),
  draft_year VARCHAR(50),
  draft_round VARCHAR(50),
  draft_number VARCHAR(50),
  gp INTEGER,
  pts REAL,
  reb REAL,
  ast REAL,
  net_rating REAL,
  oreb_pct REAL,
  dreb_pct REAL,
  usg_pct REAL,
  ts_pct REAL,
  ast_pct REAL,
  season VARCHAR(50),
  PRIMARY KEY (player_id)
);

COPY players
FROM '/Users/ibraheemazam/Downloads/all_seasons.csv'
WITH DELIMITER ','
CSV HEADER
NULL 'null';