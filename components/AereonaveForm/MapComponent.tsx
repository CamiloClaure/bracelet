import React, {useEffect, useState} from "react"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import Button from "@mui/material/Button"
import TextInput from "../Inputs/TextInput"
import ROUTES from "../../constants/routes"
import {fetcherGet, fetcherPost, fetcherPut} from "../../hooks/urls"
import {CustomBackdrop} from "../CustomBackdrop"
import {DialogActions, dialogActionsClasses} from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import LoadingButton from "@mui/lab/LoadingButton"
import Grid from "@mui/material/Grid"
import {useStore} from "../../hooks/store"
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

export interface LoadFormProps {
  locations?: Array<any>
  location?: { lat: number, lng: number, address: string }
  zoomLevel?: any
}

export interface Customer {
  customer_name: string
}

export const MapComponent: React.FC<LoadFormProps> = ({ locations, location, zoomLevel }) => {

  const session = { accessToken: "test"}

  const loadSchema = yup.object().shape({
    estadoAeronave: yup.number().nullable(),
    marca: yup.string().required(),
    modelo: yup.string().nullable(),
    capacidad: yup.number().required(),
    nroAsientos: yup.number().nullable(),
    capacidadTanque: yup.number().nullable(),
    aeropuerto: yup.number().nullable(),
  })


  console.log(locations)
    const LocationPin = ({ text }) => (
    <div className="pin" style={{ width: 30, height: 30 }}>
      <a href="">
      <Icon icon={locationIcon} className="pin-icon" style={{ width: 40, height: 40 }}/>
      <p className="pin-text">{text}</p>
      </a>
    </div>
  )
  // @ts-ignore
  return (
    <>
      <div className="map">

        <div className="google-map" style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyB0NHJjv7DQyHhFoIXSMM_mylTIVmCO8PI' }}
            center={location}
            defaultZoom={zoomLevel}
          >

            {locations && locations.length > 0 && Array.isArray(locations) ? locations.map((loc, index) => (
              <LocationPin key={index} text={loc.address}
                // @ts-ignore
                           lat={loc.lat}
                           lng={loc.long}
              />

            )) : undefined}

            {/*<LocationPin text={location.address}*/}
            {/*  // @ts-ignore*/}
            {/*             lat={-17.7838895}*/}
            {/*             lng={-63.1823681}*/}
            {/*/>*/}
          </GoogleMapReact>
        </div>
      </div>
    </>
  )
}
