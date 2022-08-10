import React, { useState, useEffect } from 'react';
import {
  Box, Stack, Input, Select, Heading, Text, CircularProgress
} from '@chakra-ui/react';
import axios from 'axios';

function PlayerCard() {
  const [player, setPlayer] = useState({});

  useEffect(() => {
    axios.get('https://www.balldontlie.io/api/v1/players', {
      params: {
        search: 'lebron',
      },
    })
      .then((result) => {
        console.log(result.data.data);
        setPlayer(result.data.data[0]);
      })
      .catch((err) => console.log('error retrieving player info from API:\n', err));
  }, []);

  if (!player.team) {
    return <CircularProgress display="flex" justifyContent="center" />;
  }

  return (
    <div>
      <Box bg="#b9817f69" w="35vw">
        <Box display="flex">
          <Text display="flex" justifyContent="center" w="25%">{player.team.abbreviation}</Text>
          <Heading display="flex" justifyContent="center" w="50%">{player.first_name}</Heading>
          <Text display="flex" justifyContent="center" w="25%">LAL</Text>
        </Box>
      </Box>
    </div>
  );
}

export default PlayerCard;
