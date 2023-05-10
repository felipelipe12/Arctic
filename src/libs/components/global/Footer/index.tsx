import { Flex, Link, Text } from "@chakra-ui/react";

export const Footer = () => {
    return (
        <Flex justify='space-around' bg='winter.100' rounded='2xl' px='8' py='4'>
            <Flex>
                <Text fontSize='14px'>© 2023 Artic - All Right Reserved.</Text>
            </Flex>
            <Flex gap='8'>
                <Link fontSize='14px'>License</Link>
                <Link fontSize='14px'>About Us</Link>
                <Link fontSize='14px'>Contacts</Link>
            </Flex>
        </Flex>
    );
}