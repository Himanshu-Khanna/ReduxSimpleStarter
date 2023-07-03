import React, { Component } from "react";

class SerachBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term:'' };
    }
    render() {
        return (
            <div className="w-50 flex">
                <input onChange={ e => this.setState({term: e.target.value})} />
            </div>
        );
    }
}

export default SerachBar;