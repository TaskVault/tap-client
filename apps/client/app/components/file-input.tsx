import React from 'react'
import { TextField } from '@mui/material'
import { FieldProps } from 'formik'

interface FileInputProps extends FieldProps {
  label: string
}

export const FileInput: React.FC<FileInputProps> = ({ field, form, label }) => {
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    await form.setFieldValue(
      field.name,
      event.currentTarget.files ? event.currentTarget.files[0] : null,
    )
  }
  return (
    <TextField
      fullWidth
      label={label}
      type="file"
      InputLabelProps={{
        shrink: true,
      }}
      onChange={handleChange}
      margin="normal"
    />
  )
}
