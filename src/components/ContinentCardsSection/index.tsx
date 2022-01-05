import { Heading, SimpleGrid } from "@chakra-ui/react";
import { ContinentCard } from "./Card";

export function ContinentCardsSection() {
    return (
        <>
            <Heading fontSize={[26, 26, 36]} textAlign='left' lineHeight='shorter'>Cidades +100</Heading>
            <SimpleGrid mt='12' mb='8' minChildWidth={260} column={4} rowGap={6} columnGap={4}>
                <ContinentCard locale='Londres' country='Reino Unido'/>

                <ContinentCard locale='Londres' country='Reino Unido'/>

                <ContinentCard locale='Londres' country='Reino Unido'/>

                <ContinentCard locale='Londres' country='Reino Unido'/>
            </SimpleGrid>
        </>
    )
}