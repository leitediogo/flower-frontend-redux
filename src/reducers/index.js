import { combineReducers } from 'redux'
import decisionsReducer from './decisions-reducer'
import activeDecisionReducer from './decisions-active-decision'
const allReducers = combineReducers({
  decisions: decisionsReducer,
  activeDecision: activeDecisionReducer
})

export default allReducers
