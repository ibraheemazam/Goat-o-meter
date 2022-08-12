import React, { useState, useEffect } from 'react';
import {
  Image, Flex, Heading, Text, CircularProgress,
} from '@chakra-ui/react';
import axios from 'axios';
import CardTitle from './CardTitle.jsx';

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
    <Flex m="1vw">
      <Flex className="cardContainer" flexWrap="wrap" justifyContent="center" w="30vw" maxW="30vw" border="1px" borderRadius="10px" bg="orange">
        <CardTitle player={player} />
        <Flex className="statsContainer" m="2vw" flexDirection="column">
          <Text fontSize="xl">{player.season}</Text>
          <Text>{player.ppg}&nbsp;points</Text>
          <Text>{player.rpg}&nbsp;rebounds</Text>
          <Text>{player.apg}&nbsp;assists</Text>
        </Flex>
        <Flex className="photoContainer">
          <Image display="flex" src={photoSrc} alt="playerPhoto" h="190px" w="260px" />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default PlayerCard;

//bg="#b9817f69"
