import React, {useEffect} from "react"
import {Control, useController} from "react-hook-form"
import DatePicker from "@mui/lab/DatePicker"
import TextField from "@mui/material/TextField"

interface DateInputProps {
  control: Control
  name: string
  label: string
  customOnChange?: any
  defaultValue?: any
}

const DateInput = (props: DateInputProps) => {
  const {control, name, label, customOnChange, defaultValue} = props

  const {
    field: {value, onChange},
    fieldState: {error}
  } = useController({
    name,
    control
  })

  useEffect(() => {
    onChange(defaultValue)
  }, [])

  return (
    <DatePicker
      label={label}
      value={value ? value : null}
      onChange={value => {
        onChange(value)
        customOnChange && customOnChange(value)
      }}
      renderInput={params => (
        <TextField {...params} fullWidth margin="normal" error={!!error} helperText={error ? error.message : ""} />
      )}
    />
  )
}

export default DateInput
