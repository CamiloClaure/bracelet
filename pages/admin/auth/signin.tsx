import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Alert from "@mui/material/Alert"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import {useRouter} from "next/router"
import LinkN from "next/link";


export default function Signin() {
  const router = useRouter()
  const {error} = router.query

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log(data)
    // eslint-disable-next-line no-console

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
            Sign in
          </Typography>

          {/* Error message */}
          {error && <SignInError error={error} />}

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/*<Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>*/}
            {/*  Sign In*/}
            {/*</Button>*/}
            <LinkN href={"/admin/dashboard"}>
              <Link>Ingresar </Link>
            </LinkN>
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
      csrfToken: "await getCsrfToken(context)"
    }
  }
}

const errors = {
  Signin: "Wrong Credentials",
  EmailCreateAccount: "Wrong Credentials",
  Callback: "Wrong Credentials",
  EmailSignin: "Check your email address.",
  CredentialsSignin: "Sign in failed. Check the details you provided are correct.",
  default: "Wrong Credentials"
}

const SignInError = ({error}) => {
  const errorMessage = error && (errors[error] ?? errors.default)
  return (
    <Alert severity="error" style={{width: "93%"}}>
      {errorMessage}
    </Alert>
  )
}
