import React from 'react'

const Total = ({ parts }) => {

  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return(
    <div>

      <b>total of {total} exercises</b>
    </div>
  )
}

export default Total