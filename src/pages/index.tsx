import { Box, Heading } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Values } from "../components/Values";

export default function Home() {
  return (
    <Box>
      <Header />
      <Banner />

      <Box
        maxW={1160}
        mx="auto"
        mt="20"
      >
        <Values />

        <Box h="2px" w={90} bg="gray.800" mt="20" mx="auto" />

        <Heading
          fontWeight="500"
          color="gray.600"
          lineHeight="54px"
          textAlign="center"
          mt="54px"
        >
          Vamos nessa? <br/>Então escolha seu continente
        </Heading>
      </Box>
    </Box>
  )
}
