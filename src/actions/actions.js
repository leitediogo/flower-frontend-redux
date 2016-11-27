export const addToObject = (obj) => ({
  type: 'ADD_TO_OBJECT',
  obj
})

export const selectDecision = (decision) => {
  console.log ('selected decision' ,decision.name)
  return {
    type: 'DECISION_SELECTED',
    payload: decision
  }
}

export const updateDecision = (decision) => {
  console.log  ('update decision', decision.name)
  return {
    type: 'DECISION_UPDATED',
    payload: decision
  }
}