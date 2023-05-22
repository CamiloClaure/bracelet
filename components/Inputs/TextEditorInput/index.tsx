import React from "react"
import {Control, useController} from "react-hook-form"
import {createTheme, ThemeProvider} from "@mui/material/styles"
import dynamic from "next/dynamic"
import {styled} from "@mui/system"

interface TextEditorInputProps {
  control: Control
  name: string
  label: string
  defaultValue: string
  keyname: string
}

const theme = createTheme()

Object.assign(theme, {
  overrides: {
    MUIRichTextEditor: {
      root: {
        marginTop: 20,
        width: "80%",
        minHeight: "300px"
      },
      editor: {
        borderBottom: "1px solid gray"
      }
    }
  }
})

const RichTextEditorBase = dynamic(() => import("mui-rte"), {
  ssr: false
})

const RichTextEditor = styled(RichTextEditorBase)(({theme}) => ({
  "#mui-rte-editor-container": {
    border: "solid 1px gray"
  }
}))

const TextEditorInput = (props: TextEditorInputProps) => {
  const {control, name, label, defaultValue, keyname} = props

  const {
    field: {value, onChange},
    fieldState: {error}
  } = useController({
    name,
    control,
    defaultValue: defaultValue || null
  })

  return (
    <ThemeProvider theme={theme}>
      <RichTextEditor
        key={keyname}
        style={{width: "100%"}}
        label={label}
        defaultValue={defaultValue}
        name={name}
        onChange={onChange}
        control={control}
      />
    </ThemeProvider>
  )
}

export default TextEditorInput
