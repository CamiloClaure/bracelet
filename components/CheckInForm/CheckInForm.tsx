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
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)
