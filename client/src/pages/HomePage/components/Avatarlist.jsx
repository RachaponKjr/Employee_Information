/* eslint-disable react/prop-types */
import { Box, HStack, Icon, Image, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs,  chakra, shouldForwardProp } from '@chakra-ui/react'
import { useRef, useState } from 'react'

// Motion Import
import { motion, isValidMotionProp } from 'framer-motion'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import '../Home.css'

// import required modules
import { EffectCoverflow, Navigation } from 'swiper/modules';


const Avatarlist = ({ data, setDataIndex, dataIndex }) => {
    // Start เก็บ data
    const [mummyData] = useState(data);

    // Swiper
    const swiperRef = useRef();

    console.log(mummyData.length)
    // Framer Motion
    const MotionBox = chakra(motion.div, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
    })

    return (
        // Tabs เเต่ละหน้า
        <Tabs w={{ base: '100%', md: '70%' }} h={'100%'} isFitted variant='enclosed' border={'none'} colorScheme='green' >
            <TabList _focus={{ outline: 'none' }} rounded={'lg'} border={'none'} color={'white'}>
                <Tab border={'none'}>Tab1</Tab>
                <Tab border={'none'}>Tab2</Tab>
            </TabList>
            <TabIndicator
            />
            <TabPanels h={'calc(100% - 2rem)'} w={'100%'}>
                <TabPanel h={'100%'} w={'100%'}>
                    <Box h={'100%'} w={'100%'}>
                        {mummyData.length <= 5 ? (<>
                            { /* Avatar List ใช้กับ ที่มีจำนวนไม่ถึง 5 ตัว*/}
                            <HStack display={{ base: 'none', md: 'flex' }} w={'100%'} h={'100%'}>
                                {mummyData.map((mummy, index) => (
                                    <MotionBox whileInView={{ opacity: 1 }} exit={{ opacity: 0 }} initial={{ opacity: 0 }} transition={{ duration: 0.5, delay: index * 0.3 }} role="group" key={mummy.id} name={mummy.name} p={'1rem'} position={'relative'} w={'20%'} h={'22rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} cursor={'pointer'} filter={'grayscale(100%)'} _hover={{ filter: 'grayscale(0%)' }}>
                                        <Image src={mummy.img} w={'100%'} h={'80%'} objectFit={'contain'} objectPosition={'center'} _groupHover={{ transform: 'scale(1.2)' }} transform={'scale(1.1)'} transition={'.3s'} p={2} alt="jett" />
                                        <Box display={'flex'} py={2} flexDirection={'column'} gap={2} alignItems={'center'} justifyContent={'center'}>
                                            <Box as="h4" color={'#083B8A'} _groupHover={{ zIndex: 1 }} textTransform={'uppercase'} fontWeight={'bold'} mt={2} fontSize={24} p={2}>{mummy.name}</Box>
                                        </Box>
                                    </MotionBox>
                                ))}
                            </HStack>
                        </>
                        ) : (
                            /* Avatar List ใช้กับ ที่มีจำนวนมากกว่า 5 ตัว*/
                            // Carousel Slides
                            <Box h={'100%'} w={'100%'} position={'relative'} px={{base:0,md:14}} display={'flex'} >
                                <Swiper
                                    onSlideChange={(swiper) => setDataIndex(swiper.realIndex)}
                                    effect={'coverflow'}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    initialSlide={dataIndex}
                                    coverflowEffect={{
                                        rotate: 0,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: false,
                                    }}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                        },
                                        480: {
                                            slidesPerView: 2,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                        },
                                        1024: {
                                            slidesPerView: 4,
                                        },
                                    }}
                                    loop={true}
                                    spaceBetween={0}
                                    loopPreventsSliding={true}
                                    modules={[EffectCoverflow, Navigation]}
                                    onBeforeInit={(swiper) => {
                                        swiperRef.current = swiper;
                                      }}
                                    className='mySwiper'
                                >
                                    {mummyData.map((item, index) => (
                                        <>
                                            <SwiperSlide className='swiper-slide' key={index}>
                                                <Image src={item.img} h={'100%'} objectFit={'contain'} {...dataIndex === index ? { filter: "grayscale(0%)" } : { filter: "grayscale(100%)" }} alt="jett" />
                                            </SwiperSlide>
                                        </>
                                    ))}
                                </Swiper>
                                {/* ปุ่มเลื่อนซ้าย ขวา */}
                                <Box position={"absolute"} display={'flex'} alignItems={'center'} zIndex={10} top={0} right={0} bottom={0}  p={{base:0,md:4}}><Icon as={ChevronRightIcon} boxSize={12} cursor={'pointer'} bg={'white'} boxShadow={'lg'} color={'#FF4655'} rounded={'full'} transition={"300ms"} _hover={{bg: '#FF4655', color: 'white'}} onClick={() => swiperRef.current.slideNext()}/></Box>
                                <Box position={"absolute"} display={'flex'} alignItems={'center'} zIndex={10} top={0} bottom={0} left={0}  p={{base:0,md:4}}><Icon as={ChevronLeftIcon} boxSize={12} cursor={'pointer'} bg={'white'} boxShadow={'lg'} color={'#FF4655'} rounded={'full'} transition={"300ms"} _hover={{bg: '#FF4655', color: 'white'}} onClick={() => swiperRef.current.slidePrev()}/></Box>
                            </Box>
                        )}
                    </Box>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default Avatarlist