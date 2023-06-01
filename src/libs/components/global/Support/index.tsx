import { Flex, Icon } from "@chakra-ui/react";
import { FaComments } from "react-icons/fa";

export const Support = () => {
    return (
        <Flex position='absolute' right='14' bottom='10'>
            <Flex as='button' justify='center' align='center' bg='winter.700' h='14' w='14' shadow='lg' rounded='2xl'>
                <Icon as={FaComments} fontSize='24' />
            </Flex>
        </Flex>
    );
}