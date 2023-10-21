
import React from 'react'

function ChildComp(props) {
  return (
    <div>
        <button onClick={props.greetHandler}>Greet</button>
    </div>
  )
}

export default ChildComp;
