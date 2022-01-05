import { Box, Flex, Heading, Image, Text, useBreakpointValue} from "@chakra-ui/react";

export function Banner() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Box width='100%' height={380} position='relative'>
            <Image 
                src='/background.png' 
                width='100%' 
                height='90%' 
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
                alignItems='center'
                justifyContent='space-between'
                flexDirection='row'

                px={['8', '8', '16']}
                py='8'
            >
                <Box maxWidth={500}>
                    <Heading 
                        color='white'
                        fontSize={[28, 30, 36]}
                        lineHeight='tall'
                        mb='2'
                    >
                        5 Continentes, <br /> infinitas possibilidades.</Heading>
                    <Text 
                        color='gray.200'
                        fontSize={[14, 18]}
                        fontWeight='normal'
                    >Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
                </Box>
                {isWideVersion && (
                    <Box mt='20'>
                        <Image
                            src='/airplane.svg'
                        />
                    </Box>
                )}
            </Flex>
        </Box>
    )
}