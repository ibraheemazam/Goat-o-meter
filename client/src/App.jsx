import React from 'react';
import { ChakraProvider, Box, Flex, Heading } from '@chakra-ui/react';


const App = function App() {
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
      <Box m="3vw">
        <div>add player cards here</div>
      </Box>
    </ChakraProvider>
  );
};

export default App;
