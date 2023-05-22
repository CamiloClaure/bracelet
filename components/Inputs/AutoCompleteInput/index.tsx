import React from "react"
import {Control, useController} from "react-hook-form"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"

interface AutoCompleteInputProps {
  control: Control
  options: any
  name: string
  label: string
  defaultValue: string
  freeSolo?: boolean
  key?: string
  customOnChange?: any
  enabled?: boolean
  getOptionLabel?: any
  filterOptions?: any
  size?: any
  isOptionEqualToValue?: any
}

const AutoCompleteInput = (props: AutoCompleteInputProps) => {
  const {
    control,
    name,
    label,
    defaultValue,
    options,
    freeSolo = false,
    key,
    customOnChange,
    enabled = true,
    getOptionLabel,
    filterOptions,
    size,
    isOptionEqualToValue
  } = props
  const {
    field: {value, onChange}
  } = useController({
    name,
    control,
    defaultValue: defaultValue || null
  })
  return (
    <Autocomplete
      value={value ? value : null}
      size={size ? size : "medium"}
      key={name}
      id={name}
      freeSolo={freeSolo}
      options={options}
      renderInput={params => {
        return <TextField {...params} label={label} id={"txt_" + name} key={name} margin="normal" variant="outlined" />
      }}
      onChange={(event, values: any) => {
        onChange(values)
        customOnChange && customOnChange(values)
      }}
      defaultValue={defaultValue}
      disabled={!enabled}
      getOptionLabel={
        getOptionLabel
          ? getOptionLabel
          : option => {
              return option ? option : ""
            }
      }
      isOptionEqualToValue={
        isOptionEqualToValue
          ? isOptionEqualToValue
          : (option, value) => {
              return option == value
            }
      }
      filterOptions={filterOptions}
    />
  )
}

export default AutoCompleteInput
