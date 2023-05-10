import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Accordion as ChakraAccordion, Flex, Icon, Text } from "@chakra-ui/react";
import { FaThLarge } from "react-icons/fa";

export const Navigation = () => {
    return (
        <ChakraAccordion allowToggle>
            <AccordionItem border='0'>
                <AccordionButton rounded='xl' gap='4' p='4' _expanded={{ bg: 'blue.800', color: 'white' }}>
                    <Flex p='2' bg='blue.300' rounded='md'>
                        <Icon as={FaThLarge} />
                    </Flex>
                    <Text w='full' textAlign='left'>Dashboard</Text>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel p='0' my='2'>
                    <Flex direction='column' gap='1'>
                        <Flex as='button' align='center' gap='4' w='full' bg='blue.900' p='4' rounded='xl'>
                            <Flex p='2' bg='blue.300' rounded='md'>
                                <Icon as={FaThLarge} />
                            </Flex>
                            <Text>Dashboard</Text>
                        </Flex>
                    </Flex>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem border='0'>
                <AccordionButton rounded='xl' gap='4' p='4' _expanded={{ bg: 'blue.800', color: 'white' }}>
                    <Flex p='2' bg='blue.300' rounded='md'>
                        <Icon as={FaThLarge} />
                    </Flex>
                    <Text w='full' textAlign='left'>Dashboard</Text>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel p='0' my='2'>
                    <Flex direction='column' gap='1'>
                        <Flex as='button' align='center' gap='4' w='full' bg='blue.900' p='4' rounded='xl'>
                            <Flex p='2' bg='blue.300' rounded='md'>
                                <Icon as={FaThLarge} />
                            </Flex>
                            <Text>Dashboard</Text>
                        </Flex>
                    </Flex>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem border='0'>
                <AccordionButton rounded='xl' gap='4' p='4' _expanded={{ bg: 'blue.800', color: 'white' }}>
                    <Flex p='2' bg='blue.300' rounded='md'>
                        <Icon as={FaThLarge} />
                    </Flex>
                    <Text w='full' textAlign='left'>Dashboard</Text>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel p='0' my='2'>
                    <Flex direction='column' gap='1'>
                        <Flex as='button' align='center' gap='4' w='full' bg='blue.900' p='4' rounded='xl'>
                            <Flex p='2' bg='blue.300' rounded='md'>
                                <Icon as={FaThLarge} />
                            </Flex>
                            <Text>Dashboard</Text>
                        </Flex>
                    </Flex>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem border='0'>
                <AccordionButton rounded='xl' gap='4' p='4' _expanded={{ bg: 'blue.800', color: 'white' }}>
                    <Flex p='2' bg='blue.300' rounded='md'>
                        <Icon as={FaThLarge} />
                    </Flex>
                    <Text w='full' textAlign='left'>Dashboard</Text>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel p='0' my='2'>
                    <Flex direction='column' gap='1'>
                        <Flex as='button' align='center' gap='4' w='full' bg='blue.900' p='4' rounded='xl'>
                            <Flex p='2' bg='blue.300' rounded='md'>
                                <Icon as={FaThLarge} />
                            </Flex>
                            <Text>Dashboard</Text>
                        </Flex>
                    </Flex>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem border='0'>
                <AccordionButton rounded='xl' gap='4' p='4' _expanded={{ bg: 'blue.800', color: 'white' }}>
                    <Flex p='2' bg='blue.300' rounded='md'>
                        <Icon as={FaThLarge} />
                    </Flex>
                    <Text w='full' textAlign='left'>Dashboard</Text>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel p='0' my='2'>
                    <Flex direction='column' gap='1'>
                        <Flex as='button' align='center' gap='4' w='full' bg='blue.900' p='4' rounded='xl'>
                            <Flex p='2' bg='blue.300' rounded='md'>
                                <Icon as={FaThLarge} />
                            </Flex>
                            <Text>Dashboard</Text>
                        </Flex>
                        <Flex as='button' align='center' gap='4' w='full' bg='blue.900' p='4' rounded='xl'>
                            <Flex p='2' bg='blue.300' rounded='md'>
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