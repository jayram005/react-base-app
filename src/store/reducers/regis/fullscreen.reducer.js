import Types from '../../constants/fullscreen-types'

const initialState = {
  isVisible: false,
  screenProps: {},
  handlers: {},
  infoContent: '',
  CTAConfig: '',
  doneLabel: ''
}

export default function fullScreenReducer (state = initialState, action) {
  switch (action.type) {
    case Types.SHOW_FS: {
      return Object.assign({}, initialState, {
        isVisible: true,
        screenProps: action.screenProps,
        handlers: action.handlers,
        infoContent: action.infoContent,
        CTAConfig: action.CTAConfig,
        doneLabel: action.doneLabel
      })
    }

    case Types.HIDE_FS: {
      return Object.assign({}, initialState, {
        isVisible: false
      })
    }

    case Types.RESET_FS: {
      return initialState
    }

    default:
      return state
  }
}
