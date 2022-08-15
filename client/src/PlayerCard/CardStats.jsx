import React from 'react';
import {
  Flex, Text,
} from '@chakra-ui/react';

function CardStats({ player }) {
  return (
    <Flex className="statsContainer" m="2vw" flexDirection="column">
      <Text fontSize="lg">{player.season}</Text>
      <br />
      <Flex flexDirection="row">
        <Text>
          {player.ppg}
          &nbsp;
          points
        </Text>
        &nbsp;
        <Text>
          {player.rpg}
          &nbsp;
          rebounds
        </Text>
        &nbsp;
        <Text>
          {player.apg}
          &nbsp;
          assists
        </Text>
      </Flex>
      <br />
      <Flex>
        <Text fontSize="lg">Is this the goat?</Text>
      </Flex>
    </Flex>
  );
}

export default CardStats;
