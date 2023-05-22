import {Backdrop, CircularProgress} from "@mui/material"
import React from "react"

export const CustomBackdrop = ({openBackdrop}) => {
  return (
    <Backdrop sx={{color: "#fff", zIndex: theme => theme.zIndex.drawer + 1}} open={openBackdrop}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}
