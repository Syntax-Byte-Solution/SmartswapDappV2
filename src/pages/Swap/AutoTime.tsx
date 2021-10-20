import React from 'react';
import ShowDetails from './components/details/ShowDetails';
import History from './components/history/History';
import To from './components/sendToken/To';
import From from './components/sendToken/From';
import SwapSettings from './components/sendToken/SwapSettings';
import { VectorIcon, ExclamationIcon } from '../../theme/components/Icons';
import {
  Box,
  Flex,
  Input,
  Text,
  Menu,
  Button,
  Image,
  Center,
  Spacer,
  VStack,
  InputGroup,
  InputRightAddon,
  MenuButton,
  useColorModeValue,
  useMediaQuery
} from '@chakra-ui/react';
import {
  ChevronDownIcon
} from "@chakra-ui/icons";

const SetPrice = () => {
  const [isMobileDevice] = useMediaQuery('(max-width: 750px)');
  const setColor = useColorModeValue('#666666', '#DCE5EF');
  const borderColor = useColorModeValue('#DEE6ED', '#324D68')
  const iconColor = useColorModeValue('#666666', '#DCE6EF');
  const textColorOne = useColorModeValue('#333333', '#F1F5F8');
  const bgColor = useColorModeValue('#ffffff', '#15202B');
  const buttonBgcolor = useColorModeValue('#F2F5F8', '#213345');
  const color = useColorModeValue('#999999', '#7599BD');
  const lightmode = useColorModeValue(true, false);
  const borderTwo = useColorModeValue('#319EF6', '#4CAFFF');

  return (
    <Box fontSize="xl">
      <Flex
        minH="100vh"
        zIndex={1}
        mt={6}
        justifyContent="center"
        flexWrap="wrap"
      >
        {isMobileDevice ? (
          <>
            <Box mx={4} w={['100%', '100%', '45%', '29.5%']} mb={4}>
              <ShowDetails />
            </Box>

            <Box mx={4} w={['100%', '100%', '45%', '29.5%']} mb={4}>
              <SwapSettings/>
              <From/>
              <Box borderColor={borderColor} borderWidth="1px" borderRadius="6px">
                <To/>
                <Flex mt={5} pt={4} pb={4} pr={2} pl={2}>
                  <Text color={textColorOne} fontSize="16px">
                    RigelProtocol
                  </Text>
                  <Spacer/>
                  <VStack>
                    <Text fontSize="24px" color={textColorOne}>
                      2.5566
                    </Text>
                    <Text fontSize="14px" color={color}>
                      -2.56
                    </Text>
                  </VStack>
                </Flex>
              </Box>
              <Box borderColor={borderColor} borderWidth="1px" borderRadius="6px" mt={5} pt={4} pb={4} pr={2} pl={2}>
                <Flex>
                  <Text color={textColorOne} fontSize="16px">
                    Uniswap
                  </Text>
                  <ChevronDownIcon mt={1}/>
                  <Spacer/>
                  <VStack>
                    <Text fontSize="24px" color={textColorOne}>
                      2.6766
                    </Text>
                    <Text fontSize="14px" color={color}>
                      -2.67
                    </Text>
                  </VStack>
                </Flex>
              </Box>
              <Flex  mt={5}>
                <Center borderColor={setColor} borderColor={iconColor} borderWidth="1px" borderRadius={4} w="20px" h="20px">
                  <VectorIcon/>
                </Center>
                <Spacer/>
                <Text fontSize="14px" mr={2} color={textColorOne}>
                  1 RGP = 1.34566 USDT
                </Text>
                <ExclamationIcon/>
              </Flex>
              <Flex mt={5}>
                <VStack>
                  <Flex>
                    <Text fontSize="14px" mr={2}>
                     Swap if price changes by
                    </Text>
                    <ExclamationIcon/>
                  </Flex>
                  <InputGroup size="md" borderRadius="4px" borderColor={borderColor}>
                    <Input placeholder="0" w="60px"/>
                    <InputRightAddon children="%" fontSize="16px"/>
                  </InputGroup>
                </VStack>
                <Spacer/>
                <VStack>
                  <Flex>
                    <Text fontSize="14px" mr={2}>
                     Swap Every
                    </Text>
                    <ExclamationIcon/>
                  </Flex>
                  <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} size="md" bg={bgColor} fontSize="16px" color={textColorOne} borderColor={borderColor} borderWidth="1px">
                      Week
                    </MenuButton>
                  </Menu>
                </VStack>
              </Flex>
              <Flex alignItems="center" mt={5}>
                <Button
                  w="100%"
                  borderRadius="6px"
                  border={lightmode ? '2px' : 'none'}
                  borderColor={borderColor}
                  h="48px"
                  p="5px"
                  m="16px"
                  mt={1}
                  color={color}
                  bgColor={buttonBgcolor}
                  fontSize="18px"
                  boxShadow={lightmode ? 'base' : 'lg'}
                  _hover={{ bgColor: buttonBgcolor }}
                >
                  Enter Percentage
                </Button>
              </Flex>
            </Box>

            <Box mx={4} w={['100%', '100%', '45%', '29.5%']} mb={4}>
              <History />
            </Box>
          </>
        ) : (
          <>
            <Box mx={4} w={['100%', '100%', '45%', '29.5%']} mb={4}>
              <ShowDetails />
            </Box>

            <Box mx={4} w={['100%', '100%', '45%', '29.5%']} borderColor={borderColor} borderWidth="1px" borderRadius="6px" p={4}>
              <SwapSettings/>
              <From />
              <Box borderColor={borderColor} borderWidth="1px" borderRadius="6px" p={3}>
                <To/>
                <Box display="flex" pt={4} pb={4} pr={4} pl={4} borderColor={borderTwo} borderWidth="2px" borderRadius="2px" bg={buttonBgcolor}>
                  <Text color={textColorOne} fontSize="16px">
                    RigelProtocol
                  </Text>
                  <Spacer/>
                  <VStack>
                    <Text fontSize="24px" color={textColorOne}>
                      2.5566
                    </Text>
                    <Text fontSize="14px" color={color}>
                      -2.56
                    </Text>
                  </VStack>
                </Box>
                <Box borderColor={borderColor} borderWidth="1px" borderRadius="6px" mt={5} pt={4} pb={4} pr={2} pl={2}>
                  <Flex>
                    <Text color={textColorOne} fontSize="16px">
                      Uniswap
                    </Text>
                    <ChevronDownIcon mt={1}/>
                    <Spacer/>
                    <VStack>
                      <Text fontSize="24px" color={textColorOne}>
                        2.6766
                      </Text>
                      <Text fontSize="14px" color={color}>
                        -2.67
                      </Text>
                    </VStack>
                  </Flex>
                </Box>
              </Box>

              <Flex  mt={5}>
                <Center borderColor={setColor} borderColor={iconColor} borderWidth="1px" borderRadius={4} w="20px" h="20px">
                  <VectorIcon/>
                </Center>
                <Spacer/>
                <Text fontSize="14px" mr={2} color={textColorOne}>
                  1 RGP = 1.34566 USDT
                </Text>
                <ExclamationIcon/>
              </Flex>
              <Box display="flex" mt={5}>
                <VStack>
                  <Flex>
                    <Text fontSize="14px" mr={2}>
                     Swap if price changes by
                    </Text>
                    <ExclamationIcon/>
                  </Flex>
                  <InputGroup size="md" borderRadius="4px" borderColor={borderColor}>
                    <Input placeholder="0" w="60px"/>
                    <InputRightAddon children="%" fontSize="16px"/>
                  </InputGroup>
                </VStack>
                <Spacer/>
                <VStack>
                  <Flex>
                    <Text fontSize="14px" mr={2}>
                     Swap Every
                    </Text>
                    <ExclamationIcon/>
                  </Flex>
                  <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} size="md" bg={bgColor} fontSize="16px" color={textColorOne} borderColor={borderColor} borderWidth="1px">
                      Week
                    </MenuButton>
                  </Menu>
                </VStack>
              </Box>
              <Box mt={5}>
                <Button
                  w="100%"
                  borderRadius="6px"
                  border={lightmode ? '2px' : 'none'}
                  borderColor={borderColor}
                  h="48px"
                  p="5px"
                  color={color}
                  bgColor={buttonBgcolor}
                  fontSize="18px"
                  boxShadow={lightmode ? 'base' : 'lg'}
                  _hover={{ bgColor: buttonBgcolor }}
                >
                  Enter Percentage
                </Button>
              </Box>

            </Box>

            <Box mx={5} w={['100%', '100%', '45%', '29.5%']} mb={4}>
              <History />
            </Box>
          </>
        )}
      </Flex>
    </Box>
  )
}

export default SetPrice
