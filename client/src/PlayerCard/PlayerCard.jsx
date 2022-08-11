import React, { useState, useEffect } from 'react';
import {
  Box, Stack, Input, Select, Heading, Text, CircularProgress,
} from '@chakra-ui/react';
import axios from 'axios';

function PlayerCard( {playerInfo} ) { //this will take in player and season as props
  const [player, setPlayer] = useState({});

  function getPlayer() {
    return (
      axios.get('/playerStats', {
        params: {
          player: playerInfo.player,
          season: playerInfo.season,
        },
      })
        .then((result) => {
          console.log(result.data);
          setPlayer(result.data[0]);
        })
        .catch((err) => console.log('error retrieving player info from API:\n', err))
    );
  }

  // function getStats() {
  //   return (
  //     axios.get('https://www.balldontlie.io/api/v1/stats', {
  //       params: {
  //         player_ids: [237],
  //         seasons: [2017],
  //         postseason: false,
  //         per_page: 100,
  //       },
  //     })
  //       .then((result) => {
  //         console.log(result.data.data);
  //         setGames(result.data.data);
  //       })
  //       .catch((err) => console.log('error retrieving player info from API:\n', err))
  //   );
  // }

  useEffect(() => {
    getPlayer();
  }, []);

  // useEffect(() => {
  //   getStats();
  // }, []);

  if (!playerInfo.player) {
    return <CircularProgress display="flex" justifyContent="center" />;
  }

  return (
    <Box m="3vw">
      <Box className="cardContainer" w="35vw" border="1px" borderRadius="10px">
        <Box m="1vw" className="titleContainer" display="flex">
          <Text display="flex" justifyContent="center" w="25%" fontSize="xl">
            {player.team_abbreviation}
          </Text>
          <Heading display="flex" justifyContent="center" w="50%">{player.player_name}</Heading>
          <Text display="flex" justifyContent="center" w="25%">
            {`${player.player_height}`}
          </Text>
        </Box>
        <Box m="2vw">
          <Text>{player.ppg}</Text>
          <Text>{player.rpg}</Text>
          <Text>{player.apg}</Text>
        </Box>
        <Box display="flex" justifyContent="center">
          <img src='https://nba-players.herokuapp.com/players/anthony/carmelo' />
        </Box>
      </Box>
    </Box>
  );
}

export default PlayerCard;

//bg="#b9817f69"
