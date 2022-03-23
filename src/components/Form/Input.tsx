import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import { 
  FormControl,
  FormLabel,
  Input as ChackraInput,
  InputProps as ChackraInputProps 
} from "@chakra-ui/react"

interface InputProps extends ChackraInputProps {
  name: string
  label?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement,InputProps> = ({ 
  name, 
  label, 
  ...props 
}, ref) => {
  return (
    <FormControl>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
      <ChackraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        ref={ref}
        size="lg"
        {...props}
      />
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)