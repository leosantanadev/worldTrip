import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    components: {
        Heading: {
            baseStyle: {
                color: "#47585B",
                fontWeight: '500'
            }
        },
        Text: {
            baseStyle: {
                color: "#47585B",
                fontWeight: '400'

            }
        }
    },
    colors : {
        orange: {
            "500": "#FFBA08",
            "400": "rgba(255, 186, 8, 0.5)"
        },
        gray: {
            "500": "#47585B",
            "400": "#999999",
            "300": "rgba(153, 153, 153, 0.5)",
            "200": "#dadada",
            "100": "#F5F8FA"
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
})