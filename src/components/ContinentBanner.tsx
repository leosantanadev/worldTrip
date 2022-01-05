import { Box, Flex, Heading, Image } from "@chakra-ui/react";

export function ContinentBanner() {
    return (
        <Box width='100%' height={500} position='relative'>
            <Image
                src='/continent_page.png' 
                width='100%' 
                height='100%' 
                objectFit='cover'
            />

            <Flex
                width='100%'
                height='100%'
                direction='row' 
                position='absolute'
                top={0}
                left={0}
                spacing='48'

                display='flex'
                alignItems='flex-end'
                flexDirection='row'

                px={['8', '8', '16']}
                py='24'
            >
                <Heading
                    color='white'
                    fontSize={[38, 48]}
                    ml={[0, 0, 30, 145]}
                >
                    Europa</Heading>
        </Flex>
            </Box>
    )
}