import { Avatar, Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

interface CardProps {
    locale: string;
    country: string;
    imageSrc?: string;
}

export function ContinentCard({ locale, country, imageSrc ='/card_image.png' } : CardProps) {
    return (
        <Box width={255} height={260}>
            <Box>
                <Image src={imageSrc}/>
            </Box>

            <Stack
                direction='row' 
                spacing='12' 
                width='100%' 
                px='4' 
                py='4'
                mt='-1'
                justifyContent='center' 
                borderColor='orange.500' 
                borderWidth={1.5} 
                borderEndStartRadius='md'
                borderEndEndRadius='md'
            >
                <Box>
                    <Heading fontSize={20} fontWeight='semibold' mb='2'>{locale}</Heading>
                    <Text as='span'>{country}</Text>
                </Box>

                <Flex alignItems='center' justifyContent='center'>
                    <Avatar name='teste'/>
                </Flex>
            </Stack>
        </Box>
    )
}