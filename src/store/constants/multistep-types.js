const actions = ['HIDE_MULTISTEP', 'SHOW_MULTISTEP', 'RESET_MULTISTEP']

export default actions.reduce((accumulator, action) => {
  accumulator[action] = action
  return accumulator
}, {})
