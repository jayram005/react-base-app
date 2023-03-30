import Types from '../../constants/dialog-types'

const initialState = {
  open: false,
  title: '',
  message: '',
  handlers: {}
}

export default function dialogReducer (state = initialState, action) {
  switch (action.type) {
    case Types.SHOW_DIALOG: {
      return Object.assign({}, initialState, {
        open: true,
        title: action.title,
        message: action.message,
        okBtnName: action.okBtnName,
        cancelBtnName: action.cancelBtnName,
        handlers: action.handlers
      })
    }

    case Types.HIDE_DIALOG: {
      return Object.assign({}, initialState, {
        open: false
      })
    }

    default:
      return state
  }
}
