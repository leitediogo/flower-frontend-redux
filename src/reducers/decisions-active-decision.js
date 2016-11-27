export default function (state = {}, action) {
    switch (action.type) {
        case "DECISION_SELECTED":
            return action.payload
        case "DECISION_UPDATED":
            return action.payload.name='DECISION_UPDATED'
        default:
            return state
    }
}