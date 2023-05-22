import React from "react"
import {useRouter} from "next/router"


export default function Home() {
  const router = useRouter()
  const session = { accessToken: "test"}

  if (session) {
    // router.push("/admin/dashboard")
  }

  return <></>
}

