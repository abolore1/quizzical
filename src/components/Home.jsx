import React from 'react'
import Button from './Button'


export const Home = (props) => {
  return (
    <div className='home-container'>
      <p className='home-heading'>Quizzical</p>
      <Button handleStart={props.handleStart}>Start quiz</Button>
    </div>
  )
}


// https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple