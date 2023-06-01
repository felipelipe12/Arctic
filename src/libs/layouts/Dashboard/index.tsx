import { Footer } from "@/libs/components/global/Footer";
import { Header } from "@/libs/components/global/Header";
import { Sidebar } from "@/libs/components/global/Sidebar";
import { Support } from "@/libs/components/global/Support";
import { LineChart } from "@/libs/components/widgets/Charts/LineChart";
import { Previews } from "@/libs/components/widgets/Previews";

import { Flex, Grid, GridItem } from "@chakra-ui/react";

export const Dashboard = () => {
    return (
        <Flex h='100dvh' overflow='hidden'>
            {/* Global - Sidebar */}
            <Flex h='full' w='20rem' py='4' pl='4'>
                <Sidebar />
            </Flex>

            {/* Global - Main */}
            <Flex direction='column' gap='4' w='full' p='4'>
                {/* Global - Header */}
                <Header />

                <Flex direction='column' gap='4' overflow='auto' pr='4'>
                    {/* Widget - Previews */}
                    <Previews />

                    <Grid templateColumns='repeat(2, 1fr)' gap='4'>
                        <GridItem>
                            {/* Widget - Chart (Line Chart) */}
                            <LineChart />
                        </GridItem>
                        <GridItem>
                            <Flex bg='winter.600' p='4' rounded='2xl' h='200px'>
                                dsadsad
                            </Flex>
                        </GridItem>
                        <GridItem>
                            <Flex bg='winter.600' p='4' rounded='2xl' h='200px'>
                                dsadsad
                            </Flex>
                        </GridItem>
                        <GridItem>
                            <Flex bg='winter.600' p='4' rounded='2xl' h='200px'>
                                dsadsad
                            </Flex>
                        </GridItem>
                        <GridItem>
                            <Flex bg='winter.600' p='4' rounded='2xl' h='300px'>
                                dsadsad
                            </Flex>
                        </GridItem>
                        <GridItem>
                            <Flex bg='winter.600' p='4' rounded='2xl' h='300px'>
                                dsadsad
                            </Flex>
                        </GridItem>
                    </Grid>

                    {/* Global - Footer */}
                    <Footer />
                </Flex>
            </Flex>

            {/* Global - Support */}
            <Support />
        </Flex >
    );
}