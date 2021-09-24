import { SimpleGrid, Flex, Image, Text } from "@chakra-ui/react";

export function Values() {
    return (
        <SimpleGrid w="100%" minChildWidth={160} gap="10">
            <Flex justify="center" align="center" flexDirection="column">
                <Image src="images/cocktail.svg" alt="Cocktail" boxSize="85px" mb="6"/>
                <Text
                    fontSize="24px"
                    color="gray.500"
                    fontWeight="semibold"
                >
                    vida notura
                </Text>
            </Flex>
            <Flex justify="center" align="center" flexDirection="column">
                <Image src="images/surf.svg" alt="Cocktail" boxSize="85px" mb="6"/>
                <Text
                    fontSize="24px"
                    color="gray.500"
                    fontWeight="semibold"
                >
                    praia
                </Text>
            </Flex>
            <Flex justify="center" align="center" flexDirection="column">
                <Image src="images/building.svg" alt="Cocktail" boxSize="85px" mb="6"/>
                <Text
                    fontSize="24px"
                    color="gray.500"
                    fontWeight="semibold"
                >
                    moderno
                </Text>
            </Flex>
            <Flex justify="center" align="center" flexDirection="column">
                <Image src="images/museum.svg" alt="Cocktail" boxSize="85px" mb="6"/>
                <Text
                    fontSize="24px"
                    color="gray.500"
                    fontWeight="semibold"
                >
                    clássico
                </Text>
            </Flex>
            <Flex justify="center" align="center" flexDirection="column">
                <Image src="images/earth.svg" alt="Cocktail" boxSize="85px" mb="6"/>
                <Text
                    fontSize="24px"
                    color="gray.500"
                    fontWeight="semibold"
                >
                    e mais...
                </Text>
            </Flex>
        </SimpleGrid>
    );
}