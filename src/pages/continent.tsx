import { Box, Center, Divider } from "@chakra-ui/react";
import { ContinentBanner } from "../components/ContinentBanner";
import { ContinentCardsSection } from "../components/ContinentCardsSection";
import { ContinentHeader } from "../components/ContinentHeader";

export default function ContinentPage() {
    return(
        <>
            <ContinentBanner />

            <Box as='section' px={['20px', '40px']} pt='100px' pb='50' maxWidth={1400} mx='auto'>
                <ContinentHeader />

                <Center my='26px' height={10} width='100%'>
                    <Divider width={200} borderWidth={1} opacity={.9} borderColor='gray.500'/>
                </Center>

                <ContinentCardsSection />
            </Box>
        </>
    )
}