import {Alert, Snackbar} from "@mui/material"
import React from "react"

export type AlertColor = "success" | "info" | "warning" | "error"
export type Horizontal = "right" | "left" | "center"

interface SnackBarProps {
  openSnackbar?: any
  severity?: string
  message?: string
  maxWidth?: string
  horizontal?: string
  setOpen?: any
}

export const CustomSnackbarComponent = ({
  openSnackbar,
  severity,
  message,
  horizontal = "right",
  maxWidth = "400px",
  setOpen
}: SnackBarProps) => {
  return (
    <Snackbar
      anchorOrigin={{vertical: "top", horizontal: horizontal as Horizontal}}
      open={openSnackbar}
      autoHideDuration={3500}>
      {setOpen ? (
        <Alert
          onClose={() => {
            setOpen && setOpen(false)
          }}
          severity={severity as AlertColor}
          sx={{width: "100%", maxWidth: maxWidth}}>
          {message}
        </Alert>
      ) : (
        <Alert severity={severity as AlertColor} sx={{width: "100%", maxWidth: maxWidth}}>
          {message}
        </Alert>
      )}
    </Snackbar>
  )
}
