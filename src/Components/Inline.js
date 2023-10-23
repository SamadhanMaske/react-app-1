
import React from 'react'

const heading = {
    fontSize:'100px',
    color:'blue'
}

export default function Inline() {
  return (
    <div>
        <h1 style={heading}>Inline</h1>
        <h1 className='error'>Error</h1>

    </div>
  )
}
