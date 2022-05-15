import './App.css';
import Sorter from './components/Sorter'
import { useState } from 'react';
import * as algo from "./alrorithms.js";


const Header = () =>{
  return(
  <header className="App-header">
          <h1>Sorting Algorithm Visualizer</h1>
          <p>This project was created to provide a visual representation for common (and uncommon) sorting algorithms.</p>
          <a href="http://www.google.com">Link to github repository</a>
  </header>
      )
}


const PrimaryNavigation = ({props}) => {
  
  const handleAlgoChange =(sorter)=>(e) => {
    //here I want to re-render the "sorter" component
    props.setAlgo(sorter);
    props.setSteps(sorter.stepsFromArray(props.defaultArray))
    props.setStep(props.step);
  }
  

  return(
    <nav>
          <ul>
              {/*<li><button>Heap Sort</button></li>*/}
              {/*<li><button>Counting Sort</button></li>*/}
              <li><button onClick={handleAlgoChange(algo.selectionSort)}>Selection Sort</button></li>
              <li><button onClick={handleAlgoChange(algo.bubbleSort)}>  Bubble Sort</button></li>
              {/*<li><button>Insertion Sort</button></li>*/}
              {/*<li><button>Merge Sort</button></li>*/}
              {/*<li><button>Quick Sort</button></li>*/}
          </ul>
      </nav>
      )
}

  
function App() {
  let defaultArray = [2,3,4,5,3,2,4,7,5,3];
  const [currentAlgo,setAlgo] = useState(algo.bubbleSort);
  const [step,setStep] = useState(0);
  const [steps,setSteps] = useState(algo.bubbleSort.stepsFromArray(defaultArray))
 
  return (
    <div className="App">
        <Header/>
        <PrimaryNavigation props={{currentAlgo,setAlgo,step,setStep,steps,setSteps,defaultArray}}/>
        <Sorter props={{currentAlgo,setAlgo,step,setStep,steps,setSteps}}/>
    </div>
  );
}

export default App;
