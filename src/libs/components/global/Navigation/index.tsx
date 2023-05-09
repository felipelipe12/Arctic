import { Avatar, Flex } from "@chakra-ui/react";

export const Navigation = () => {
    return (
        <Flex bg='winter.100' direction='column' w='full' rounded='2xl' p='4'>
            <Avatar name='Felipe Almeida' rounded='xl' />
        </Flex>
    );
}