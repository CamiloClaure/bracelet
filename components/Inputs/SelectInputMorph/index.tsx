import React from "react"
import {Control, useController} from "react-hook-form"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"

interface SelectInputMorphProps {
  control?: Control
  name: string
  label: string
  options: any
  defaultValue: string
  keyToLook?: any
  customOnChange?: any
  size?: "medium" | "small"
  showEmpty?: boolean
  disabled?: boolean
}

const SelectInputMorph: React.FC<SelectInputMorphProps> = ({
  control,
  name,
  label,
  options,
  defaultValue,
  keyToLook,
  customOnChange,
  size = "medium",
  showEmpty = true,
  disabled = false
}) => {
  const {
    field: {value, onChange},
    fieldState: {error}
  } = useController({
    name,
    control,
    defaultValue: defaultValue != null ? defaultValue : ""
  })

  return (
    <TextField
      disabled={disabled}
      select
      fullWidth
      margin="normal"
      value={value}
      variant="outlined"
      size={size}
      label={label}
      error={!!error}
      onChange={(values: any) => {
        onChange(values)
        customOnChange && customOnChange(values)
      }}
      helperText={error ? error.message : ""}>
      {showEmpty && <MenuItem value="">None</MenuItem>}
      {options?.map(data => {
        if (typeof data === "object" && data != null) {
          return (
            <MenuItem key={data[keyToLook]} value={data[keyToLook]}>
              {data[keyToLook]}
            </MenuItem>
          )
        } else {
          return (
            <MenuItem key={data} value={data}>
              {data}
            </MenuItem>
          )
        }
      })}
    </TextField>
  )
}

export default SelectInputMorph
