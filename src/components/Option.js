import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestQuestions } from '../redux';
import Difficulty from './Difficulty';
import Category from './Category';

const Option = () => {
  const link = useSelector((state) => state.link);
  const dispatch = useDispatch();
  const handleQuestionsRequest = () => dispatch(requestQuestions(link));

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: 'aqua',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <center>
      <div style={containerStyle}>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <Category />
          <Difficulty />
        </div>
        <button onClick={handleQuestionsRequest} style={buttonStyle}>
          Start
        </button>
      </div>
    </center>
  );
};

export default Option;
