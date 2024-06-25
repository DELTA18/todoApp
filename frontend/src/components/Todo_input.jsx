import FocusLock from "react-focus-lock";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Button, ButtonGroup, FormControl, FormLabel, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Stack, IconButton, Box } from "@chakra-ui/react";

const TextInput = React.forwardRef((props, ref) => {
  return (
      <FormControl>
          <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
          <Input ref={ref} id={props.id} {...props} />
      </FormControl>
  );
});


const Form = ({ firstFieldRef, onCancel }) => {

    const [todo, setTodo] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const localIpAddress = window.location.hostname;

    const submitTodo = async () => {
        console.log(todo);
        console.log(additionalInfo);

        await axios.post(`http://${localIpAddress}:3000/api/todo/addTodo`, {
            todo: todo,
            additionalInfo: additionalInfo
        })
        .then(res => onCancel())
        .catch(err => console.log(err))

      }
  return (
      <Stack spacing={4}>
          <TextInput
              label='Todo'
              id='first-name'
              ref={firstFieldRef}
              defaultValue=''
              onChange={(e) => setTodo(e.target.value)}
          />
          <TextInput label='Additional Info' id='last-name' defaultValue='' onChange={(e) => setAdditionalInfo(e.target.value)} />
          <ButtonGroup display='flex' justifyContent='flex-end'>
              <Button variant='outline' onClick={onCancel}>
                  Cancel
              </Button>
              <Button colorScheme='teal' onClick={submitTodo}>
                  Save
              </Button>
          </ButtonGroup>
      </Stack>
  );
};

const Todo_input = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = React.useRef(null);

  return (
      <>
          <Popover 
              isOpen={isOpen}
              initialFocusRef={firstFieldRef}
              onOpen={onOpen}
              onClose={onClose}
              placement='right'
              closeOnBlur={false}
          >
              <PopoverTrigger>
                  <Button size={'lg'} >Add a Todo </Button>
              </PopoverTrigger>
              <PopoverContent p={5}>
                  <FocusLock returnFocus persistentFocus={false}>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
                  </FocusLock>
              </PopoverContent>
          </Popover>
      </>
  );
};

export default Todo_input;
