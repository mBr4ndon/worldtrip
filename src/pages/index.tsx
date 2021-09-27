import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Values } from "../components/Values";
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
          mt="52px"
          mb="52px"
        >
          Vamos nessa? <br/>Então escolha seu continente
        </Heading>

        <Swiper
          navigation
          pagination
          modules={[Navigation, Pagination, A11y]}
        >
          <SwiperSlide>
            <Flex
              bgImage="images/europe.png"
              w="100%"
              h="100%"
              align="center"
              justify="center"
              flexDirection="column"
            >
              <Heading color="white" fontWeight="700" fontSize="48px">Europa</Heading>
              <Text color="gray.100" mt="4" fontWeight="700">O continente mais antigo</Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  )
}
