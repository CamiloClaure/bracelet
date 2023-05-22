import React from "react"
import PropTypes from "prop-types"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import ModalTitle from "./components/ModalTitle"

const Modal = ({open, handleClose, title, children, size}) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth={size} aria-labelledby="customized-dialog-title">
      <ModalTitle onClose={handleClose}>{title}</ModalTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  )
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  size: PropTypes.string
}

Modal.defaultProps = {
  size: "md"
}

export default Modal
