import { Flex, Image } from "@chakra-ui/react";

export const Sidebar = () => {
    return (
        <Flex justify='space-between' bg='winter.100' direction='column' w='full' p='4' rounded='2xl'>
            <Flex justify="">
                <Flex>
                    <Image src='/Logo.svg' />
                </Flex>
                <Flex>
                    {/* Toggle */}
                </Flex>
            </Flex>
            {/* <Divider /> */}
            <Flex direction='column'>
                <Flex>

                </Flex>
                <Flex bg='white' rounded='2xl'>
                    das
                </Flex>
            </Flex>
        </Flex>
    );
}