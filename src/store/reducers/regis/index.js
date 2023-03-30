import { combineReducers } from 'redux'

import dialog from './dialog.reducer'
import fullscreen from './fullscreen.reducer'
import message from './message.reducer'
import multistep from './multistep.reducer'
import navbar from './navbar.reducer'
import stepper from './stepper.reducer'

const fuseReducers = combineReducers({
  dialog,
  fullscreen,
  message,
  multistep,
  navbar,
  stepper
})

export default fuseReducers
