import { Flex, Text } from "@chakra-ui/react";

export const Footer = () => {
    return (
        <Flex justify='space-between' bg='winter.100' rounded='2xl' px='8' py='4'>
            <Flex>
                <Text>© 2023 NETEC Solutions</Text>
            </Flex>
            <Flex gap='8'>
                <Text>License</Text>
                <Text>About Us</Text>
            </Flex>
        </Flex>
    );
}