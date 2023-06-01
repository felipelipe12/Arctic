import { Flex, IconButton, Image } from "@chakra-ui/react";
import { Information } from "../../widgets/Cards/Information";
import { Navigation } from "./Navigation";

export const Sidebar = () => {
    return (
        <Flex direction='column' gap='4' bg='winter.600' w='full' p='4' rounded='2xl' overflow='hidden'>
            <Flex direction='column' gap='4' h='full' overflow='auto'>
                <Flex justify="center">
                    <Flex align='center' gap='4' py='2'>
                        <Image src='/ChakraUI.svg' w='150px' />
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