import type { NextPage } from "next";
import {Image, Text, Flex, Stack, HStack, Button, SimpleGrid, useColorMode, Box, Spacer, Input, useNumberInput } from "@chakra-ui/react";
import NavBar from "../components/nav-bar";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'


const Voting: NextPage = () => {

  const { colorMode, toggleColorMode} = useColorMode();
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = 
    useNumberInput({
        step: 1,
        defaultValue: 0,
        min: 0,
        precision: 2,
      })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return <>
    <NavBar />
    <Stack align = "center">
    <SimpleGrid columns = {2} spacing = {40}>
    <Box w="300px"
          overflow="hidden" bg={ colorMode === "dark" ? "rgb(210, 198, 174)":"rgb(234, 221, 195)"} mt={10}>
          <Image width="300px" height="170px" src=
                "/runner1.jpg"
                alt="Card Image" >
          </Image>
          <Box p={5}>
            <Stack align="left">
              <Text as="h2" fontWeight="normal" my={2} >
                Speedy Sidrimo
              </Text>
              <Stack shouldWrapChildren direction='row'>
              <Text fontWeight="light">
                  Score:
                </Text>
                <NumberInput size='2xs' maxW={16} defaultValue={0} min={0}>
                  <NumberInputField />
                  <HStack alignContent={"right"}>
                  <NumberInputStepper>
                    <HStack>
                    <Button colorScheme='black' variant='outline'>
                      <NumberIncrementStepper />
                    </Button>
                    <Button colorScheme='black' variant='outline'>
                      <NumberDecrementStepper />
                    </Button>
                    </HStack>
                  </NumberInputStepper>
                  </HStack>
                </NumberInput>
              </Stack>
            </Stack>
          </Box>
      </Box>

      <Box w="300px" 
          overflow="hidden" bg={ colorMode === "dark" ? "rgb(210, 198, 174)":"rgb(234, 221, 195)"} mt={10}>
          <Image width="300px" height="170px" src=
                "/runner4.jpeg"
                alt="Card Image" >
          </Image>
          <Box p={5}>
            <Stack align="left">
              <Text as="h2" fontWeight="normal" my={2} >
                Muscular Macy
              </Text>
              <Stack shouldWrapChildren direction='row'>
              <Text fontWeight="light">
                  Score:
                </Text>
                <NumberInput size='2xs' maxW={16} defaultValue={0} min={0}>
                  <NumberInputField />
                  <HStack alignContent={"right"}>
                  <NumberInputStepper>
                    <HStack>
                    <Button colorScheme='black' variant='outline'>
                      <NumberIncrementStepper />
                    </Button>
                    <Button colorScheme='black' variant='outline'>
                      <NumberDecrementStepper />
                    </Button>
                    </HStack>
                  </NumberInputStepper>
                  </HStack>
                </NumberInput>
              </Stack>
            </Stack>
          </Box>
      </Box>
      </SimpleGrid>
      <SimpleGrid columns = {2} spacing = {40}>
    <Box w="300px" alignItems={"center"}   
          overflow="hidden" bg={ colorMode === "dark" ? "rgb(210, 198, 174)":"rgb(234, 221, 195)"} mt={10}>
          <Image width="300px" height="170px" src=
                "/runner3.jpeg"
                alt="Card Image" >
          </Image>
          <Box p={5}>
            <Stack align="left">
              <Text as="h2" fontWeight="normal" my={2} >
                Agile Aspen
              </Text>
              <Stack shouldWrapChildren direction='row'>
              <Text fontWeight="light">
                  Score:
                </Text>
                <NumberInput size='2xs' maxW={16} defaultValue={0} min={0}>
                  <NumberInputField />
                  <HStack alignContent={"right"}>
                  <NumberInputStepper>
                    <HStack>
                    <Button colorScheme='black' variant='outline'>
                      <NumberIncrementStepper />
                    </Button>
                    <Button colorScheme='black' variant='outline'>
                      <NumberDecrementStepper />
                    </Button>
                    </HStack>
                  </NumberInputStepper>
                  </HStack>
                </NumberInput>
              </Stack>
            </Stack>
          </Box>
      </Box>
      <Box w="300px"   
          overflow="hidden" bg={ colorMode === "dark" ? "rgb(210, 198, 174)":"rgb(234, 221, 195)"} mt={10}>
          <Image width="300px" height="170px" src=
                "/runner2.jpeg"
                alt="Card Image" >
          </Image>
          <Box p={5}>
            <Stack align="left">
              <Text as="h2" fontWeight="normal" my={2} >
                Fast-roller Fardan
              </Text>
              <Stack shouldWrapChildren direction='row'>
              <Text fontWeight="light">
                  Score:
                </Text>
                <NumberInput size='2xs' maxW={16} defaultValue={0} min={0}>
                  <NumberInputField />
                  <HStack alignContent={"right"}>
                  <NumberInputStepper>
                    <HStack>
                    <Button colorScheme='black' variant='outline'>
                      <NumberIncrementStepper />
                    </Button>
                    <Button colorScheme='black' variant='outline'>
                      <NumberDecrementStepper />
                    </Button>
                    </HStack>
                  </NumberInputStepper>
                  </HStack>
                </NumberInput>
              </Stack>
            </Stack>
          </Box>
      </Box>
      </SimpleGrid>
      </Stack>
  </>;
};

export default Voting;
