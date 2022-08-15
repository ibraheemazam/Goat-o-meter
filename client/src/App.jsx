import React, { useState } from 'react';
import { ChakraProvider, Box, Heading, extendTheme } from '@chakra-ui/react';
import Header from './Home/Header.jsx';
import PlayerFilter from './Filters/PlayerFilter.jsx';
import PlayerCard from './PlayerCard/PlayerCard.jsx';
import PlayerComp from './PlayerCard/PlayerComp.jsx';

const theme = extendTheme({
  colors: {
    orange: '#FFCCB6',
    yellow: '#FFF1B6',
    red: '#FFB6C4',
  },
})

function App() {
  const [infoArr, setInfoArr] = useState([]);

  return (
    <ChakraProvider theme={theme}>
      <Box display="flex" justifyContent="center" h="100vh" w="100vw">
        <Box w="15%" display="flex" justifyContent="center" alignItems="center">
          <Heading>...</Heading>
        </Box>
        <Box w="70%" borderRight="1px dotted" borderLeft="1px dotted">
          <Header />
          <PlayerFilter setInfoArr={setInfoArr} />
          <PlayerComp infoArr={infoArr} />
        </Box>
        <Box w="15%" display="flex" justifyContent="center" alignItems="center">
          <Heading>...</Heading>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
