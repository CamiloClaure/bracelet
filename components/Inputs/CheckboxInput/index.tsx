import React from "react"
import {Control, useController} from "react-hook-form"
import Checkbox from "@mui/material/Checkbox"

interface CheckboxInputProps {
  control: Control
  name: string
  label?: string
  defaultValue?: string
  enabled?: boolean
  type?: string
  customOnChange?: any
}

const CheckboxInput = (props: CheckboxInputProps) => {
  const {control, name, label, defaultValue, enabled = true, type, customOnChange} = props

  const {
    field: {value, onChange},
    fieldState: {error}
  } = useController({
    name,
    control
  })

  return (
    <Checkbox
      checked={value ? value : false}
      name={name}
      disabled={!enabled}
      onChange={event => {
        onChange(event)
        customOnChange && customOnChange(event)
      }}
      inputProps={{"aria-label": "controlled"}}
    />
  )
}

export default CheckboxInput
