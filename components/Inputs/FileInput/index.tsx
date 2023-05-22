import React from "react"
import {Control, useController} from "react-hook-form"
import Button from "@mui/material/Button"

interface FormFileInputProps {
  control: Control
  name: string
  label: string
  defaultValue?: string
  enabled?: boolean
  type?: string
  customCallback?: any
}

const FileInput = (props: FormFileInputProps) => {
  const {control, name, label, defaultValue, enabled = true, type, customCallback} = props

  const {
    field: {onChange}
  } = useController({
    name,
    control,
    defaultValue: defaultValue
  })
  const handleCapture = target => {
    onChange(target.target.files[0])
    customCallback && customCallback(target.target.files[0])
  }
  return (
    <>
      <Button variant="contained" component="label">
        {label}
        <input type="file" hidden multiple={false} onChange={handleCapture} />
      </Button>
    </>
  )
}

export default FileInput
