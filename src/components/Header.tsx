import { Box, Flex, IconButton, Image, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from 'react-icons/ri'

export function Header(){
    const route = useRouter()
    return (
        <Box
            width='100%'
            height={100}
            as='header'
            px={[2, 100, 140]}
            py={8}
        >
            <Flex alignItems='center' justifyContent='space-between' maxWidth={1200} mx='auto'>
                {route.asPath != '/' && (
                    <IconButton
                        onClick={() => route.back()}
                        aria-label='Previous Page'
                        color='gray.500'
                        icon={ <RiArrowLeftSLine fontSize={28} />}
                    />
                )}
                <Box size='md' justifySelf='center' justifyItems='center' flex={1} ml={["20%", '25%', "38%"]}>
                    <Image src="/logo.png" />
                </Box>
            </Flex>
            
        </Box>
    )
}