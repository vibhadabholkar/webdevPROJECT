import { Box, Image, Heading, Text, HStack, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from 'next/router'
import Landing from "../pages/landing";
import Voting from "../pages/voting";

const NavBar = () => {

  const router = useRouter()

  return (
    <Box px={12} py={2} bg="black">
      <HStack align="center" spacing={4}>
        <Image src="/cheese-icon.svg" w={10} />
        <Heading color="white" fontSize="2xl">
          Grand Cheese Race
        </Heading>
        <Spacer />
        <HStack color="white" fontSize="2xs" fontWeight="semibold">
        <button type="button" onClick={() => router.push('/landing')}>
          HOME
        </button>
        <Text>/</Text>
        <button type="button" onClick={() => router.push('/voting')}>
          VOTING
        </button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;
