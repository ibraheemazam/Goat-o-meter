import React from 'react';
import { Box, Heading, Image } from '@chakra-ui/react';

function Header() {
  return (
    <Box m="1vw" display="flex" alignItems="center" justifyContent="space-evenly" h="15vh">
      <Image
        src="photos/194-1947999_funny-goat-png-gg-goat.png"
        alt="goat pic"
        width="20%"
      />
      <Heading fontSize="5xl">
        Goat-o-meter
      </Heading>
      <Image
        src="photos/24-240162_goat-png.png"
        alt="goat pic"
        width="20%"
      />
    </Box>
  );
}

export default Header;
