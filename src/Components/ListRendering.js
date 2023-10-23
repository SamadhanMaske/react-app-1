
import React, { Component } from 'react'

class ListRendering extends Component {
  render() {
    const list = ["Samadhan", "Manasi", "Julli", "Gayatri"];
    const nameList = list.map((name)=> <h3>Hare Krishna {name}</h3>);
    return (
      <div>{nameList}</div>
    )
  }
}

export default ListRendering