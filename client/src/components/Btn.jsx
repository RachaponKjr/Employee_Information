/* eslint-disable react/prop-types */
import { Box } from '@chakra-ui/react'
import './styles/Btn.css'

const Btn = ({id,text}) => {
    const scrollDown = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: 'smooth'
          });
          console.log(element)
    }
  return (
    <Box className='btn' bg={'#FF4655'} overflow={'hidden'} cursor={'pointer'} position={'relative'} transitionDuration={'300ms'} color={'white'} h={'min-content'} py={{base:2,sm:"3",md:"6"}} px={{base:2,sm:"6",md:10}} zIndex={0} onClick={() => scrollDown(id)}>
        <Box as='h4' zIndex={10} display={'block'} fontSize={{base:"14",md:'18'}}>{text}</Box>
    </Box>
  )
}

export default Btn