// import { Box } from '@chakra-ui/layout';
import React, { useState } from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Button,
  Heading,
  Flex,
} from '@chakra-ui/react';
import {
  MinusIcon,
  AddIcon,
  CloseIcon,
  ArrowRightIcon,
} from '@chakra-ui/icons';

const ShowDetails = () => {
  const [detail, setDetail] = useState(false);

  return (
    <Box w="100%" pl={3} pr={3}>
      <Flex mt="3.5" justifyContent="space-between" px={4}>
        <Text fontWeight="400" fontSize="16px" color="#333333">
          Details
        </Text>
        <Flex alignItems="center" fontWeight="bold" rounded={100} bg="#">
          <AddIcon
            w={5}
            mr={2}
            border="2px"
            borderColor="#666666"
            color="#666666"
            padding="4px"
            borderRadius="5px"
            h={5}
          />
          <CloseIcon
            w={5}
            border="2px"
            borderColor="#666666"
            color="#666666"
            padding="4px"
            borderRadius="5px"
            h={5}
            fontWeight={900}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default ShowDetails;
