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

 export default function TransitionExample({selectedTodos}) {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    const successToast = useToast(
        {
            title: 'Hurrayyyyy!',
            description: "todos marked as complete",
            status: 'success',
            duration: 5000,
            isClosable: true,
          }
    )
    
    const setCompleted = async () => {
      
      selectedTodos.forEach(async (todo) => {      
        let id = todo._id;  
        console.log(id)
        await axios.post('http://localhost:3000/api/todo/setCompleted', {
          id: id})
          .then((res) => {
            onClose();
            successToast();
          })
      });
    }
  
    return (
      <>
        <Button onClick={onOpen} colorScheme='green' rightIcon={<AiFillCarryOut/>}>Mark as complete</Button>
        <AlertDialog
          motionPreset='slideInBottom'
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />
  
          <AlertDialogContent>
            <AlertDialogHeader>Mark selected todos as complete?</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              selected todos will be removed from todo list and will be added in completed list. 
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No
              </Button>
              <Button onClick={() => { 
                setCompleted();
              }} colorScheme='green' ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    )
  }