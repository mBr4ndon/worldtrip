import { Box } from "@chakra-ui/react";
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
      </Box>
    </Box>
  )
}
