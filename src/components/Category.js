import React from 'react';
import { setCategory } from '../redux';
import { useDispatch, useSelector } from 'react-redux';

const Category = () => {
  const link = useSelector((state) => state.link);
  const dispatch = useDispatch();

  const handleCategoryChange = (e) => {
    let newLink;
    const { value } = e.target;
    const re = new RegExp(/&category=\w+/);
    if (re.test(link)) {
      if (value === 'any') newLink = link.replace(re, '');
      else newLink = link.replace(re, '&category=' + e.target.value);
    } else newLink = link + '&category=' + e.target.value;

    dispatch(setCategory(newLink));
  };

  const selectStyle = {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    cursor: 'pointer'
  };

  return (
    <div>
      <select onChange={handleCategoryChange} style={selectStyle}>
        <option value="any">Any Category</option>
        <option value="9">General Knowledge</option>
        <option value="32">Entertainment: Cartoon</option>
      </select>
    </div>
  );
};

export default Category;
