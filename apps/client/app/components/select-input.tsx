import React from 'react'
import { TextField, MenuItem } from '@mui/material'
import { FieldProps } from 'formik'

interface SelectInputProps extends FieldProps {
  label: string
  options: string[]
}

export const SelectInput: React.FC<SelectInputProps> = ({ field, form, label, options }) => {
  const errorText = form.touched[field.name] && form.errors[field.name]
  return (
    <TextField
      fullWidth
      select
      label={label}
      {...field}
      error={!!errorText}
      helperText={typeof errorText === 'string' ? errorText : ''}
      margin="normal"
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  )
}
