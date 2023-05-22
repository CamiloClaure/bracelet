import axios from "axios"

export const fetcherGet = (url: any) =>
  axios
    .get(url)
    .then((res: {data: any}) => res.data)

export const fetcherGetTokenWithParams = (url: any) =>
  axios
    .get(url)
    .then((res: {data: any}) => res.data)

export const fetcherPost = (url: any, data: any, token: string) =>
  axios
    .post(url, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    })
    .then((res: {data: any}) => res.data)

export const fetcherPostFormContentType = (url: any, data: any, token: string) =>
  axios
    .post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token
      }
    })
    .then((res: {data: any}) => res.data)

export const fetcherPut = (url: any, data: any, token: string) =>
  axios
    .put(url, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    })
    .then((res: {data: any}) => res.data)

export const fetcherPatch = (url: any, data: any, token: string) =>
  axios
    .patch(url, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    })
    .then((res: {data: any}) => res.data)

export const fetcherDelete = (url: any, data: any, token: string) =>
  axios
    .delete(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    })
    .then((res: {data: any}) => res.data)
