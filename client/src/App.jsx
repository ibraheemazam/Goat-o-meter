import React, { useState } from 'react';
import { ChakraProvider, Box, Heading } from '@chakra-ui/react';
import Header from './Home/Header.jsx';
import PlayerFilter from './Filters/PlayerFilter.jsx';
import PlayerCard from './PlayerCard/PlayerCard.jsx';
import PlayerComp from './PlayerCard/PlayerComp.jsx';

function App() {
  const [infoArr, setInfoArr] = useState([]);

  return (
    <ChakraProvider>
      <Header />
      <PlayerFilter setInfoArr={setInfoArr} />
      <PlayerComp infoArr={infoArr} />
    </ChakraProvider>
  );
}

export default App;
