import React from 'react'
//This file is meant to hold the sorter component, aswell as the list of algorithms

//the sorter function should instantly run, and then provide a "stepArray" list  
// this will allow the user to iterate through the array at a given "step" through the alrorithm

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

export default Sorter