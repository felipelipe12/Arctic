import { Footer } from "@/libs/components/global/Footer";
import { Navigation } from "@/libs/components/global/Navigation";
import { Sidebar } from "@/libs/components/global/Sidebar";

import { Flex, Icon, Mark, Text } from "@chakra-ui/react";

import { FaCalendarPlus } from "react-icons/fa";

export const Dashboard = () => {
    return (
        <Flex h='100dvh' overflow='hidden'>
            {/* Global - Sidebar */}
            <Flex h='full' w='20rem' p='4'>
                <Sidebar />
            </Flex>

            {/* Dynamic - Content */}
            <Flex direction='column' gap='4' w='full' p='4'>
                {/* Global - Navigation */}
                <Navigation />

                {/* Dynamic Content */}
                <Flex direction='column' overflow='auto' pr='4'>
                    <Flex w='full' gap='4'>
                        <Flex bg='winter.100' w='25%' p='4' rounded='2xl'>
                            <Flex direction='column' gap='4' w='full'>
                                <Flex justify='space-between'>
                                    <Flex direction='column'>
                                        <Text fontSize='16px'>Lucro</Text>
                                        <Text fontSize='20px' fontWeight='600'>R$ 300.000</Text>
                                    </Flex>
                                    <Flex direction='column' justify='center' align='center' bg='blue.300' h='50px' w='50px' rounded='full'>
                                        <Icon as={FaCalendarPlus} fontSize='20px' />
                                    </Flex>
                                </Flex>
                                <Flex>
                                    <Text fontSize='14px'><Mark color='green.400' fontWeight='700'>+300%</Mark> pontos</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex bg='winter.100' w='25%' p='4' rounded='2xl'>
                            <Flex direction='column' gap='4' w='full'>
                                <Flex justify='space-between'>
                                    <Flex direction='column'>
                                        <Text fontSize='20px' fontWeight='600'>dasdsa</Text>
                                        <Text>dasdsa</Text>
                                    </Flex>
                                    <Flex direction='column' justify='center' align='center' bg='blue.300' h='50px' w='50px' rounded='full'>
                                        <Icon as={FaCalendarPlus} fontSize='20px' />
                                    </Flex>
                                </Flex>
                                <Flex>
                                    <Text>Ok</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex bg='winter.100' w='25%' p='4' rounded='2xl'>
                            <Flex direction='column' gap='4' w='full'>
                                <Flex justify='space-between'>
                                    <Flex direction='column'>
                                        <Text fontSize='20px' fontWeight='600'>dasdsa</Text>
                                        <Text>dasdsa</Text>
                                    </Flex>
                                    <Flex direction='column' justify='center' align='center' bg='blue.300' h='50px' w='50px' rounded='full'>
                                        <Icon as={FaCalendarPlus} fontSize='20px' />
                                    </Flex>
                                </Flex>
                                <Flex>
                                    <Text>Ok</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex bg='winter.100' w='25%' p='4' rounded='2xl'>
                            <Flex direction='column' gap='4' w='full'>
                                <Flex justify='space-between'>
                                    <Flex direction='column'>
                                        <Text fontSize='20px' fontWeight='600'>dasdsa</Text>
                                        <Text>dasdsa</Text>
                                    </Flex>
                                    <Flex direction='column' justify='center' align='center' bg='blue.300' h='50px' w='50px' rounded='full'>
                                        <Icon as={FaCalendarPlus} fontSize='20px' />
                                    </Flex>
                                </Flex>
                                <Flex>
                                    <Text>Ok</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex>
                        dsadsa<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br />fdsa<br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />dsadsa<br />
                        <br /><br />dsadddsad<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br />asdsa
                    </Flex>
                    {/* Global - Footer */}
                    <Footer />
                </Flex>


            </Flex>
        </Flex >
    );
}