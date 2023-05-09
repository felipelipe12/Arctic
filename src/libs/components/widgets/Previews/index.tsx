import { Flex, Grid, GridItem, Icon, Mark, Text } from "@chakra-ui/react";
import { FaCalendarPlus, FaPlus } from "react-icons/fa";

export const Previews = () => {
    return (
        <Grid w='full' templateColumns='repeat(4, 1fr)' gap='4'>
            <GridItem bg='winter.100' w='full' p='4' rounded='2xl'>
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
            </GridItem>
            <GridItem bg='winter.100' w='full' p='4' rounded='2xl'>
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
            </GridItem>
            <GridItem bg='winter.100' w='full' p='4' rounded='2xl'>
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
            </GridItem>
            <GridItem w='full' p='4' border='2px' borderStyle='dotted' rounded='2xl'>
                <Flex justify='center' align='center' h='full'>
                    <Icon as={FaPlus} />
                </Flex>
            </GridItem>
        </Grid>
    );
}