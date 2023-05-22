import {DataGridPro, GridColDef, GridToolbarContainer, GridToolbarExport} from "@mui/x-data-grid-pro"
import {Paper} from "@mui/material"
import React, {ReactNode} from "react"
import {DataGrid} from "@mui/x-data-grid";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  )
}

export interface DataGridProps {
  children?: ReactNode
  data: any
  headCells: GridColDef[]
  checkboxSelection?: boolean
  customSelectionAction?: any
  setClassName?: any
  onRowEditCommit?: any
  onCellDoubleClick?: any
  gridStyles?: any
  loading?: boolean
  autoHeight?: boolean
  rowHeight?: number
  [propName: string]: any
  hasExportButton?: boolean
}

export const DataGridComponent: React.FC<DataGridProps> = ({
  children,
  data,
  headCells,
  checkboxSelection = false,
  gridStyles = false,
  loading = false,
  autoHeight = false,
  hasExportButton = true,
  rowHeight = 25,
  customSelectionAction,
  setClassName = () => {},
  onCellEditCommit = () => {},
  onCellDoubleClick = () => {},
  ...rest
}) => {
  return (
    <Paper
      sx={
        !gridStyles
          ? {
              ...styles.container
            }
          : {
              ...gridStyles.container
            }
      }>
      {children}
      <DataGrid
        rows={data}
        columns={headCells}
        checkboxSelection={checkboxSelection}
        disableSelectionOnClick
        rowHeight={rowHeight}
        autoHeight={autoHeight}
        components={{
          Toolbar: hasExportButton ? CustomToolbar : null
        }}
        loading={loading}
        {...rest}
        onSelectionModelChange={data => {
          customSelectionAction && customSelectionAction(data)
        }}
        getRowClassName={setClassName}
        onCellEditCommit={onCellEditCommit}
        onCellDoubleClick={onCellDoubleClick}
      />
    </Paper>
  )
}

const styles = {
  container: {
    height: "80vh",
    width: "100%",
    marginLeft: "24px"
  }
}
