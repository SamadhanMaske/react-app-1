import React from 'react'

function ChildComp(props) {
  return (
    <div><button onClick={()=>props.clickHandler('Child')}>Greet</button></div>
  )
}

export default ChildComp