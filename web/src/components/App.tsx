import React, {useState} from 'react';
import './App.css'
import {debugData} from "../utils/debugData";
import ProgressBar from './progress-bar'


// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: 'setVisible',
    data: true,
  }
])



const App: React.FC = () => {
  const [state, setState] = useState(0)

  
  const makeItGo = () => {
      
    if (state <100) setState(state+10)

    }

    
  return (
    <div className="nui-wrapper">
      <div className='popup-thing'>
        <div>
          <h1>This is the Progress Bar Component</h1>
          <p>Exit with the escape key</p>
          <button onClick={makeItGo}>Make It Go</button>
           <ProgressBar bgcolor="#6a1b9a" completed={state} />
        </div>
      </div>
    </div>
  );
}

export default App;
