import Types from '../../constants/multistep-types'

const initialState = {
  isVisible: false,
  screenProps: {},
  handlers: {},
  infoContent: '',
  activeStep: 0
}

export default function multiStepReducer (state = initialState, action) {
  switch (action.type) {
    case Types.SHOW_MULTISTEP: {
      return Object.assign({}, initialState, {
        isVisible: true,
        screenProps: action.screenProps,
        handlers: action.handlers,
        infoContent: action.infoContent
      })
    }

    case Types.HIDE_MULTISTEP: {
      return Object.assign({}, initialState, {
        isVisible: false
      })
    }

    case Types.RESET_MULTISTEP: {
      return initialState
    }

    default:
      return state
  }
}
