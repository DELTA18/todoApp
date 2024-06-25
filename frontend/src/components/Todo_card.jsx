import { Box, Flex, Text } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import {motion} from 'framer-motion'
import React from 'react'

const MotionBox = motion(Box);
const Todo_card = (props) => {
  let date = new Date(props.time)
  let time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

  return (
    <Box w={400} minH={30} m={3} rounded={'lg'} bg={'#FEFEFC'} boxShadow='md' borderColor={'gray.200'} overflow={'hidden'}>
        <Flex>
            <Box w={'10%'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
            <Checkbox colorScheme='green'>
            </Checkbox>
            </Box>
            <Box w={'80%'}>
              <Text px={3}>{props.title} </Text>
              <Text px={3} fontSize='xs' color={'gray.500'} display={'flex'} justifyContent={'end'}>Added at {time} </Text>
            </Box>
            <MotionBox w={'10%'} minH={50} whileHover={{ backgroundColor: '#ff3f2e' }} transition={{ duration: '1s' }} style={{ transition: 'background-color 0.3s ease' }}  display={'flex'} justifyContent={'center'} alignItems={'center'} >
            <span class="material-symbols-outlined">
              delete
            </span>
            </MotionBox>
        </Flex>
    </Box>
  )
}

export default Todo_card