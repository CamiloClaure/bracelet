export const loadStatus = {
  a_potential: {
    text: "a_potential",
    description_external: "Potential Reservation",
    long_description: "Our sales team thought you might be interested in reserving some space."
  },
  b_tentative: {
    text: "b_tentative",
    description_external: "Tentative Reservation",
    long_description: "You might need some material and we will keep you posted on upcoming shipments."
  },
  c_reserved: {
    text: "c_reserved",
    description_external: "Reserved",
    long_description: "We have you reserved and we will confirm when we can ship your load."
  },
  "c.b_load_confirmed": {
    text: "c.b_load_confirmed",
    description_external: "Ready for Orders",
    long_description: "You may submit your orders."
  },
  d_order_in: {
    text: "d_order_in",
    description_external: "Orders Submitted",
    long_description: "Your initial orders have been submitted.  You may continue to add to your load."
  },
  e_deposit_in: {
    text: "e_deposit_in",
    description_external: "Deposit Received",
    long_description: "We have received your deposit or you have available credit.  Thank you!"
  },
  f_ready_to_process: {
    text: "f_ready_to_process",
    description_external: "Processing",
    long_description: "We are processing your load and are still accepting addons."
  },
  "g.a_processing": {
    text: "g.a_processing",
    description_external: "Processing",
    long_description: "We are processing your load and are still accepting addons."
  },
  "g.b_subs_addons": {
    text: "g.b_subs_addons",
    description_external: "Last Call",
    long_description: "We are processing your load and are still accepting addons."
  },
  "g.c_no_more_orders": {
    text: "g.c_no_more_orders",
    description_external: "Ordering Closed",
    long_description: "We cannot accept any more addons on this load at this time."
  },
  "g.d_pick_and_pack": {
    text: "g.d_pick_and_pack",
    description_external: "Picking and Packing",
    long_description: "We are picking up and packing your load."
  },
  h_ready_to_ship: {
    text: "h_ready_to_ship",
    description_external: "Ready to Ship",
    long_description: "Your load is ready to be shipped."
  },
  i_shipped: {
    text: "i_shipped",
    description_external: "Shipped",
    long_description: "Your load has shipped."
  },
  j_delivered: {
    text: "j_delivered",
    description_external: "Delivered",
    long_description: "Your load has been delivered."
  },
  k_claims: {
    text: "k_claims",
    description_external: "Claims",
    long_description: "Your claims are being reviewed."
  },
  l_final_invoice: {
    text: "l_final_invoice",
    description_external: "Final Invoice",
    long_description: "Your final invoice has been issued."
  },
  m_final_paid: {
    text: "m_final_paid",
    description_external: "Paid",
    long_description: "Your final invoice has been paid.  Thank you!"
  },
  x_cancelled: {
    text: "x_cancelled",
    description_external: "Cancelled",
    long_description: "Your load has been cancelled."
  }
}

export const loadStatusSubmitOrder = [
  loadStatus["c.b_load_confirmed"].text,
  loadStatus.d_order_in.text,
  loadStatus.e_deposit_in.text,
  loadStatus.f_ready_to_process.text,
  loadStatus["g.a_processing"].text,
  loadStatus["g.b_subs_addons"].text
]

export const loadStatusDisableSubmitOrder = [
  loadStatus.a_potential.text,
  loadStatus.b_tentative.text,
  loadStatus.c_reserved.text,
  loadStatus["g.c_no_more_orders"].text,
  loadStatus["g.d_pick_and_pack"].text,
  loadStatus["h_ready_to_ship"].text,
  loadStatus["i_shipped"].text,
  loadStatus["j_delivered"].text,
  loadStatus.k_claims.text,
  loadStatus["l_final_invoice"].text,
  loadStatus["m_final_paid"].text,
  loadStatus["x_cancelled"].text
]

export const disabledStatusForAddOrder = [
  loadStatus["g.c_no_more_orders"].text,
  loadStatus["g.d_pick_and_pack"].text,
  loadStatus.h_ready_to_ship.text,
  loadStatus.i_shipped.text,
  loadStatus.j_delivered.text,
  loadStatus.k_claims.text,
  loadStatus.l_final_invoice.text,
  loadStatus.m_final_paid.text,
  loadStatus.x_cancelled.text
]

export const notRecomStatusForAddOrder = [
  loadStatus.a_potential.text,
  loadStatus.b_tentative.text,
  loadStatus.c_reserved.text
]

export const messageDisabledForAddOrder = "Orders can no longer be added at this time"

export const messageNotRecomForAddOrder = `You may begin to build your basket, but we recommend you wait to be prompted that your shipment is booked and imminent to minimize out of stocks.  If you do pre-build your basket, please use the “Check Avail” button to check the availability of items in your basket before submitting.`

export const messageDisabledForSubmit =
  "This load is not ready to be processed, we may still be accumulating reservations for this shipment or have not yet assigned a carrier.  We will notify you as soon as you can submit your order.  You can continue to build your basket in the meantime."

export const messageCheckAvailNotDone = `You can submit only after checking availability done.`
