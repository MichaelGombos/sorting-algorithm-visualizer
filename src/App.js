import './App.css';
import Sorter from './components/Sorter'

const Header = () =>{
  return(
  <header className="App-header">
          <h1>Sorting Algorithm Visualizer</h1>
          <p>This project was created to provide a visual representation for common (and uncommon) sorting algorithms.</p>
          <a href="http://www.google.com">Link to github repository</a>
  </header>
      )
}

const PrimaryNavigation = () => {
  return(
    <nav>
          <ul>
              <li><button>Heap Sort</button></li>
              <li><button>Counting Sort</button></li>
              <li><button>Selection Sort</button></li>
              <li><button>Bubble Sort</button></li>
              <li><button>Insertion Sort</button></li>
              <li><button>Merge Sort</button></li>
              <li><button>Quick Sort</button></li>
          </ul>
      </nav>
      )
}

 
const selectionSort =(ray) =>
{
  console.log("iran2")
  let n = ray.length;
    var i, j, min_idx;
 
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n-1; i++)
    {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < n; j++)
        if (ray[j] < ray[min_idx])
            min_idx = j;
 
        // Swap the found minimum element with the first element
            var temp = ray[min_idx];
            ray[min_idx] = ray[i];
            ray[i] = temp;
    }
    return ray;
}

const Algolist = {
  "bubbleSort": Sorter.bubbleSort,
  "selectionSort":selectionSort
}

// let crackRay = [4,1,2,3,64.3333,6,23,1,123,6,34,1];
// console.log("original",crackRay)
// console.log("Step array",Algolist["bubbleSort"](crackRay));
function App() {
  return (
    <div className="App">
        <Header/>
        <PrimaryNavigation/>
        <Sorter/>
    </div>
  );
}

export default App;
