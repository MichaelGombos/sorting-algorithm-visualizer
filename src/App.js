import './App.css';
import Sorter from './components/Sorter'
import { useState } from 'react';
import * as algo from "./alrorithms.js";
import githubIcon from './assets/github.png';

const Header = () =>{
  return(
  <header id="app-header">
      <div className="container">
          <a href="https://github.com/MichaelGombos/sorting-algorithm-visualizer"><img src={githubIcon}/></a>
          <h1>Sorting Algorithm Visualizer</h1>
          <p>This project was created to provide a visual representation for common (and uncommon) sorting algorithms.</p>
      </div>
  </header>
      )
}


const PrimaryNavigation = ({props}) => {
  
  const handleAlgoChange =(sorter)=>(e) => {
    //here I want to re-render the "sorter" component
   props.setAlgo(sorter);
   
   //when clicked, only if current algo = e.target algo then change to selected
    props.setSteps(sorter.stepsFromArray(props.defaultArray))
    props.setStep(0);
    //grab list of other buttons
    const primaryNav = document.getElementById("primary-nav");
    const otherButtons = primaryNav.getElementsByTagName("button");
    const otherButtonsRay = Array.from(otherButtons).filter(item => item !=e.target);
    
      e.target.className = ("selected");
      //remove other button classes
      for(const btn of otherButtonsRay){
        btn.className=("")
      }
    
        

  }
  

  return(
    <nav id="primary-nav"className="container">
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
  let defaultArray = [  57,57,57,57,16, 57, 18,57,57,57,57,16, 57, 18, 19, 0, 21, 23, 25,57,57,57,57,16, 57, 18,57,57,57,57,16, 57, 18, 19, 0, 44, 27];
  const [currentAlgo,setAlgo] = useState(algo.bubbleSort);
  const [step,setStep] = useState(0);
  const [steps,setSteps] = useState(algo.bubbleSort.stepsFromArray(defaultArray))
 
  return (
    <div id="app">
        <Header/>
        <PrimaryNavigation props={{currentAlgo,setAlgo,step,setStep,steps,setSteps,defaultArray}}/>
        <Sorter props={{currentAlgo,setAlgo,step,setStep,steps,setSteps}}/>
    </div>
  );
}

export default App;
