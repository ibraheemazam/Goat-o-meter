import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

function Header() {
  return (
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
  );
}

export default Header;
