import React from 'react';
import {
  Flex, Heading, Text,
} from '@chakra-ui/react';

function CardTitle({ player }) {
  return (
    <Flex m="1vw" className="titleContainer" maxHeight="95px">
      <Flex display="flex" justifyContent="center" flexWrap="wrap" w="25%">
        <Text fontSize="xl">
          {player.team_abbreviation}
        </Text>
      </Flex>
      <Heading display="flex" justifyContent="flexStart" w="50%" size="xl" overflow="hidden">{player.player_name}</Heading>
      <Text display="flex" justifyContent="center" w="25%">
        {`${player.player_height}`}
      </Text>
    </Flex>
  );
}

export default CardTitle;
