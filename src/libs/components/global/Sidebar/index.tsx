import { Flex, Image } from "@chakra-ui/react";
import { Information } from "../../widgets/Cards/Information";
import { Navigation } from "./Navigation";

export const Sidebar = () => {
    return (
        <Flex direction='column' gap='4' bg='winter.100' w='full' p='4' rounded='2xl' overflow='hidden'>
            <Flex direction='column' gap='4' h='full' overflow='auto'>
                <Flex justify="center">
                    <Flex gap='4'>
                        <Image src='/ChakraUI.svg' w='100px' />
                    </Flex>
                    <Flex>
                        {/* Toggle */}
                    </Flex>
                </Flex>

                {/* Widget - Navigation */}
                <Navigation />
            </Flex>

            {/* Widget - Cards (Information) */}
            <Information />
        </Flex>
    );
}