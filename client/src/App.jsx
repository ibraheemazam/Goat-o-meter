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
      <Box>
        <Header />
        <PlayerFilter setInfoArr={setInfoArr} />
        <PlayerComp infoArr={infoArr} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
