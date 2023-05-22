import React, {useState} from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import axios from "axios"
import {useRouter} from "next/router"
import Alert from "@mui/material/Alert"
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import LoadingButton from "@mui/lab/LoadingButton"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.shoptropicals.com/">
        SHOPTROPICALS, ALL RIGHTS RESERVED
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const signupSchema = yup.object().shape({
  email: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().required()
})

export default function SignUp() {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const {
    handleSubmit,
    register,
    formState: {errors}
  } = useForm({
    resolver: yupResolver(signupSchema)
  })

  const onSubmit = async formData => {
    try {
      setLoading(true)
      setErrorMessage("")
      const res = await axios.post(process.env.NEXT_PUBLIC_BASE_URL + "/api/auth/customer/signup", formData, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      setLoading(false)

      router.push("/dashboard")
    } catch (error) {
      setErrorMessage(error?.response?.data?.message ? error?.response?.data?.message : error?.response?.data)
      setLoading(false)
    }
  }

  return (
    <Grid container component="main" sx={{height: "100vh"}}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?police)",
          backgroundRepeat: "no-repeat",
          backgroundColor: theme => (theme.palette.mode === "light" ? theme.palette.grey[50] : theme.palette.grey[900]),
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
          <Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          {errorMessage && (
            <Alert severity="error" onClose={() => setErrorMessage("")}>
              {errorMessage} error occured
            </Alert>
          )}
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{mt: 1}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              autoComplete="username"
              autoFocus
              {...register("username")}
              error={!!errors.username}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              {...register("email")}
              autoComplete="email"
              autoFocus
              error={!!errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              {...register("password")}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={!!errors.password}
            />
            <LoadingButton loading={loading} type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>
              Sign UP
            </LoadingButton>
            <Copyright />
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context: any) {
  return {
    props: {
    }
  }
}
