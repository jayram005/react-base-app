
import Types from '../../constants/fullscreen-types'

const FullScreen = {

  show ({ screenProps, handlers, infoContent, CTAConfig, doneLabel }) {
    return {
      type: Types.SHOW_FS,
      screenProps,
      handlers,
      infoContent,
      CTAConfig,
      doneLabel
    }
  },
  hide (value) {
    return {
      type: Types.HIDE_FS
    }
  }
}

export default FullScreen