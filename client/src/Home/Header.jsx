import React from 'react';
import { Flex, Heading, Image } from '@chakra-ui/react';

function Header() {
  return (
    <Flex className="headerContainer" m="1vw" alignItems="center" justifyContent="space-evenly" h="15%">
      <Image
        className="leftImage"
        src="photos/194-1947999_funny-goat-png-gg-goat.png"
        alt="goat pic"
        width="20%"
      />
      <Heading className="titleHeading" fontSize="5xl">
        Goat-o-meter
      </Heading>
      <Image
        className="rightImage"
        src="photos/24-240162_goat-png.png"
        alt="goat pic"
        width="20%"
      />
    </Flex>
  );
}

export default Header;
