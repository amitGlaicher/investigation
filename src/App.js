import { useContext } from 'react';
import './App.css';
import LayOut from './components/LayOut';
import RadioAns from './components/RadioAns';

function App() {
  const chooseContext = useContext([]);
  return (
    <div className="app">
      <LayOut />
    </div>
  );
}

export default App;
