import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material"
import React, {ReactNode} from "react"

export interface CustomDialogComponentProps {
  children?: ReactNode
  title: string
  customButton?: any
  forceAction?: boolean
  buttonVariant?: "text" | "outlined" | "contained"
  buttonSize?: "small" | "medium" | "large"
  showCancelButton?: boolean
  disableButton?: boolean
}

export const CustomDialogComponent: React.FC<CustomDialogComponentProps> = ({
  children,
  customButton,
  title,
  forceAction,
  buttonVariant,
  buttonSize,
  showCancelButton,
  disableButton = false
}) => {
  const [open, setOpen] = React.useState(false)
  if (forceAction) {
    setOpen(forceAction)
  }
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const childrenWithProps = React.Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    // if (React.isValidElement(child)) {
    //   return React.cloneElement(child, {handleClose})
    // }
    return child
  })
  return (
    <>
      <Button variant={buttonVariant} size={buttonSize} onClick={handleClickOpen} disabled={disableButton}>
        {customButton ? customButton : "Open form dialog"}
      </Button>
      <Dialog
        open={open}
        PaperProps={{
          style: {
            maxWidth: "100%"
          }
        }}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{childrenWithProps}</DialogContent>
        {showCancelButton && (
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        )}
      </Dialog>
    </>
  )
}
