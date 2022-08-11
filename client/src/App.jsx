import React, { useState } from 'react';
import { ChakraProvider, Box, Heading } from '@chakra-ui/react';
import Header from './Home/Header.jsx';
import PlayerFilter from './Filters/PlayerFilter.jsx';
import PlayerCard from './PlayerCard/PlayerCard.jsx';
import PlayerComp from './PlayerCard/PlayerComp.jsx';

function App() {
  const [infoArr, setInfoArr] = useState([
    {
      player: 'lebron',
      season: '2021',
    },
    {
      player: 'carmelo',
      season: '2021',
    },
  ]);

  return (
    <ChakraProvider>
      <Header />
      <PlayerFilter />
      <PlayerComp infoArr={infoArr} setInfo={setInfoArr} />
    </ChakraProvider>
  );
}

export default App;
