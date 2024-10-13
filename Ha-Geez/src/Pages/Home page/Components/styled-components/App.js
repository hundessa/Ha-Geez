// src/App.js
import ProgressBar from './ProgressBar';

const App = () => {
  const progress = 65; // You can change this value to see different progress

return (
    <div className="App">
    {/* <h1>Progress Bar Example</h1> */}
    <ProgressBar progress={progress} />
    </div>
);
};

export default App;
