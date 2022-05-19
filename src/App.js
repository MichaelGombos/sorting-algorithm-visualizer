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
    
    // when clicked, only if current algo = e.target algo then change to selected
    props.setPlay({...props.play,playing:false})
    
    props.setStep(0);
    
    props.setSteps(sorter.stepsFromArray(props.defaultArray))
    
    //grab list of other buttons
    const primaryNav = document.getElementById("primary-nav");
    const otherButtons = primaryNav.getElementsByTagName("button");
    const otherButtonsRay = Array.from(otherButtons).filter(item => item !=e.target);
    
    e.target.className = ("selected");
    //remove other button classes
    for(const btn of otherButtonsRay){
      btn.className=("hvr-sweep-to-right")
    }

  }

  return(
    <nav id="primary-nav"className="container">
          <ul>
              <li><button className="hvr-sweep-to-right"onClick={handleAlgoChange(algo.selectionSort)}>Selection Sort</button></li>
              <li><button className="hvr-sweep-to-right" onClick={handleAlgoChange(algo.bubbleSort)}>  Bubble Sort</button></li>
              <li><button className="hvr-sweep-to-right" onClick={handleAlgoChange(algo.insertionSort)}> Insertion Sort</button></li>
              <li><button className="hvr-sweep-to-right" onClick={handleAlgoChange(algo.combSort)}>Comb Sort</button></li>
              <li><button className="hvr-sweep-to-right" onClick={handleAlgoChange(algo.cycleSort)}>Cycle Sort</button></li>
              <li><button className="hvr-sweep-to-right" onClick={handleAlgoChange(algo.cocktailSort)}>Cocktail Sort</button></li>
              <li><button className="hvr-sweep-to-right" onClick={handleAlgoChange(algo.gnomeSort)}>Gnome Sort</button></li>
              <li><button className="hvr-sweep-to-right" onClick={handleAlgoChange(algo.brickSort)}>Brick Sort</button></li>
          </ul>
      </nav>
  )
}

  
function App() {
  // [  65, 58, 76, 47, 61, 77, 91, 57, 25, 53, 42, 34, 97, 71, 9, 52, 88, 100, 59, 70, 13, 27, 8, 44 ]
  let defaultArray = [  65, 58, 76, 47, 61, 77, 91, 57, 25, 53, 42, 38, 6, 96, 80, 72, 24, 37, 22, 64, 66, 68, 63, 26, 35, 54, 93, 60, 21, 33, 43, 87, 3, 30, 62, 17, 1, 34, 97, 71, 9, 52, 88, 100, 59, 70, 13, 27, 8, 44
,65, 58, 76, 47, 61, 77, 91, 57, 25, 53, 42, 38, 6, 96, 80, 72, 24, 37, 22, 64, 66, 68, 63, 26, 35, 54, 93, 60, 21, 33, 43, 87, 3, 30, 62, 17, 1, 34, 97, 71, 9, 52, 88, 100, 59, 70, 13, 27, 8, 44
];


  const [currentAlgo,setAlgo] = useState(algo.bubbleSort);
  const [step,setStep] = useState(0);
  const [steps,setSteps] = useState(algo.bubbleSort.stepsFromArray(defaultArray))
  //this will be used to set state w/ play pause buttons
  const [play,setPlay] = useState({playing:false,playSpeed:50});
  
  if(play.playing == true && step != steps.length-1)
    setTimeout(
    () => setStep(step + 1),
    play.playSpeed
  )
  
        //generate a list of value bars with the current swap indexes
    

  return (
    <div id="app">
        <Header/>
        <PrimaryNavigation props={{currentAlgo,setAlgo,step,setStep,steps,setSteps,defaultArray,play,setPlay}}/>
        <Sorter props={{currentAlgo,setAlgo,step,setStep,steps,setSteps,play,setPlay}}/>
    </div>
  );
}

export default App;
