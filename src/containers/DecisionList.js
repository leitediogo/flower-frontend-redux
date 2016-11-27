import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectDecision } from '../actions/actions'

class DecisionList extends Component {

    createListItems() {
        return this.props.decisions.map((decision) => {
            return (
                <li
                    key={decision.id}
                    onClick={() => this.props.selectDecision(decision)}
                    > name : {decision.name} 
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.createListItems()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        decisions: state.decisions
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectDecision: selectDecision}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(DecisionList)