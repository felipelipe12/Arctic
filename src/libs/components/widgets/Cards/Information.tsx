import { Button, Flex, Image, Text } from "@chakra-ui/react";

export const Information = () => {
    return (
        <Flex direction='column' align='center' gap='4' bg='winter.700' rounded='2xl' p='4'>
            <Image src='/info.png' w='35px' />
            <Flex direction='column' align='center'>
                <Text fontSize='16px' fontWeight='600'>Need help?</Text>
                <Text fontSize='12px'>Please check our docs.</Text>
            </Flex>
            <Button w='full' bg='winter.900'>Documentation</Button>
        </Flex>
    );
}