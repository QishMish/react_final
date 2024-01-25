import { useSelector } from 'react-redux';
import Option from './components/Option';
import QuizStart from './components/QuizStart';

function App() {
  const appStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  return (
    <div style={appStyle}>
      {useSelector((state) => state.isStarted) ? <QuizStart /> : <Option />}
    </div>
  );
}

export default App;
