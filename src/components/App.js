import React from 'react'
import DecisionList from '../containers/DecisionList'
import DecisionDetail from '../containers/DecisionDetail'
import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
  <div>
    <h2> Decision list </h2>
    <DecisionList />
    <hr />
    <h2> Decision Details</h2>
    <DecisionDetail />
    <hr />
  </div>
)

export default App
