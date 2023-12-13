import { useEffect, useState } from 'react'
import './App.css'
import { Home } from './components/Home'
import { Questions } from './components/Questions'


function App() {
  const [correctAns, setCorrectAns] = useState(true)
  const [startQuiz, setStartQuiz] = useState(false)
  const [check, setCheck] = useState(false)
  const [questions, setQuestions] = useState(0)
  const [checkBtnText, setCheckBtnText] = useState(true)

  const handleStart = () => {
    setStartQuiz(true)
  }

 useEffect(()=>{
  let callback
   callback =  setTimeout(()=>  {
     console.log('hello')
     setCheckBtnText(true)},3000)


 return function() {
   clearTimeout(callback)
   console.log('Cleanup!');
 }

},[checkBtnText])


  const handleCheck = () => {

    let chosen = document.querySelectorAll('.chosen')
    if (chosen.length == 0) {
      setCheck(false)
      setCheckBtnText(false)
     
    }
    else {
      // alert('nice')
      setCheckBtnText("Check answers")
      setCheck(true)
      chosen.forEach(chosen => {
        if (chosen.classList.contains('correct')) {
          chosen.style.backgroundColor = '#94D7A2';
          chosen.classList.add('correct-one');
        }
        else {

          chosen.style.backgroundColor = '#F8BCBC';
          let id = chosen.getAttribute('data-id');

          let elem = document.getElementsByClassName(`${id}`);
          for (let i = 0; i < elem.length; i++) {
            const element = elem[i];
            if (element.classList.contains('correct')) {
              element.style.backgroundColor = '#94D7A2';
            }
          }

        }
      });
      setCorrectAns(document.querySelectorAll('.correct-one').length)
      setQuestions(document.querySelectorAll('.question').length)
    }

  }

  return (
    <div className='App'>

      {!startQuiz ? <Home startQuiz={startQuiz} handleStart={handleStart} /> : (

        <div className="">
          <Questions handleCheck={handleCheck} check={check} />
          {
            !check ? <button type='button' className='buttons' onClick={handleCheck}>{checkBtnText?"Check answers":"Answer the above questions"}</button> :
              <div className="">
                <span className='score'> You scored {correctAns} / {questions} correct answers</span>
                <button className='buttons' onClick={() => window.location.reload()}>Play again</button>
              </div>
          }
        </div>
      )
      }
    </div>
  )
}

export default App
