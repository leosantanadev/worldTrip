import type { NextPage } from 'next'

import { Center, Divider, Heading, Stack } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes'
import { Swiper } from '../components/Swiper'


const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <TravelTypes />

      <Center mt='18' mb='22' height={10} width='100%'>
        <Divider width={200} borderWidth={1} opacity={.9} borderColor='gray.500'/>
      </Center>
      
      <Stack
        width='100%'
        spacing='10'
        px={["2", "2", "14", "14", "24"]}
        mb='40px'
      >
        <Center>
          <Heading fontSize={[20, 20, 36]} textAlign='center' lineHeight='shorter'>Vamos nessa? <br /> Então escolha seu continente</Heading>
        </Center>
        <Swiper />
      </Stack>

   </>
  )
}

export default Home
