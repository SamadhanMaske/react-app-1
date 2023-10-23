
import React, { Component } from 'react'
import ChildComp from './ChildComp';

class ParentComp extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       name:'Parent',
    }
  }
  greetParent = (Child)=>{
    alert(`Hello ${this.state.name} from ${Child}`)
  }
  render() {
    return (
      <div>
        <ChildComp clickHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComp