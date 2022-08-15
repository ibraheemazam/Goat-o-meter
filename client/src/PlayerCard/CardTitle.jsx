import React from 'react';
import {
  Flex, Heading, Text,
} from '@chakra-ui/react';

function CardTitle({ player }) {
  return (
    <Flex m="1vw" className="titleContainer" maxHeight="95px" minWidth="100%">
      <Flex justifyContent="center" flexWrap="wrap" w="20%">
        <Text fontSize="xl">
          {player.team_abbreviation}
        </Text>
      </Flex>
      <Flex w="60%" justifyContent="center">
        <Heading fontSize="4xl" overflow="hidden" textAlign="center">{player.player_name}</Heading>
      </Flex>
      <Flex w="20%">
        <Text display="flex" justifyContent="center">
          {`${player.player_height}`}
        </Text>
      </Flex>
    </Flex>
  );
}

export default CardTitle;
