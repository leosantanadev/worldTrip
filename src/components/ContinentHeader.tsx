import { Box, Grid, GridItem, Flex, Text, useBreakpointValue, Stack } from "@chakra-ui/react";

export function ContinentHeader() {
    const isLargeVersion = useBreakpointValue({
        base: false,
        lg: true
    })
    return (
        <Grid gridTemplateColumns={isLargeVersion ? 'repeat(2, 1fr)' : '1fr'} gridTemplateRows={isLargeVersion ? '1fr' : 'repeat(2, 1fr)'} gap={[6, 10]}>
            <GridItem>
                <Text fontSize={[19, 20]}>
                A Europa é, por convenção, um dos seis continentes do mundo. 
                 Compreendendo a península ocidental da Eurásia, 
                 a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, 
                 o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                </Text>
            </GridItem>

            <GridItem>
                <Stack direction={['column', 'row']} spacing={['8', '12']}  display='flex' alignItems={["left", "center"]} justifyContent={["left", "center"]} height='100%' px={["0", "8"]} py='2'>
                    <Box 
                        display='flex' 
                        alignItems={["left", "center"]}
                        justifyContent='center' 
                        flexDirection='column' 
                        fontWeight='semibold'
                    >
                        <Text as='span' fontSize={[28, 28, 32]} color='orange.500'>50</Text>
                        <Text as='span' fontSize={[18, 18, 22]}>países</Text>
                    </Box>

                    <Box 
                        display='flex' 
                        alignItems={["left", "center"]}
                        justifyContent='center' 
                        flexDirection='column' 
                        fontWeight='semibold'
                    >
                        <Text as='span' fontSize={[28, 28, 32]} color='orange.500'>60</Text>
                        <Text as='span' fontSize={[18, 18, 22]}>línguas</Text>
                    </Box>

                    <Box 
                        display='flex' 
                        alignItems={["left", "center"]}
                        justifyContent='center' 
                        flexDirection='column' 
                        fontWeight='semibold'
                    >
                        <Text as='span' fontSize={[28, 28, 32]} color='orange.500'>24</Text>
                        <Text as='span' fontSize={[18, 18, 22]}>cidades +100</Text>
                    </Box>
                </Stack>
            </GridItem>
        </Grid>
    )
}