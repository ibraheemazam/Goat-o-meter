import React, { useState, useEffect } from 'react';
import {
  Box, Stack, Image, Input, Select, Heading, Text, CircularProgress,
} from '@chakra-ui/react';
import axios from 'axios';

function PlayerCard({ player }) {
  // const [player, setPlayer] = useState({});
  const [playerID, setPlayerID] = useState({});
  const photoSrc = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerID.person_id}.png`;

  // function getPlayer() {
  //   return (
  //     axios.get('/playerStats', {
  //       params: {
  //         player: playerInfo.player,
  //         season: playerInfo.season,
  //       },
  //     })
  //       .then((result) => {
  //         console.log('player stats line 21', result.data[0]);
  //         if (result.data[0]) {
  //           setPlayer(result.data[0]);
  //         } else {
  //           console.log("that player was not found");
  //         }
  //       })
  //       .catch((err) => console.log('error retrieving player info from API:\n', err))
  //   );
  // }

  function getID() {
    axios.get('playerPhoto', {
      params: {
        name: player.player_name,
      },
    })
      .then((result) => {
        console.log('plater id line 35', result.data);
        setPlayerID(result.data);
      })
      .catch((err) => console.log(err));
  }

  // useEffect(() => {
  //   getPlayer();
  // }, []);

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
          <Image src={photoSrc} alt="playerPhoto" />
        </Box>
      </Box>
    </Box>
  );
}

export default PlayerCard;

//bg="#b9817f69"
