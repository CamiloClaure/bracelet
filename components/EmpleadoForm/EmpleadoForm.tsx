import React, {useEffect, useState} from "react"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import Button from "@mui/material/Button"
import TextInput from "../Inputs/TextInput"
import ROUTES from "../../constants/routes"
import {fetcherGet, fetcherPost, fetcherPut} from "../../hooks/urls"
import {CustomBackdrop} from "../CustomBackdrop"
import {DialogActions} from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import LoadingButton from "@mui/lab/LoadingButton"
import Grid from "@mui/material/Grid"
import {useStore} from "../../hooks/store"

export interface LoadFormProps {
  empleado?: any
  shipment_id?: any
  handleClose?: any
  onSuccessfulEdit?: any
  onErrorEdit?: any
  editMode: boolean
}

export interface Customer {
  customer_name: string
}

export const EmpleadoForm: React.FC<LoadFormProps> = ({
                                                         empleado,
                                                         shipment_id,
                                                         handleClose,
                                                         onSuccessfulEdit,
                                                         onErrorEdit,
                                                         editMode
                                                       }) => {

  const [openBackDrop, setOpenBackDrop] = React.useState(false)
  const [loading, setLoading] = useState(false)
  const appConfig = useStore(state => state.appConfig)
  const session = { accessToken: "test"}


  const loadSchema = yup.object().shape({
    nombreCompleto: yup.string().nullable(),
    fechaNacimiento: yup.string().required(),
    ci: yup.string().nullable(),
  })

  const {control, handleSubmit, setValue} = useForm({
    resolver: yupResolver(loadSchema),
  })

  const createEmpleado = data => {
    console.log(data)
    setLoading(true)
    setOpenBackDrop(true)
    fetcherPost(ROUTES.EMPLEADO_API, data, session.accessToken as string)
      .then(response => {
        console.log(response)
        setOpenBackDrop(false)
        setLoading(false)
        // onSuccessfulEdit("The empleado was created successfully")
        // handleClose()
      })
      .catch(error => {
        setLoading(false)
        setOpenBackDrop(false)
        // onErrorEdit(error.response.data)
      })
  }

  const updateLoad = data => {

  }

  const onSubmit = formData => {
    if (editMode) {
      updateLoad(formData)
    } else {
      createEmpleado(formData)
    }
  }

  function closeDialog() {
    handleClose()
  }

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} style={{maxWidth: "800px", marginLeft: "30px"}}>
        <Grid container spacing={1}>
          <Grid item md={8}>
            <TextInput control={control} name="nombreCompleto" label="nombreCompleto" defaultValue={empleado?.nombreCompleto} />
          </Grid>
          <Grid item md={4}>
            <TextInput control={control} name="fechaNacimiento" label="fechaNacimiento" defaultValue={empleado?.fechaNacimiento} />
          </Grid>
          <Grid item md={2}>
            <TextInput control={control} name="ci" label="ci" defaultValue={empleado?.ci} />
          </Grid>
        </Grid>

        <DialogActions>
          <Button onClick={closeDialog}>Cancelar</Button>
          <LoadingButton
            loading={loading}
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            loadingPosition="end">
            Guardar
          </LoadingButton>
        </DialogActions>
      </form>



      <CustomBackdrop openBackdrop={openBackDrop} />
    </>
  )
}
