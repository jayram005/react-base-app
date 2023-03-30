const actions = ['HIDE_FS', 'SHOW_FS', 'RESET_FS']

export default actions.reduce((accumulator, action) => {
  accumulator[action] = action
  return accumulator
}, {})
