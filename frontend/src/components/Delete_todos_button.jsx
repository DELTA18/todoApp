import { AiFillCarryOut } from "react-icons/ai";

import React from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react'
  import { useToast } from '@chakra-ui/react'
import axios from "axios";

  import { MdDelete } from "react-icons/md";

 export default function TransitionExample({selectedTodos}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  

    const successToast = useToast(
      {
          title: 'Hurrayyyyy!',
          description: "todos deleated",
          status: 'error',
          duration: 5000,
          isClosable: true,
        }
  )
    const deleteTodos = async () => {

      
      selectedTodos.forEach(async (todo) => {      
        let id = todo._id;  
        console.log(id)
        await axios.post('http://localhost:3000/api/todo/deleteTodos', {
          id: id})
          .then((res) => {
            onClose();
            successToast();
            console.log('deleted')
          })
      });
    }

    return (
      <>
        <Button onClick={onOpen} colorScheme='red' rightIcon={<MdDelete />}>Delete Todos</Button>
        <AlertDialog
          motionPreset='slideInBottom'
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />
  
          <AlertDialogContent>
            <AlertDialogHeader>Delete selected todos?</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              selected todos will be permanently deleted. 
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No
              </Button>
              <Button colorScheme='red' ml={3} onClick={deleteTodos}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    )
  }