import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDifficulty } from '../redux';

const Difficulty = () => {
  const link = useSelector((state) => state.link);
  const dispatch = useDispatch();

  const handleDifficultyChange = (e) => {
    let newLink;
    const { value } = e.target;
    const regexExp = new RegExp(/&difficulty=\w+/);
    if (regexExp.test(link)) {
      if (value === 'any') newLink = link.replace(regexExp, '');
      else newLink = link.replace(regexExp, '&difficulty=' + e.target.value);
    } else newLink = link + '&difficulty=' + e.target.value;

    dispatch(setDifficulty(newLink));
  };

  const selectStyle = {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    cursor: 'pointer',
  };

  return (
    <select onChange={handleDifficultyChange} style={selectStyle}>
      <option value="any">Any Difficulty</option>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
  );
};

export default Difficulty;
