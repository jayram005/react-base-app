import Types from '../../constants/stepper-types'

const initialState = {
  activeStep: 0,
  isValid: true,
  canMoveAction: 0
}

export default function stepReducer (state = initialState, action) {
  switch (action.type) {
    case Types.SET_STEP: {
      if (state.isValid) {
        return Object.assign({}, initialState, {
          activeStep: action.value > -1 ? action.value : state.activeStep
        })
      }
      return state.activeStep
    }

    case Types.PAUSE_STEP: {
      return Object.assign({}, initialState, {
        isValid: action.value ? !action.value : action.value
      })
    }

    case Types.RESET_STEP: {
      return initialState
    }

    case Types.CAN_MOVE: {
      return Object.assign({}, initialState, {
        canMoveAction: action.value > -1 ? action.value : state.canMoveAction
      })
    }
    default:
      return state
  }
}
