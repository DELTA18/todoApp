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

 export default function TransitionExample() {
    
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
                onClose();
                successToast();
              }} colorScheme='green' ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    )
  }