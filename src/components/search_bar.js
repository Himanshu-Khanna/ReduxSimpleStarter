import React, { Component } from "react";

class SerachBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term:'' };
    }
    render() {
        return (
            <div className="w-50 flex">
                <label className="lable" htmlFor="name">Enter Name:</label>
                <input id="name" type="text"
                value={this.state.term}
                onChange={ e => this.setState({term: e.target.value})} />
                Value of the input: {this.state.term}
                <button style={{backgroundColor:'blue',color:'white'}} >submit</button>
            </div>
        );
    }
}

export default SerachBar;