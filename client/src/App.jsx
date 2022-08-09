import React from 'react';
import { ChakraProvider, Flex, Heading } from '@chakra-ui/react';


const App = function App() {
  return (
    <ChakraProvider>
      <Heading display="flex" justifyContent="center" margin="3vw">
        Goat-o-meter
      </Heading>
      <div>Ibby was here and hes the goatttt</div>
    </ChakraProvider>
  );
};

export default App;
