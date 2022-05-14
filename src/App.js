import './App.css';

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

const Sorter = (algorithm) => {
  return(
    <div id="sorter">
        <div id="sorter-header">
            <h2>Bubble sort</h2>
            <div id="sorter-control-bar">
                <button>Start</button>
                <button>Previous</button>
                <button>Pause</button>
                <button>Next</button>
                <button>Last</button>
                <p>[███████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒]</p>
            </div>
            <div id="current-array">
                <p>[1,6,2,5,6,6,6,1,2,9,3]</p>
            </div>
            <p>Completed in 0ms (Javascript)</p>
        </div>
        <div id="sorter-footer">
            <div id="sorter-description">
                <h2>Description</h2>
                <p>Some text here</p>
            </div>
            <div id="sorter-download">
                <h2>View Js code for this sort</h2>
                <p>Link to sorter code</p>
            </div>
        </div>
    </div>
    )

}

const bubbleSort = (ray) =>
{
  //hold an array of step objects, this will allow us to "backtrack" this sort later.
  let StepArray = [];
  let n = ray.length;
  let i, j;
  for (i = 0; i < n-1; i++)
  {
      for (j = 0; j < n-i-1; j++)
      {
          if (ray[j] > ray[j+1])
          {
          //swap
          let temp = ray[j];
          ray[j] = ray[j+1];
          ray[j+1] = temp;
          
           //att new step object to step array
          // console.log(`Swapped ${ray[j]} at ray[${j}] with ${ray[j+1]} at ray[${j+1}]`)
          // console.log(`CurrentRay ${ray}`);
           
           StepArray.push({
             change: `Swapped ${ray[j]} at ray[${j}] with ${ray[j+1]} at ray[${j+1}]`,
             currentArray: [...ray],
             percentDone:null,
           })
           //step ray append current
          }
      }
  }
  //need to return the complete ray object, 
  //and a "step" array that contains all the steps taken throughout this program.
  return StepArray;
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
  "bubbleSort":bubbleSort,
  "selectionSort":selectionSort
}

let crackRay = [939,23,21332,123,551,423,745,64,33,2,87,0,452];

console.log("original",crackRay)
console.log("Step array",Algolist["bubbleSort"](crackRay));
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
