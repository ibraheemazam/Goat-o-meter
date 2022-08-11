import React, { useState, useEffect } from 'react';
import {
  Box, Stack, Image, Input, Select, Heading, Text, CircularProgress,
} from '@chakra-ui/react';
import axios from 'axios';

function PlayerCard({ player }) {
  const [photoSrc, setPhotoSrc] = useState('photos/goat-transparent-1.png');

  function getID() {
    axios.get('playerPhoto', {
      params: {
        name: player.player_name,
      },
    })
      .then((result) => {
        console.log('plater id line 35', result.data);
        if (result.data) {
          console.log(result.data, 'line 22 id data');
          setPhotoSrc(`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${result.data.person_id}.png`)
        }
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getID();
  }, [player]);

  if (!player.player_name) {
    return <CircularProgress display="flex" justifyContent="center" />;
  }

  return (
    <Box m="3vw">
      <Box className="cardContainer" w="30vw" border="1px" borderRadius="10px">
        <Box m="1vw" className="titleContainer" display="flex">
          <Box display="flex" justifyContent="center" flexWrap="wrap" w="25%">
            <Text fontSize="xl">
              {player.team_abbreviation}
            </Text>
          </Box>
          <Heading display="flex" justifyContent="center" w="50%">{player.player_name}</Heading>
          <Text display="flex" justifyContent="center" w="25%">
            {`${player.player_height}`}
          </Text>
        </Box>
        <Box m="2vw">
          <Text fontSize="xl">{player.season}</Text>
          <Text>{player.ppg}&nbsp;points</Text>
          <Text>{player.rpg}&nbsp;rebounds</Text>
          <Text>{player.apg}&nbsp;assists</Text>
        </Box>
        <Box display="flex" justifyContent="center">
          <Image src={photoSrc} alt="playerPhoto" h="190px" w="260px" />
        </Box>
      </Box>
    </Box>
  );
}

export default PlayerCard;

//bg="#b9817f69"
