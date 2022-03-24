import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'
import { 
  FormControl,
  FormLabel,
  Input as ChackraInput,
  InputProps as ChackraInputProps,
  FormErrorMessage
} from "@chakra-ui/react"

interface InputProps extends ChackraInputProps {
  name: string
  label?: string
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement,InputProps> = ({ 
  name, 
  label,
  error = null,
  ...props 
}, ref) => {
  console.log(error)
  return (
    <FormControl isInvalid={!!error}>
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
      {!!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)