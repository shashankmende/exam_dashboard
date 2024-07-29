
import './App.css';
import Result from './components/result/result';
import CircularProgress from './components/progressBar/progress';
import Question from './components/GeneralQuestion/question';
function App() {
  return (
    <div className="App">
        <Result/>
        <CircularProgress value={80} maxValue={100}
         radius={200}
         customTextLines={['80%', 'Marks', 'Achieved!']}
         />
         <Question/>
    </div>
  );
}

export default App;
