import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { Card } from "./Card";

export function TravelTypes() {
    const isLargeVersion = useBreakpointValue({
        base: false,
        md: true,
    })

    return (
        <Grid
            width='100%'
            maxWidth={1200}
            mx='auto'
            py='4'
            gridTemplateColumns={['repeat(2, 150px)', 'repeat(2, 150px)', 'repeat(5, 1fr)']}
            gridTemplateRows={['repeat(3, 1fr)', 'repeat(2, 1fr)', '1fr']}
            columnGap={[4, 8, 0]}
            rowGap={[3, 3, 0]}

            justifyContent='center'
        >
            <GridItem>
                <Card label='vida noturna' imageSrc='/cocktail.svg'/>
            </GridItem>

            <GridItem>
                <Card label='praia' imageSrc='/surf.svg' />
            </GridItem>

            <GridItem>
                <Card label='moderno' imageSrc='/building.svg' />
            </GridItem>

            <GridItem>
                <Card label='clássico' imageSrc='/museum.svg' />
            </GridItem>

            <GridItem colSpan={!isLargeVersion ? 2 : 1}>
                <Card label='e mais...' imageSrc='/earth.svg' />
            </GridItem>
        </Grid>
    )
}