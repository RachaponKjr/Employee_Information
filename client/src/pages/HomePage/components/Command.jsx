import { Avatar, Box } from '@chakra-ui/react'
const Command = () => {
    return (
        <>
            <Box w={'100%'} display={"flex"} flexDirection={"column"} gap={1} h={'min-content'} maxH={'6rem'} bg={'rgba(48, 49, 52,0.5)'} px={6} py={2} overflow={"hidden"} opacity={0.8} _hover={{ opacity: 1 }} cursor={"pointer"} borderLeft={"5px solid #FF4655"} transition={"300ms"}>
                <Box display={"flex"} alignItems={"center"} gap={2} w={'100%'}>
                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' size={"sm"} />
                    <Box as="h3" fontWeight={"bold"} fontSize={18} color={"white"}>Jhon Doe</Box>
                    <Box as="span" fontSize={14} opacity={0.7} color={"#6D6D6D"}>12/2/2022</Box>
                </Box>
                <Box as="h6" color={"white"} fontSize={13}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Box>
            </Box>
        </>
    )
}

export default Command