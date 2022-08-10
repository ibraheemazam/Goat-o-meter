import React from 'react';
import { ChakraProvider, Box, Heading } from '@chakra-ui/react';
import PlayerFilter from './Filters/Player.jsx';
import PlayerCard from './PlayerCard/PlayerCard.jsx';

function App() {
  return (
    <ChakraProvider>
      <Box m="3vw" mb="6vw" display="flex" alignItems="center" justifyContent="space-evenly">
        <img
          src="photos/194-1947999_funny-goat-png-gg-goat.png"
          alt="goat pic"
          width="20%"
        />
        <Heading fontSize="5xl">
          Goat-o-meter
        </Heading>
        <img
          src="photos/24-240162_goat-png.png"
          alt="goat pic"
          width="20%"
        />
      </Box>
      <Box m="3vw" mb="8vw">
        <PlayerFilter />
      </Box>
      <Box m="3vw">
        <PlayerCard />
      </Box>

    </ChakraProvider>
  );
};

export default App;
