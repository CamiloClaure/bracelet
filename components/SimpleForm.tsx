import {
  Alert,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select
} from "@mui/material"
import React, {ReactElement, useState} from "react"
import {styled} from "@mui/system"
import dynamic from "next/dynamic"
import {createTheme, ThemeProvider} from "@mui/material/styles"
import {stateToHTML} from "draft-js-export-html"

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

interface Props {
  formFieldLists: SimpleFormField[][]
  onSubmit: Function
  width: string
  data: Object
  onChangeSync?: Function
  canSubmit?: boolean
  successMessage: string
  errorMessage: string
}

export interface SimpleFormField {
  label: string
  type: "string" | "email" | "multi-check" | "rich-text"
  name: string
  options?: CheckOption[]
  sync?: boolean
}

export interface CheckOption {
  label: string
  value: string | number
  isChecked?: boolean
}

const MainContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-around"
}))

const ContainerColumn = styled("div")(() => ({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  justifyContent: "space-around"
}))

const ContainerColumnLabel = styled("div")(() => ({
  display: "flex",
  flex: 2,
  flexDirection: "column",
  justifyContent: "end"
}))

const ContainerColumnInput = styled("div")(() => ({
  display: "flex",
  flex: 8,
  flexDirection: "column",
  justifyContent: "space-around"
}))

const ContainerRow = styled("div")(() => ({
  display: "flex",
  flex: 1,
  flexDirection: "row",
  marginBottom: "25px"
}))
const Label = styled(FormLabel)(() => ({
  flex: 3,
  textAlign: "end",
  marginRight: "30px"
}))

export default function SimpleForm({
  formFieldLists,
  width,
  data,
  onSubmit,
  onChangeSync,
  canSubmit,
  errorMessage,
  successMessage
}: Props): ReactElement {
  const [formData, setFormData] = useState(data)

  function onChange({target: {value, name}}) {
    if (formFieldLists) setFormData({...formData, [name]: value})
  }

  function onMultiCheckChange({fieldName, sync}, event) {
    const {
      target: {value}
    } = event
    if (sync) onChangeSync({...formData, [fieldName]: [...value]})
    setFormData({...formData, [fieldName]: [...value]})
  }

  function onRichTextChange(fieldName, value) {
    const content = stateToHTML(value.getCurrentContent())
    setFormData({
      ...formData,
      [fieldName]: content
    })
  }

  return (
    <>
      <MainContainer>
        <ContainerColumn
          sx={{
            width,
            minWidth: width,
            maxWidth: width
          }}>
          {errorMessage && (
            <Alert severity="error" color="error">
              {errorMessage}
            </Alert>
          )}
          {successMessage && (
            <Alert severity="success" color="info">
              {successMessage}
            </Alert>
          )}
          {formFieldLists &&
            formFieldLists.map((formFieldArray, index) => (
              <ContainerRow key={index}>
                {formFieldArray.map(formField => [
                  <ContainerColumnLabel key={`label-container-${formField.name}`}>
                    <Label key={`label-${index}`}>{formField.label}</Label>
                  </ContainerColumnLabel>,
                  <ContainerColumnInput key={`input-container-${formField.name}`}>
                    {(formField.type === "email" || formField.type === "string") && (
                      <Input
                        key={`input-${formField.name}`}
                        value={formData[formField.name]}
                        onChange={onChange}
                        name={formField.name}
                      />
                    )}
                    {formField.type === "rich-text" && (
                      <div key={`div-${formField.name}`} style={{marginBottom: "20px"}}>
                        <ThemeProvider theme={theme}>
                          <RichTextEditor
                            key={`rich-text-${formField.name}`}
                            style={{width: "100%"}}
                            label={`Click and type ${formField.label}...`}
                            onChange={onRichTextChange.bind(null, formField.name)}
                          />
                        </ThemeProvider>
                      </div>
                    )}
                    {formField.type === "multi-check" && (
                      <FormControl key={`form-control-${formField.name}`} sx={{m: 1, width: 300}}>
                        <InputLabel key={`input-label-${formField.name}`} id={`simple-form-${formField.name}-label`}>
                          {formField.label}
                        </InputLabel>
                        <Select
                          fullWidth
                          labelId={`simple-form-${formField.name}-label`}
                          id={`simple-form-${formField.name}-select`}
                          key={`simple-form-${formField.name}-select`}
                          multiple
                          value={formData[formField.name]}
                          renderValue={selected => selected.join(", ")}
                          onChange={onMultiCheckChange.bind(null, {
                            fieldName: formField.name,
                            sync: formField.sync
                          })}
                          input={<OutlinedInput label="Name" />}>
                          {formField.options.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                              <Checkbox
                                key={`option-${formField.name}-${option.value}-select`}
                                checked={formData[formField.name].indexOf(option.value) > -1}
                              />
                              <ListItemText
                                key={`label-${formField.name}-${option.value}-select`}
                                primary={option.label}
                              />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                  </ContainerColumnInput>
                ])}
                <br />
                <br />
              </ContainerRow>
            ))}
          <Button
            sx={{
              width,
              minWidth: width,
              maxWidth: width
            }}
            disabled={!canSubmit}
            onClick={onSubmit.bind(null, formData)}>
            Submit
          </Button>
        </ContainerColumn>
      </MainContainer>
    </>
  )
}
