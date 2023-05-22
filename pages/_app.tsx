import "../styles/globals.css"
import React from "react"
import MomentUtils from "@mui/lab/AdapterMoment"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import {LicenseInfo} from "@mui/x-data-grid-pro"
import {NextQueryParamProvider} from "next-query-params"

export default function App({Component, pageProps}) {
  LicenseInfo.setLicenseKey(
    "2054b848feba6eb919e9d4a7ac357bf2T1JERVI6MzA2MzMsRVhQSVJZPTE2NjUzMzc1MzcwMDAsS0VZVkVSU0lPTj0x"
  )

  return (
    <NextQueryParamProvider>
      {/*<LocalizationProvider dateAdapter={MomentUtils}>*/}
        <Component {...pageProps} />
      {/*</LocalizationProvider>*/}
    </NextQueryParamProvider>
  )
}

