import React from 'react';
import { useDispatch } from 'react-redux';
import { requestRestart } from '../redux';

const Result = ({ score }) => {
  const dispatch = useDispatch();
  const handleStartAgain = () => {
    dispatch(requestRestart());
  };
  return (
    <center>
      <div>
        <h1>Your Score is {score}/10</h1>
        <button
          onClick={handleStartAgain}
          style={{
            padding: '10px',
            backgroundColor: 'aqua',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Restart
        </button>
      </div>
    </center>
  );
};

export default Result;
