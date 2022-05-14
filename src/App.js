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
  const [currentAlgo,setAlgo] = useState(algo.bubbleSort);
  
  //passing the other components the current state.
  return (
    <div className="App">
        <Header/>
        <PrimaryNavigation props={{currentAlgo,setAlgo}}/>
        <Sorter props={{currentAlgo,setAlgo}}/>
    </div>
  );
}

export default App;
