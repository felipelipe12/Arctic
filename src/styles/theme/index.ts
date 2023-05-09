import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                bgGradient: 'linear(to-t, #344CB7, #051367)',
                color: '#FFFFFF',
            },
        },
    },
    colors: {
        winter: {
            '100': '#01005E'
        }
    }
});