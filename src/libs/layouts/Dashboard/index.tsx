import { Footer } from "@/libs/components/global/Footer";
import { Navigation } from "@/libs/components/global/Navigation";
import { Sidebar } from "@/libs/components/global/Sidebar";
import { Previews } from "@/libs/components/widgets/Previews";

import { Flex, Grid, GridItem } from "@chakra-ui/react";


export const Dashboard = () => {
    return (
        <Flex h='100dvh' overflow='hidden'>
            {/* Global - Sidebar */}
            <Flex h='full' w='20rem' p='4'>
                <Sidebar />
            </Flex>

            <Flex direction='column' gap='4' w='full' p='4'>
                {/* Global - Navigation */}
                <Navigation />

                {/* Dynamic Content */}
                <Flex direction='column' gap='4' overflow='auto' pr='4'>
                    {/* Widget - Previews */}
                    <Previews />

                    <Grid templateRows='repeat(4, 1fr)' templateColumns='repeat(2, 1fr)' gap='4'>
                        <GridItem>
                            <Flex bg='winter.100' p='4' rounded='2xl'>
                                dsadsad
                            </Flex>
                        </GridItem>
                        <GridItem>
                            <Flex bg='winter.100' p='4' rounded='2xl'>
                                dsadsad
                            </Flex>
                        </GridItem>
                        <GridItem>
                            <Flex bg='winter.100' p='4' rounded='2xl'>
                                dsadsad
                            </Flex>
                        </GridItem>
                        <GridItem>
                            <Flex bg='winter.100' p='4' rounded='2xl'>
                                dsadsad
                            </Flex>
                        </GridItem>
                        <GridItem>
                            <Flex bg='winter.100' p='4' rounded='2xl'>
                                dsadsad
                            </Flex>
                        </GridItem>
                        <GridItem>
                            <Flex bg='winter.100' p='4' rounded='2xl'>
                                dsadsad
                            </Flex>
                        </GridItem>
                        <GridItem>
                            <Flex bg='winter.100' p='4' rounded='2xl'>
                                dsadsad
                            </Flex>
                        </GridItem>
                    </Grid>

                    {/* Global - Footer */}
                    <Footer />
                </Flex>
            </Flex>
        </Flex >
    );
}