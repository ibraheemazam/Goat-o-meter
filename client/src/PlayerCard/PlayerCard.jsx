import React, { useState, useEffect } from 'react';
import {
  Box, Stack, Input, Select, Heading, Text, CircularProgress,
} from '@chakra-ui/react';
import axios from 'axios';

function PlayerCard() {
  const [player, setPlayer] = useState({});
  const [games, setGames] = useState([]);
  const [ppg, setPpg] = useState();
  const [rpg, setRpg] = useState();
  const [apg, setApg] = useState();

  function getPlayer() {
    return (
      axios.get('https://www.balldontlie.io/api/v1/players', {
        params: {
          search: 'lebron',
        },
      })
        .then((result) => {
          // console.log(result.data.data);
          setPlayer(result.data.data[0]);
        })
        .catch((err) => console.log('error retrieving player info from API:\n', err))
    );
  }

  function getStats() {
    return (
      axios.get('https://www.balldontlie.io/api/v1/stats', {
        params: {
          player_ids: [237],
          seasons: [2017],
          postseason: false,
          per_page: 100,
        },
      })
        .then((result) => {
          console.log(result.data.data);
          setGames(result.data.data);
        })
        .catch((err) => console.log('error retrieving player info from API:\n', err))
    );
  }

  function calcAve() {
    let points = 0; let rebounds = 0; let assists = 0;
    const totalGames = games.length;
    games.forEach((game) => {
      points += game.pts; rebounds += game.reb; assists += game.ast;
    });
    setPpg(Math.round((points / totalGames) * 10) / 10);
    setApg(Math.round((assists / totalGames) * 10) / 10);
    setRpg(Math.round((rebounds / totalGames) * 10) / 10);
  }

  useEffect(() => {
    getPlayer();
  }, []);

  useEffect(() => {
    getStats();
  }, []);

  useEffect(() => {
    calcAve();
  }, [games]);

  if (!player.team || !games[0]) {
    return <CircularProgress display="flex" justifyContent="center" />;
  }

  return (
    <div>
      <Box bg="#b9817f69" w="35vw">
        <Box className="titleContainer" display="flex">
          <Text display="flex" justifyContent="center" w="25%" fontSize="xl">
            {player.team.abbreviation}
          </Text>
          <Heading display="flex" justifyContent="center" w="50%">{player.first_name}</Heading>
          <Text display="flex" justifyContent="center" w="25%">
            {`${player.height_feet}'${player.height_inches}''`}
          </Text>
        </Box>
        <Box>
          <Text>{ppg.toString()}</Text>
          <Text>{apg.toString()}</Text>
          <Text>{rpg.toString()}</Text>
        </Box>
      </Box>
    </div>
  );
}

export default PlayerCard;
