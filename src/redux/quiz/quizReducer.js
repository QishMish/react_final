import { CHOOSE_CATEGORY, CHOOSE_DIFFICULTY, REQUEST_QUESTIONS, REQUEST_RESTART } from './quizConstants';

const initialState = {
  isStarted: false,
  results: [],
  link: 'https://the-trivia-api.com/v2/questions?amount=10'
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_CATEGORY:
      return { ...state, link: action.payload };
    case CHOOSE_DIFFICULTY:
      return { ...state, link: action.payload };

    case REQUEST_QUESTIONS:
      return { ...state, results: action.payload.questions, isStarted: true };

    case REQUEST_RESTART:
      return { ...state, isStarted: false };
    default:
      return state;
  }
};

export default quizReducer;
