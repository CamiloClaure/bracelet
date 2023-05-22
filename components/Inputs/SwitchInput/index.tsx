import React from "react"
import {Control, useController} from "react-hook-form"
import Switch from "@mui/material/Switch"
import FormLabel from "@mui/material/FormLabel"
import FormControl from "@mui/material/FormControl"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"

interface SwitchInputProps {
  control: Control
  name: string
  label: string
  defaultValue?: string
  enabled?: boolean
}

const SwitchInput = (props: SwitchInputProps) => {
  const {control, name, label, defaultValue, enabled = true} = props

  const {
    field: {value, onChange}
  } = useController({
    name,
    control,
    defaultValue: defaultValue
  })

  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup>
        <FormControlLabel control={<Switch checked={value} onChange={onChange} disabled={!enabled} />} label={label} />
      </FormGroup>
    </FormControl>
  )
}

export default SwitchInput
