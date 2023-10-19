import React, { Component } from "react";


class Message extends Component
{
    render(){
        const {name,relation} = this.props;
        return (
            <h1>Welcome {name} {relation}</h1>
        )
    }
}

export default Message;