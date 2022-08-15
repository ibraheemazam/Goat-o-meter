import React, { useState } from 'react';
import { ChakraProvider, Heading, Flex } from '@chakra-ui/react';
import PlayerCard from './PlayerCard.jsx';

function PlayerComp({ infoArr }) {
  return (
    <Flex className="playerCompBox" m="3vw" overflow="auto">
      {
        infoArr.map((player) => <PlayerCard key={player.player_id} player={player} />)
      }
    </Flex>
  );
}

export default PlayerComp;

// flexDirection="row-reverse"