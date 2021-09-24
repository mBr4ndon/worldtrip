import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";

export function Banner() {
    return (
        <Flex
            w="100%"
            bgImage="url(images/background.png)"
            bgRepeat="no-repeat"
            bgSize="cover"
            py="16"
            px="36"
            justify="space-between"
            align="center"
        >
            <Box>
                <Heading
                    color="white"
                    fontWeight="normal"
                    fontSize="36"
                    lineHeight="53px"
                >
                    5 Continentes, <br/> infinitas possibilidades.
                </Heading>

                <Text
                    color="gray.200"
                    fontSize="20"
                    mt="5"
                    lineHeight="30px"
                >
                    Chegou a hora de tirar do papel a viagem que você <br/> sempre sonhou.
                </Text>
            </Box>

            <Box>
                <Image src="images/airplane.svg" objectFit="cover" mb="-100px"/>
            </Box>
        </Flex>
    );
}