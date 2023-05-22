import create from "zustand"

export class Shipment {
  shipment_id: string = ""
  ship_date: string = ""
  pickup_address: string = "6700 Park Lane East Lake Worth FL 33449"
  inspection_date: string = ""
  border_crossing_eta: string = ""
  shipper: string = "ShopTropicals"
  border_crossing: string = ""
  shipment_status: string = ""
  dispatch_update: string = ""
  current_location: string = ""
  route_link: string = ""
  notes: string = ""
  carrier: string = ""
  route: string = ""
  type: string = ""
}

export class ShipmentCarrier {
  name: string = ""
  contact: string = ""
  phone: string = ""
  email: string = ""
  fax: string = ""
  rates: string = ""
  notes: string = ""
  carrier_code: string = ""
}

export class ShipmentRoute {
  route_name: string = ""
  start_postal_code: string = ""
  finish_postal_code: string = ""
}

type State = {
  editIdx: number
  shipmentId: string
  openMenu: string
  openSubMenu: string
  openSubSubMenu: string
  openShipmentEdit: boolean
  shipment: Shipment
  shipmentStatus: string[]
  shipmentCarriers: ShipmentCarrier[]
  shipmentRoutes: ShipmentRoute[]
  shipmentTypes: string[]
  openLoad: any
  loadReservations: any[]
  g_totalCost: any
  g_shippingCost: any
  g_currentCustomer: any
  appConfig: any
  setEditIdx: (idx: number) => void
  setShipmentId: (ship: string) => void
  setOpenMenu: (open: string) => void
  setOpenSubMenu: (open: string) => void
  setOpenSubSubMenu: (open: string) => void
  setOpenShipmentEdit: (open: boolean) => void
  setShip: (ship: Shipment) => void
  setShipmentStatus: (ship: string[]) => void
  setShipmentCarriers: (ship: ShipmentCarrier[]) => void
  setShipmentRoutes: (ship: ShipmentRoute[]) => void
  setShipmentTypes: (ship: string[]) => void
  setOpenLoad: (load: any) => void
  setLoadReservations: (load: any) => void
  setTotalCostG: (data: any) => void
  setShippingCostG: (data: any) => void
  setCurrentCustomerG: (data: any) => void
  setAppConfig: (data: any) => void
}

export const useStore = create<State>(set => ({
  editIdx: -1,
  shipmentId: "",
  openMenu: "",
  openSubMenu: "",
  openSubSubMenu: "",
  openShipmentEdit: false,
  shipment: new Shipment(),
  shipmentStatus: [],
  shipmentCarriers: new Array<ShipmentCarrier>(),
  shipmentRoutes: new Array<ShipmentRoute>(),
  shipmentTypes: [],
  openLoad: null,
  loadReservations: null,
  g_totalCost: null,
  g_shippingCost: null,
  g_currentCustomer: null,
  appConfig: null,
  setEditIdx: idx => set(() => ({editIdx: idx})),
  setShipmentId: idx => set(() => ({shipmentId: idx})),
  setOpenMenu: ship => set(() => ({openMenu: ship})),
  setOpenSubMenu: ship => set(() => ({openSubMenu: ship})),
  setOpenSubSubMenu: ship => set(() => ({openSubSubMenu: ship})),
  setOpenShipmentEdit: ship => set(() => ({openShipmentEdit: ship})),
  setShip: ship => set(() => ({shipment: ship})),
  setShipmentStatus: ship => set(() => ({shipmentStatus: ship})),
  setShipmentCarriers: ship => set(() => ({shipmentCarriers: ship})),
  setShipmentRoutes: ship => set(() => ({shipmentRoutes: ship})),
  setShipmentTypes: ship => set(() => ({shipmentTypes: ship})),
  setOpenLoad: load => set(() => ({openLoad: load})),
  setLoadReservations: loads => set(() => ({loadReservations: loads})),
  setTotalCostG: data => set(() => ({g_totalCost: data})),
  setShippingCostG: data => set(() => ({g_shippingCost: data})),
  setCurrentCustomerG: data => set(() => ({g_currentCustomer: data})),
  setAppConfig: data => set(() => ({appConfig: data}))
}))

type ShipState = {
  shipment: Shipment
  setShip: (ship: Shipment) => void
}

export const useStoreShipment = create<ShipState>(set => ({
  shipment: new Shipment(),
  setShip: ship => set(() => ({shipment: ship}))
}))
