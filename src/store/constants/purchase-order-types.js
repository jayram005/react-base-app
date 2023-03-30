const actions = [
  'GET_PURCHASE_ORDERS',
  'UPDATE_PURCHASE_ORDER_STATUS',
  'UPDATE_PURCHASE_ORDER_COUNT',
  'RESET_PURCHASE_ORDERS',
  'PURCHASE_ORDERS_INPROGRESS',
  'PURCHASE_ORDERS_RETRY',
  'PURCHASE_ORDERS_ERROR'
]

export default actions.reduce((accumulator, action) => {
  accumulator[action] = action
  return accumulator
}, {})
