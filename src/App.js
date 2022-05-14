import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sorting Algorithm Visualizer</h1>
        <p>This project was created to provide a visual representation for common (and uncommon) sorting algorithms.</p>
        <a href="http://www.google.com">Link to github repository</a>
      </header>
      <nav>
        <ul>
          <li>Heap Sort</li>
          <li>Counting Sort</li>
          <li>Selection Sort</li>
          <li>Bubble Sort</li>
          <li>Insertion Sort</li>
          <li>Merge Sort</li>
          <li>Quick Sort</li>
        </ul>
      </nav>
      
      <div id="sorter">
        <div id="sorter-header">
          <h2>Bitonic Sort</h2>
          <div id="sorter-control-bar">
            <button>Start</button>
            <button>Previous</button>
            <button>Pause</button>
            <button>Next</button>
            <button>Last</button>
            <p>[███████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒]</p>
          </div>
          <div id="current-array">
            Data from current array goes here
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
    </div>
  );
}

export default App;
