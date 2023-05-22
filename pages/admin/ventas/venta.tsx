import React from "react"
import useSWR from "swr"

import {GridCellParams, GridColDef} from "@mui/x-data-grid-pro"

import ROUTES from "../../../constants/routes"
import {fetcherGet} from "../../../hooks/urls"
import DashboardComponent from "../../../components/dashboardComponent"
import {DataGridComponent} from "../../../components/data_grid_component"
import {Box} from "@mui/material"
import clsx from "clsx"
import {laggy} from "../../../hooks/swrHelper"
import {MapComponent} from "../../../components/AereonaveForm/MapComponent";
import {EmpleadoForm} from "../../../components/EmpleadoForm/EmpleadoForm";
import {VentaForm} from "../../../components/VentaForm/VentaForm";

export default function VentaView() {
  const headCells: GridColDef[] = [
    {
      field: "customer_ref",
      headerName: "Customer",
      flex: 1,
      cellClassName: (params: GridCellParams<number>) =>
        clsx("super-app", {
          negative: params.row.credit_limit > 0 && params.row.credit_limit < params.row.order_amount,
          positive: params.row.credit_limit > params.row.order_amount
        })
    },
    {field: "order_amount", headerName: "Order Amount", flex: 1},
    {field: "credit_limit", headerName: "Credit Limit", flex: 1},
    {field: "agreement_status", headerName: "Agreement Status", flex: 1},
    {field: "term", headerName: "Term", flex: 1}
  ]

  const session = { accessToken: "test"}


  return (
    <DashboardComponent title={"Crear Venta"}>
      <Box
        sx={{
          width: 1,
          "& .super-app.positive": {
            backgroundColor: "rgba(157, 255, 118, 0.49)",
            color: "#1a3e72",
            fontWeight: "600"
          },
          "& .super-app.negative": {
            backgroundColor: "#d47483",
            color: "#1a3e72",
            fontWeight: "600"
          }
        }}>
        {/*<DataGridComponent data={credit_ready_to_send} headCells={headCells} />*/}
        <VentaForm editMode={false}></VentaForm>
      </Box>
    </DashboardComponent>
  )
}

