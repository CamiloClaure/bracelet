import React from "react"
import {Button, Grid, Link, Paper} from "@mui/material"
import {useRouter} from "next/router"


export default function Home() {
  const session = { accessToken: "test"}
  const router = useRouter()

  if (session) {
    // @ts-ignore
    const callbackUrl =  "/admin/dashboard"
    // router.push(callbackUrl)
  }

  return (
    <Paper className="backGroundMain">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{minHeight: "100vh"}}>
        <h1 style={{color: "white"}}>Tracker de brazaletes</h1>
        <h3 style={{color: "white"}}></h3>
        <Link href="/auth/signin?callbackUrl=/admin/dashboard">
          <Button style={{color: "white"}} variant="outlined">
            Ingresar al portal de usuario
          </Button>
        </Link>
      </Grid>
    </Paper>
  )
}
