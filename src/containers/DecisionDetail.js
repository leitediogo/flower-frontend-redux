import React, { Component } from 'react'
import { connect } from 'react-redux'

class DecisionDetail extends Component {

    handleChange(){
        /*
        console.log(e.target.type)
        console.log(e.target.value)
        console.log(e.target.id)
        */
        //let obj = {}
        //obj[e.target.id] = e.target.value
        //console.log(obj)
        //console.log(store.getState())
        //store.dispatch(addToObject(obj))
        //console.log(store.getState())
        // console.log('handleChange')
    
    }

    render() {
        return (
                <div>
                    <p> description : {this.props.decision.description} </p>
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        decision: state.activeDecision
    }
}

export default connect(mapStateToProps)(DecisionDetail)