import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: 'winter.900',
                color: '#FFFFFF',
            },
        },
    },
    colors: {
        original: {},
        autumn: {
            '100': '#F3D09C',
            '200': '#D6AA68',
            '300': '#CC9544',
            '400': '#966623',
            '500': '#603601',
            '600': '#4B2601',
            '700': '#361500',
            '800': '#291000',
            '900': '#1C0A00'
        },
        spring: {
            '100': '#DBFFE8',
            '200': '#B1FFCC',
            '300': '#8AF5AF',
            '400': '#00FFAB',
            '500': '#0AE19D',
            '600': '#0AD092',
            '700': '#0ABE86',
            '800': '#0A9B6F',
            '900': '#007350'
        },
        summer: {
            '100': '#FFFDD2',
            '200': '#FEF9A7',
            '300': '#FCDE5D',
            '400': '#FAC213',
            '500': '#F9A01A',
            '600': '#F77E21',
            '700': '#E74D38',
            '800': '#D61C4E',
            '900': '#96062C'
        },
        winter: {
            '100': '#CCFFFF',
            '200': '#72FFFF',
            '300': '#39EBFF',
            '400': '#00D7FF',
            '500': '#00B7FF',
            '600': '#0096FF',
            '700': '#2C4BFF',
            '800': '#5800FF',
            '900': '#2D0080'
        }
    }
});