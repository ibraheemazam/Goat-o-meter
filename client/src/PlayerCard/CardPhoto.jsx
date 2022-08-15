import React from 'react';
import {
  Image, Flex,
} from '@chakra-ui/react';

function CardPhoto({ photoSrc }) {
  return (
    <Flex className="photoContainer" alignItems="flex-end">
      <Image display="flex" src={photoSrc} alt="playerPhoto" h="190px" w="260px" />
    </Flex>
  );
}

export default CardPhoto;
