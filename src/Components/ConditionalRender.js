
import React, { Component } from 'react'

class ConditionalRender extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true,
      }
    }
    //Method 4
    // 
    //Method 3
    render(){
        return this.state.isLoggedIn?<div>Welcome Samadhan</div>:<div>Welcome User</div>;
    }
    // //Method 2
    // render(){
    //     let message
    //     if(this.state.isLoggedIn){
    //         message=<div>Welcome Samadhan</div>
    //     }else{
    //         message=<div>Welcome User</div>
    //     }
    //     return <div>{message}</div>
    // }
    //Method 1
    //   render() {
//     if(this.state.isLoggedIn)
//     {
//         return (
//             <div>Welcome Samadhan</div>
//         )
//     }else{
//         return (
//             <div>Welcome User</div>
//           )
//     }
//   }
}

export default ConditionalRender;