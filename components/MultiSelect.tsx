import * as React from "react"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import useSWR from "swr"
import {fetcherGet} from "../hooks/urls"

export default function MultiSelect(props: {value: string; url: string; callback: any}) {
  const {value, url, callback} = props
  let {data: values = []} = useSWR([process.env.NEXT_PUBLIC_BASE_URL + url], fetcherGet)

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      value={value}
      options={values}
      onSelect={callback}
      sx={{width: 300}}
      renderInput={params => <TextField {...params} label="Movie" />}
    />
  )
}
