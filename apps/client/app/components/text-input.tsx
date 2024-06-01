import React from 'react'
import { TextField } from '@mui/material'
import { FieldProps } from 'formik'

interface TextInputProps extends FieldProps {
  label: string
  type?: string
}

export const TextInput: React.FC<TextInputProps> = ({ field, form, label, type = 'text' }) => {
  const errorText = form.touched[field.name] && form.errors[field.name]
  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      {...field}
      error={!!errorText}
      helperText={typeof errorText === 'string' ? errorText : ''}
      margin="normal"
    />
  )
}
