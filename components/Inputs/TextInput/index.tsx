import React from "react"
import {Control, useController} from "react-hook-form"
import TextField from "@mui/material/TextField"

interface FormInputProps {
  control: Control
  name: string
  label: string
  defaultValue?: string
  enabled?: boolean
  type?: string
  size?: "medium" | "small"
  customOnChange?: any
}

const FormInput = (props: FormInputProps) => {
  const {control, name, label, defaultValue, enabled = true, type, size = "medium", customOnChange} = props

  const {
    field: {value, onChange},
    fieldState: {error}
  } = useController({
    name,
    control,
    defaultValue: defaultValue
  })

  return (
    <TextField
      fullWidth
      margin="normal"
      value={value == null ? "" : value}
      onChange={(values: any) => {
        onChange(values)
        customOnChange && customOnChange(values)
      }}
      variant="outlined"
      label={label}
      disabled={!enabled}
      error={!!error}
      type={type}
      helperText={error ? error.message : ""}
      size={size}
    />
  )
}

export default FormInput
