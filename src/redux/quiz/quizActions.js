import axios from 'axios';
import { REQUEST_QUESTIONS, REQUEST_RESTART, CHOOSE_CATEGORY, CHOOSE_DIFFICULTY } from './quizConstants';

export const setCategory = (link) => ({ type: CHOOSE_CATEGORY, payload: link });

export const setDifficulty = (link) => ({
  type: CHOOSE_DIFFICULTY,
  payload: link
});

export const requestQuestions = (link) => {
  return async (dispatch) => {
    const { data } = await axios.get(link);
    dispatch({
      type: REQUEST_QUESTIONS,
      payload: { questions: data }
    });
  };
};

export const requestRestart = () => {
  return {
    type: REQUEST_RESTART
  };
};
