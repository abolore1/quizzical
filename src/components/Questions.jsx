import React, { useState, useEffect } from 'react';
import data from '../db/data.json';

export const Questions = () => {
  const [shuffledResults, setShuffledResults] = useState([]);

  useEffect(() => {
    // Shuffle the data.results array when the component mounts
    const shuffledArray = shuffleArray(data.results);
    setShuffledResults(shuffledArray);
  }, []);

  function shuffleArray(array) {
    // Fisher-Yates shuffle algorithm
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  function handleHold(e) {
    const currentColor = e.target.style.backgroundColor;
    const newColor = currentColor === '#D6DBF5' ? 'transparent' : '#D6DBF5';

    let id = e.target.getAttribute('data-id');
    const sibling = document.getElementsByClassName(`${id}`);

    for (let i = 0; i < sibling.length; i++) {
      let element = sibling[i];
      element.classList.remove('chosen');
      element.style = `backgroundColor: 'transparent' `;
    }
    e.target.style = `background:${newColor}; border:none`;
    e.target.classList.add('chosen');
  }

  const results = shuffledResults.map(result => {
    return (
      <div key={result.id}>
        <h2 className='question'>{result.question}</h2>
        <div className='ans-container'>
          {result.incorrect_answers.map(incorrect =>
            <span
              key={incorrect}
              className={`answers ${result.id}`}
              data-id={result.id}
              onClick={(e) => handleHold(e)}>
              {incorrect}
            </span>
          )}
          <span
            className={`answers ${result.id} correct`}
            data-id={result.id}
            onClick={(e) => handleHold(e)}>
            {result.correct_answer}
          </span>
        </div>
        <hr />
      </div>
    )
  });

  return (
    <div className='question-container'>
      {results}
    </div>
  )
}
