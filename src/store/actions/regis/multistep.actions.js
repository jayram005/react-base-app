
import Types from '../../constants/multistep-types'

const MultiStep = {

  show ({ screenProps, handlers, infoContent }) {
    return {
      type: Types.SHOW_MULTISTEP,
      screenProps,
      handlers,
      infoContent
    }
  },
  hide (value) {
    return {
      type: Types.HIDE_MULTISTEP
    }
  }
}

export default MultiStep