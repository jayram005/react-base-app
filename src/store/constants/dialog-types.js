const actions = ['HIDE_DIALOG', 'SHOW_DIALOG']

export default actions.reduce((accumulator, action) => {
  accumulator[action] = action
  return accumulator
}, {})
