import React from 'react';
import { ChakraProvider, Box, Heading } from '@chakra-ui/react';
import PlayerFilter from './Filters/Player.jsx';
import PlayerCard from './PlayerCard/PlayerCard.jsx';

function App() {
  return (
    <ChakraProvider>
      <Box m="3vw" mb="6vw">
        <Heading display="flex" justifyContent="center">
          Goat-o-meter
        </Heading>
      </Box>
      <Box m="3vw">
        <div>Ibby was here and hes the goatttt</div>
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
