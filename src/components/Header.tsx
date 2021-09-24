import { Flex } from '@chakra-ui/react';

export function Header() {
    return (
        <Flex
            w="100%"
            py="6"
            justify="center"
        >
            <img src="images/logo.svg" alt="logo" />
        </Flex>
    );
}