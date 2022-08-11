import React, { useState } from 'react';
import { ChakraProvider, Box, Heading } from '@chakra-ui/react';
import PlayerCard from './PlayerCard.jsx';

function PlayerComp({ infoArr }) {
  return (
    <Box m="3vw" display="flex">
      {
        infoArr.map((playerInfo) => <PlayerCard key={playerInfo.player} playerInfo={playerInfo} />)
      }
    </Box>
  );
}

export default PlayerComp;
