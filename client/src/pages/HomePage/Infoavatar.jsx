/* eslint-disable react/prop-types */
import { Box, HStack, Icon, Stack, VStack } from '@chakra-ui/react'
// icons
import { MdPerson, MdPhone, MdWork } from "react-icons/md";
import Btn from '../../components/Btn';


const Infoavatar = ({ data }) => {
  return (
    <Box w={'100%'} h={'100%'} p={2}>
      <Stack display={"flex"} w={'100%'} flexDirection={{ base: 'column', md: 'row' }} h={'100%'} justify={"space-between"} alignItems={"start"} spacing={{ base: 2, md: 2 }} >
        {/* Box ฝั่งซ้าย เเสดงข้อมูล */}
        <Box w={{ base: '100%', md: '60%' }} h={'100%'}>
          <VStack w={'100%'} h={'100%'} py={{ base: 0, md: 4 }} px={{ base: 2, md: 10 }} alignItems={"start"} justifyContent={"space-around"}>
            <HStack spacing={4}>
              <Icon as={MdPerson} boxSize={10} boxShadow={'lg'} color={'white'} bg={'rgba(51, 51, 51,0.7)'} p={1.5} rounded={'md'} />
              <Box as="h4" letterSpacing={2} color={{ base: 'white', md: '#181818' }} fontWeight={'bold'} textTransform={'uppercase'} fontSize={{ base: 16, md: 20, lg: 28 }} opacity={0.8}>{data.name}</Box>
            </HStack>
            <HStack spacing={4}>
              <Icon as={MdPhone} boxSize={10} boxShadow={'lg'} color={'white'} bg={'rgba(51, 51, 51,0.7)'} p={1.5} rounded={'md'} />
              <Box as="h4" letterSpacing={2} color={{ base: 'white', md: '#181818' }} fontWeight={'bold'} textTransform={'uppercase'} fontSize={{ base: 16, md: 20, lg: 28 }} opacity={0.8}>{data.phone}</Box>
            </HStack>
            <HStack spacing={4}>
              <Icon as={MdWork} boxSize={10} boxShadow={'lg'} color={'white'} bg={'rgba(51, 51, 51,0.7)'} p={1.5} rounded={'md'} />
              <Box as="h4" letterSpacing={2} color={{ base: 'white', md: '#181818' }} fontWeight={'bold'} textTransform={'uppercase'} fontSize={{ base: 16, md: 20, lg: 28 }} opacity={0.8}>{data.vacancy}</Box>
            </HStack>
          </VStack>
        </Box>
        {/* เส้นเเบ่งตรงกลาง */}
        <Box display={{ base: 'none', md: 'block' }} w={'1px'} h={'100%'} bg={'rgb(255, 70, 85)'}></Box>
        {/* Box ทางขวา */}
        <Box w={{ base: '100%', md: '40%' }} h={'100%'} display={'flex'} flexDirection={{ base: 'row', md: 'column', xl: 'row' }} alignItems={'center'} justifyContent={'space-around'} py={{ base: 4, md: 0 }}>
          {/* ปุ่ม สามารถส่ง props id กับ text ได้ */}
          <Btn id="1" text='ข้อความปุ่ม ของปุ่มที่1' />
          <Btn id="2" text='ข้อความปุ่ม ของปุ่มที่2'/>
        </Box>
      </Stack>
    </Box>
  )
}

export default Infoavatar