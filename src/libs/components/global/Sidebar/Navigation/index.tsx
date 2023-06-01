import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Accordion as ChakraAccordion, Flex, Icon, Text } from "@chakra-ui/react";
import { FaThLarge } from "react-icons/fa";

export const Navigation = () => {
    return (
        <ChakraAccordion allowToggle display='flex' flexDirection='column' gap='2' overflowY='auto' css={{ '&::-webkit-scrollbar': { display: 'none' } }}>
            <AccordionItem border='0'>
                <AccordionButton rounded='xl' gap='4' p='4' _expanded={{ bg: 'winter.700', color: 'white' }} _hover={{bg: 'winter.700'}}>
                    <Flex p='2' bg='winter.600' rounded='md'>
                        <Icon as={FaThLarge} />
                    </Flex>
                    <Text w='full' textAlign='left'>Dashboard</Text>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel p='0' my='2'>
                    <Flex direction='column' gap='1'>
                        <Flex as='button' align='center' gap='4' w='full' bg='winter.700' p='4' rounded='xl' _hover={{bg: 'winter.700'}}>
                            <Flex p='2' bg='winter.600' rounded='md'>
                                <Icon as={FaThLarge} />
                            </Flex>
                            <Text>Dashboard</Text>
                        </Flex>
                    </Flex>
                </AccordionPanel>
            </AccordionItem>
        </ChakraAccordion>
    );
}