import type { NextPage } from "next";
import {Image, Heading, Text, HStack, VStack, Flex, Stack, SimpleGrid, useBreakpointValue, Spacer } from "@chakra-ui/react";
import NavBar from "../components/nav-bar";
import { Box } from "@chakra-ui/react";

const Landing: NextPage = () => {
  return (
    <>
    <NavBar />
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        '/background.png'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 10, md: 20 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <SimpleGrid columns={2}>
        <Stack align={'left'} spacing={4}>
          <Text 
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '5xl', md: '6xl' })}>
            Grand Cheese Race
          </Text>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            It’s the race of the century! 
            All victors return for one final race... 
            who do you think will win?
          </Text>
        </Stack>
        <Stack></Stack>
        </SimpleGrid>
      </VStack>
    </Flex>
    </>
  );
};

export default Landing;

