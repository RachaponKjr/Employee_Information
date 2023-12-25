import { Box, HStack, Icon, Image, Stack } from '@chakra-ui/react'

import {
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
} from "@chakra-ui/react"
// icons
import { TriangleDownIcon, TriangleUpIcon,Search2Icon } from '@chakra-ui/icons'
// images
import logo from '../imgs/logo.png'
const Navbar = () => {
    return (
        <>
            <HStack spacing={0} bg={"rgba(28, 36, 46,0.9)"} h={'4rem'} flexDuration={"row"} justifyContent={"space-between"} w={'100%'} py={2} px={{base:2,md:10}} position={'absolute'}>
                <Box display={"flex"} gap={4} flexDirection={"row"} justifyItems={"center"} alignItems={"center"} h={'100%'}>
                    <Image src={logo} alt="logo" h={'50px'} />
                    {/* ส่วน Menu */}
                    <Stack color={"white"} display={{base:"none", md:"flex"}}  spacing={2} flexDirection={"row"}>
                        {/* Item menu */}
                        <Menu>
                            {({ isOpen }) => 
                                (<>
                                    <MenuButton cursor={"pointer"} h={'100%'}  py={1} px={4} _hover={{ color: "#FF4655", bg: "#333333", rounded: "md" }}>
                                        ข้อมูล {isOpen ? <Icon as={TriangleUpIcon} boxSize={3} /> : <Icon as={TriangleDownIcon} boxSize={3} />}
                                    </MenuButton>
                                    <MenuList color={"white"} rounded={'none'} bg={'#303741'} border={"none"} zIndex={10} borderTop={"5px solid #FF4655"}>
                                        <MenuItem bg={"transparent"}>Lorem, ipsum.</MenuItem>
                                    </MenuList>
                                </>)
                            }
                        </Menu>

                        <Box as='h4' cursor={"pointer"} h={'100%'} py={1} px={4} _hover={{ color: "#FF4655", bg: "#333333", rounded: "md" }}>
                            Menu1
                        </Box>
                        <Box as='h4' cursor={"pointer"} h={'100%'} py={1} px={4} _hover={{ color: "#FF4655", bg: "#333333", rounded: "md" }}>
                            Menu2
                        </Box>
                        <Box as='h4' cursor={"pointer"} h={'100%'} py={1} px={4} _hover={{ color: "#FF4655", bg: "#333333", rounded: "md" }}>
                            Menu3
                        </Box>
                        <Box as='h4' cursor={"pointer"} h={'100%'} py={1} px={4} _hover={{ color: "#FF4655", bg: "#333333", rounded: "md" }}>
                            Menu4
                        </Box>

                    </Stack>
                </Box>
                {/* Right Navbar */}
                <HStack color={"white"} spacing={4}>
                    <Box p={2.5} display={"flex"} justifyContent={"center"} alignItems={"center"} h={'100%'} cursor={"pointer"} _hover={{ color: "#FF4655", bg: "#333333", rounded: "md" }}><Icon as={Search2Icon} boxSize={4} /></Box>
                    <Box rounded={'md'} fontWeight={"bold"} transition={"all .3s ease"} py={1} px={5} display={"flex"} bg={"#FF4655"} justifyContent={"center"} alignItems={"center"} h={'100%'} cursor={"pointer"} _hover={{ color: "#FF4655", bg: "white" }}>Login</Box>
                </HStack>
            </HStack>
        </>
    )
}

export default Navbar