import Types from '../../constants/dialog-types'
import i18n from '../../../i18n'

const Dialog =  {

  show ({ title, message, handlers, okBtnName = i18n.t('common:okBtnLabel'), cancelBtnName = i18n.t('common:cancelBtnLabel') }) {
    return {
      type: Types.SHOW_DIALOG,
      title,
      message,
      okBtnName,
      cancelBtnName,
      handlers
    }
  },
  hide (value) {
    return {
      type: Types.HIDE_DIALOG
    }
  }
}

export default Dialog