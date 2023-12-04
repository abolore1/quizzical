import React from 'react'

function Button({handleStart,children}) {
  return (
    <button  className='buttons' onClick={handleStart}>{children}</button>
  )
}

export default Button