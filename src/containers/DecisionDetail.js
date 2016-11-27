import React, { Component } from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'

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
            <MuiThemeProvider>
                <div>
                    <TextField
                       // id="name"
                        hintText="Insert Decision Name"
                        floatingLabelText="Decision Name"
                        //value={this.props.decision.name}
                        //onChange={this.handleChange}
                        />
                    <TextField
                       // id="description"
                        hintText="Insert Decision Description"
                        floatingLabelText="Decision Description"
                        //value={this.props.decision.description}
                        //onChange={this.handleChange}                        
                        />
                    <p> description : {this.props.decision.description} </p>
                </div>
            </MuiThemeProvider>
        )
    }
}

function mapStateToProps(state) {
    return {
        decision: state.activeDecision
    }
}

export default connect(mapStateToProps)(DecisionDetail)