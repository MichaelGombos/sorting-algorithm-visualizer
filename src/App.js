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


const PrimaryNavigation = (props) => {
  
  //Causes an error... I am going to need to pass an object that contains a function, instead of just a function.
  // const [sorter, setSorter] = useState(algo["bubbleSort"]);
  
  const handleAlgoChange =(sorter)=>() => {
    console.log(`You clicked on the ${sorter.name} button`)
    console.log(`Description: ${sorter.description}`)
    //here I want to re-render the "sorter" component
    
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



let crackRay = [4,1,2,3,64.3333,6,23,1,123,6,34,1];
// console.log("original",crackRay)
console.log(algo.bubbleSort.algorithm(crackRay));

const handleSorter = () => {
  
}
function App() {
  return (
    <div className="App">
        <Header/>
        <PrimaryNavigation/>
        <Sorter />
    </div>
  );
}

export default App;
