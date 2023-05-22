import React, {useState} from "react"

import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import Grid from "@mui/material/Grid"
import LoadingButton from "@mui/lab/LoadingButton"
import SendIcon from "@mui/icons-material/Send"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"
import TextInput from "../Inputs/TextInput"
import {fetcherPost} from "../../hooks/urls"
import ROUTES from "../../constants/routes"

export default function ChangePasswordForm() {

  const [loading, setLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const session = { accessToken: "test"}
  const {control, handleSubmit} = useForm({
    resolver: yupResolver(
      yup.object().shape({
        password: yup.string().required(),
        confirm_password: yup.string().required()
      })
    ),
    defaultValues: {}
  })

  const onSubmit = formData => {
    setErrorMessage(null)
    setShowSuccess(false)
    if (formData.password != formData.confirm_password) {
      setErrorMessage("Password Confirmation is mismatched!")
      return
    }

    setLoading(true)
    fetcherPost(
      ROUTES.RESET_PASSWORD,
      {
        password: formData.password
      },
      session.accessToken as string
    )
      .then(result => {
        setLoading(false)
        setErrorMessage(null)
        setShowSuccess(true)
      })
      .catch(error => {
        setShowSuccess(false)
        setErrorMessage("Error occurred: " + error?.response?.data?.message)
        setLoading(false)
      })
  }

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1}>
        {errorMessage && (
          <Grid item md={12}>
            <Alert severity="error" onClose={() => setErrorMessage(null)}>
              <AlertTitle>Error</AlertTitle>
              {errorMessage}
            </Alert>
          </Grid>
        )}
        {showSuccess && (
          <Grid item md={12}>
            <Alert severity="success" onClose={() => setShowSuccess(false)}>
              <AlertTitle>Success</AlertTitle>
              Your password has been changed successfully
            </Alert>
          </Grid>
        )}
        <Grid item md={6}>
          <TextInput
            control={control}
            name="password"
            label="Password"
            defaultValue={null}
            enabled={true}
            type="password"
          />
        </Grid>
        <Grid item md={6}>
          <TextInput
            control={control}
            name="confirm_password"
            label="Confirm Password"
            defaultValue={null}
            enabled={true}
            type="password"
          />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          style={{marginTop: "50px", marginLeft: "10px"}}>
          <LoadingButton
            loading={loading}
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            loadingPosition="end">
            Save
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  )
}
