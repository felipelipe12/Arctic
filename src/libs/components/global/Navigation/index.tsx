import { Avatar, Flex, IconButton } from "@chakra-ui/react";

import { FaBell, FaCog } from "react-icons/fa";

export const Navigation = () => {
    return (
        <Flex justify='end' align='center' gap='4' bg='winter.100' w='full' rounded='2xl' p='4'>
            <Flex gap='4'>
                <IconButton icon={<FaBell />} aria-label="Notifications" rounded='xl' />
                <IconButton icon={<FaCog />} aria-label="Settings" rounded='xl' />
            </Flex>
            <Flex>
                <Avatar name='Felipe Almeida' size='md' rounded='xl' />
            </Flex>
        </Flex>
    );
}