import { Avatar, Flex, IconButton } from "@chakra-ui/react";

import { FaBars, FaBell, FaCog } from "react-icons/fa";

export const Header = () => {
    return (
        <Flex justify='space-between' align='center' gap='4' bg='winter.600' w='full' rounded='2xl' p='4'>
            <Flex>
                {/* Widget - Toggle */}
                <IconButton icon={<FaBars />} aria-label="Toggle" />
            </Flex>
            <Flex align='center' gap='4'>
                <Flex gap='4'>
                    <IconButton icon={<FaBell />} aria-label="Notifications" rounded='xl' />
                    <IconButton icon={<FaCog />} aria-label="Settings" rounded='xl' />
                </Flex>
                <Flex>
                    <Avatar name='Felipe Almeida' size='md' rounded='xl' />
                </Flex>
            </Flex>
        </Flex>
    );
}