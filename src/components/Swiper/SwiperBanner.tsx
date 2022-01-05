import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';

interface SwiperBannrProps {
    label: string;
    text: string
    imageSrc?: string;
}
 
export function SwiperBanner({ label, text, imageSrc } : SwiperBannrProps){
    return (
        <Box position='relative' mb='2.5'>
            <Box width='95wh'>
                <Image width='100%' src='/europa.png'/>
            </Box>
            <Center position='absolute' top={0} left={0} bottom={0} right={0} margin='auto'>
                <Flex textAlign='center' flexDirection='column'>
                    <Heading color='white' fontWeight='600' fontSize={[24, 30, 36, 48]} mb='4'>{label}</Heading>
                    <Text color='white' fontWeight='600' fontSize={[14, 16, 18, 24]}>{text}</Text>
                </Flex>
            </Center>
        </Box>
    )
}