import React, { Component } from 'react'
import HOC from "../HOC";

class Dashboard extends Component {
    constructor(props) {
        super(props)
        console.log("================", props)
        this.state = {
            name: "",
        }
    }
    componentDidMount = () => {
        this.setState({
            name: this.props.location.state.name
        })
    }
    render() {
        return (
            <div>
                <h1>Welcome to Dashboard</h1>
                <h1> {this.state.name}</h1>




            </div>
        )
    }
}

export default HOC(Dashboard)
