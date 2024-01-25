import React, { useState } from 'react';
import he from 'he';
import { useSelector } from 'react-redux';
import Result from './Result';

const QuizStart = () => {
  const [result, SetResult] = useState(0);
  const [next, SetNext] = useState(0);

  const results = useSelector((state) => state.results);

  const questions = results?.map(({ question, incorrectAnswers, correctAnswer }) => {
    return {
      question: he.decode(question.text),
      correctAnswer,
      answers: [...incorrectAnswers, correctAnswer].sort()
    };
  });

  console.log('questions ', questions);

  const handleAnswerSubmit = ({ target }) => {
    if (he.decode(questions[next].correctAnswer) === target.innerHTML) SetResult(result + 1);
    SetNext(next + 1);
  };

  if (next === 10) return <Result score={result} />;
  else {
    return (
      <>
        <center>
          <div>
            <ul style={{ listStyle: 'none' }}>
              <h2>
                Question {next + 1}: {questions[next].question}
              </h2>
              {questions[next].answers.map((e, i) => (
                <li onClick={handleAnswerSubmit} key={i} style={{ cursor: 'pointer', margin: '10px', padding: '2px', background: 'aqua' }}>
                  {he.decode(e)}
                </li>
              ))}
            </ul>
          </div>
        </center>
      </>
    );
  }
};

export default QuizStart;
