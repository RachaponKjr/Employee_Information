import { Box, Stack, VStack } from "@chakra-ui/react"

import Avatarlist from "./components/Avatarlist"
import Command from "./components/Command"

import bg3 from '../../imgs/bg3.webp'

// images Avatar
import fade from '../../imgs/Fade.png'
import omen from '../../imgs/Omen.png'
import jett from '../../imgs/jett.png'
import razer from '../../imgs/razer.png'
import phoenix from '../../imgs/Phoenix.png'

import { useState } from "react"
import Infoavatar from "./Infoavatar"
const HomePage = () => {
  const [dataIndex, setDataIndex] = useState(null)

  const mummyData = [{
    id: 1,
    name: 'jett',
    phone: '1849382748',
    vacancy: 'Factory Manager',
    img: fade
  }, {
    id: 2,
    name: 'jim',
    phone: '2049385746',
    vacancy: 'Production Manager',
    img: omen
  },
  {
    id: 3,
    name: 'Boom',
    phone: '2847362516',
    vacancy: 'Production Engineer',
    img: jett
  },
  {
    id: 4,
    name: 'bam',
    phone: '3748362736',
    vacancy: 'Quality Manager',
    img: razer
  },
  {
    id: 5,
    name: 'tom',
    phone: '0829362738',
    vacancy: 'Marketing Manager',
    img: phoenix
  },
  {
    id: 6,
    name: 'to',
    phone: '0829362738',
    vacancy: 'Marketing Manager',
    img: phoenix
  }
  ]

  return (
    <>
      <VStack bg={{ base: '#1C242E', md: '#EEEEEE' }} spacing={0} w={'100%'} h={{ base: 'min-content', md: 'min-content' }}>
        {/* Top page */}
        <Stack spacing={0} pt={"4rem"} flexDirection={{ base: "column", md: "row" }} px={{ base: 4, md: 0 }} backgroundImage={{ base: "none", md: bg3 }} bgRepeat={"no-repeat"} bgSize={"cover"} w={'100%'} h={'70vh'}>
          {/* left Box */}
          <Avatarlist data={mummyData} setDataIndex={setDataIndex} dataIndex={dataIndex} />
          {/* right box */}
          <Box w={{ base: "100%", md: '30%' }} h={'100%'} p={2} display={{ base: 'none', md: 'block' }}>
            <VStack w={'100%'} h={'100%'} spacing={0} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} rounded={'xl'} overflow={"hidden"}>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} fontSize={18} bg={"rgb(48, 55, 65,0.8)"} w={'100%'} h={'3rem'} color={'white'}>Lorem, ipsum dolor.</Box>
              <VStack w={'100%'} h={'100%'} p={2} bg={'rgb(241, 241, 241,0.8)'}>
              {/* Command Box */}
              <Command />
              </VStack>
            </VStack>
          </Box>
        </Stack>
        {/* Infomation Avartar */}
        {dataIndex !== null && (
          <Box w={'100%'} h={{base:'min-content',md:'30vh'}}>
            <Infoavatar data={mummyData[dataIndex]} />
          </Box>
        )}
        {/* Table */}
        <Box id="1" w={'100%'} h={'100vh'} bg={'red'}>  </Box>
        <Box id="2" w={'100%'} h={'100vh'} bg={'green'}>  </Box>
      </VStack>
    </>
  )
}

export default HomePage