import {GridColDef} from "@mui/x-data-grid-pro"

export const ORDER_HEAD_CELLS: GridColDef[] = [
  {field: "id", headerName: "Id", flex: 1},
  {field: "customer_ref", headerName: "Customer Ref", flex: 1},
  {field: "item_ref", headerName: "Item Ref", flex: 1},
  {field: "description", headerName: "Description", flex: 1},
  {field: "rate", headerName: "Rate", flex: 1},
  {field: "order_qty", headerName: "Order Qty", flex: 1},
  {field: "sales_order_ref_number", headerName: "Sales Order Ref Number", flex: 1},
  {field: "memo", headerName: "Memo", flex: 1},
  {field: "po", headerName: "PO", flex: 1},
  {field: "status", headerName: "Status", flex: 1},
  {field: "pickup_date", headerName: "Pickup Date", flex: 1},
  {field: "received_qty", headerName: "Rcvd Qty", flex: 1},
  {field: "notes_purchasing", headerName: "Purchasing Notes", flex: 1},
  {field: "shipment_id", headerName: "Shipment ID", flex: 1}
]

export const orderStatus = {
  "0_pre_forecast": {text: "0_pre_forecast", color: "#FFFF66", description_external: "Prebook"},
  "0_pre_order": {text: "0_pre_order", color: "#FFFF33", description_external: "Not Submitted"},
  "0_web_order": {text: "0_web_order", color: "#FFF0F5", description_external: "Submitted"},
  "1_new_order": {text: "1_new_order", color: "#ffffff", description_external: "Processing"},
  "1a_ready_to_send": {text: "1a_ready_to_send", color: "#9dd7fb", description_external: "Processing"},
  "2_sent": {text: "2_sent", color: "#85cdfa", description_external: "Processing"},
  "3_confirmed": {text: "3_confirmed", color: "#84e184", description_external: "Processing"},
  "3b_ready_for_pickup": {text: "3b_ready_for_pickup", color: "Silver", description_external: "Processing"},
  "3c_driver_picked_up": {text: "3c_driver_picked_up", color: "#00e600", description_external: "Processing"},
  "4_not_avail": {text: "4_not_avail", color: "#ffe4e1", description_external: "Not Available"},
  "5_chg_order": {text: "5_chg_order", color: "#ffe44d", description_external: "Processing"},
  "6_pending": {text: "6_pending", color: "#ffe033", description_external: "Need Customer Feedback"},
  "7_cancelled": {text: "7_cancelled", color: "#D3D3D3", description_external: "Cancelled"},
  "8_picked_up": {text: "8_picked_up", color: "#5bd75b", description_external: "Ready to Ship"},
  "9_shipped": {text: "9_shipped", color: "#46d246", description_external: "Shipped"},
  "9a_installed": {text: "9a_installed", color: "#46d246", description_external: "Installed"}
}

export const orderStatusAvailEdit = [
  orderStatus["0_pre_forecast"].text,
  orderStatus["0_pre_order"].text,
  orderStatus["6_pending"].text
]

export const requiredFieldsByStatus = {
  "0_pre_forecast": ["invoice_no", "customer_ref", "description", "order_qty"],
  "0_pre_order": ["invoice_no", "customer_ref", "description", "order_qty"],
  "0_legacy": ["invoice_no"],
  "0_web_order": ["invoice_no", "customer_ref", "description", "order_qty"],
  "1_new_order": ["invoice_no", "customer_ref", "description", "order_qty"],
  "1a_ready_to_send": ["invoice_no", "customer_ref", "pickup_date", "description", "order_qty", "po"],
  "2_sent": ["invoice_no", "customer_ref", "pickup_date", "description", "order_qty", "po"],
  "3_confirmed": ["invoice_no", "customer_ref", "pickup_date", "description", "order_qty", "po"],
  "3c_driver_picked_up": ["invoice_no", "customer_ref", "pickup_date", "description", "order_qty", "po"],
  "4_not_avail": ["invoice_no", "customer_ref", "pickup_date", "description", "order_qty", "po"],
  "5_chg_order": ["invoice_no", "customer_ref", "description", "order_qty"],
  "6_pending": ["invoice_no", "customer_ref", "description", "order_qty"],
  "7_cancelled": ["invoice_no"],
  "8_picked_up": ["invoice_no", "customer_ref", "pickup_date", "description", "order_qty", "received_qty", "po"],
  "9_shipped": ["invoice_no", "customer_ref", "pickup_date", "description", "order_qty", "received_qty", "po"],
  "9a_installed": ["invoice_no"]
}

export const regex_multi_email: RegExp =
  /^(([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)(\s*;\s*|\s*$))*$/
