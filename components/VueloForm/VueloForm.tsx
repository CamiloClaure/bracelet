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
import DateInput from "../Inputs/DateInput";

export interface LoadFormProps {
  vuelo?: any
  shipment_id?: any
  handleClose?: any
  onSuccessfulEdit?: any
  onErrorEdit?: any
  editMode: boolean
}

export interface Customer {
  customer_name: string
}

export const VueloForm: React.FC<LoadFormProps> = ({
                                                        vuelo,
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
    horaSalida: yup.string().nullable(),
    horaLLegada: yup.string().required(),
    estado: yup.string().required(),
    precio: yup.string().required(),
    stockAsientos: yup.string().required(),
    fecha: yup.string().required(),
    codRuta: yup.string().required(),
    codAeronave: yup.string().nullable(),
  })

  const {control, handleSubmit, setValue} = useForm({
    resolver: yupResolver(loadSchema),
  })

  const createVuelo = data => {
    console.log(data)
    setLoading(true)
    setOpenBackDrop(true)
    fetcherPost(ROUTES.VUELO_CREAR_API, { detalle: { ...data} }, session.accessToken as string)
      .then(response => {
        console.log(response)
        setOpenBackDrop(false)
        setLoading(false)
        // onSuccessfulEdit("The vuelo was created successfully")
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
      createVuelo(formData)
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
            <TextInput control={control} name="horaSalida" label="horaSalida" defaultValue={vuelo?.horaSalida} />
          </Grid>
          <Grid item md={4}>
            <TextInput control={control} name="horaLLegada" label="horaLLegada" defaultValue={vuelo?.horaLLegada} />
          </Grid>
          <Grid item md={2}>
            <TextInput control={control} name="estado" label="estado" defaultValue={vuelo?.estado} />
          </Grid>
          <Grid item md={2}>
            <TextInput control={control} name="precio" label="precio" defaultValue={vuelo?.precio} />
          </Grid>
          <Grid item md={2}>
            <TextInput control={control} name="stockAsientos" label="stockAsientos" defaultValue={vuelo?.stockAsientos} />
          </Grid>
          <Grid item md={2}>
            <DateInput
              control={control}
              name="fecha"
              label="Fecha"
              defaultValue={vuelo?.fecha}
            />
            {/*<TextInput control={control} name="fecha" label="fecha" defaultValue={vuelo?.fecha} />*/}
          </Grid>
          <Grid item md={2}>
            <TextInput control={control} name="codRuta" label="codRuta" defaultValue={"3fa85f64-5717-4562-b3fc-2c963f66afa6"} />
          </Grid>
          <Grid item md={2}>
            {/*emplear un dropdown de aereonaves y rutas*/}
            <TextInput control={control} name="codAeronave" label="codAeronave" defaultValue={"fd653e45-e08e-4a77-96c4-7c4bf54d7d3c"} />
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
