const actions = ['SET_STEP', 'PAUSE_STEP', 'RESUME_STEP', 'RESET_STEP', 'VALIDATE_STEP']

export default actions.reduce((accumulator, action) => {
  accumulator[action] = action
  return accumulator
}, {})
