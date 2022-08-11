import React, { useState } from 'react';
import { ChakraProvider, Box, Heading } from '@chakra-ui/react';
import PlayerCard from './PlayerCard.jsx';

function PlayerComp({ infoArr }) {
  return (
    <Box className="playerCompBox" m="3vw" display="flex" overflow="auto">
      {
        infoArr.map((player) => <PlayerCard key={player.player_id} player={player} />)
      }
    </Box>
  );
}

export default PlayerComp;
