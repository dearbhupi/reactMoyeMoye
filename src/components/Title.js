import React from 'react'

function Titles({name, colors}) {
  return (
    <div>
      <h1 style={{ color: colors }}>{name}</h1>
    </div>
  )
}

export default Titles
