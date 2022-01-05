import { Box, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

interface CardProps {
    label: string;
    imageSrc: string;
}

export function Card({ label, imageSrc } : CardProps) {
    const isLargeVersion = useBreakpointValue({
        base: false,
        md: true,
    })

    return (
        <Stack my='2'  spacing='4' display='flex' alignItems='center' justifyContent='center' flexDirection={isLargeVersion ? 'column' : 'row'}>
            {isLargeVersion && ( 
                <Image boxSize={75} src={imageSrc}/>
            )}
            <Stack spacing='4' direction='row' display='flex' alignItems='center'>
                {!isLargeVersion && ( 
                    <Box width={4} height={4} backgroundColor='orange.500' borderRadius='full'/>
                )}
                <Text
                    fontWeight='semibold' 
                    fontSize={17}
                >
                    {label}</Text>
            </Stack>
        </Stack>
)
}