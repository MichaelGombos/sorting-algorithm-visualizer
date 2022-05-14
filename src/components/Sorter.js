import React from 'react'
//This file is meant to hold the sorter component, aswell as the list of algorithms

//the sorter function should instantly run, and then provide a "stepArray" list  
// this will allow the user to iterate through the array at a given "step" through the alrorithm

const Sorter = (props) => {
    let currentRay = [2,3,4,5,3,2,4,7,5,3];
    props = props.props;
    const currentSorter = props.currentAlgo;
    
    console.log("props",props);
    console.log("props.currentAlgo",props.currentAlgo);
    
  return(
    <div id="sorter">
        <div id="sorter-header">
            <h2>{currentSorter.name}</h2>
            <div id="sorter-control-bar">
                <button>Start</button>
                <button>Previous</button>
                <button>Pause</button>
                <button>Next</button>
                <button>Last</button>
                <p>[███████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒]</p>
            </div>
            <div id="current-array">
                <p>[{currentRay.join(",")}]</p>
            </div>
            <p>Completed in 0ms (Javascript)</p>
        </div>
        <div id="sorter-footer">
            <div id="sorter-description">
                <h2>Description:</h2>
                <p>{currentSorter.description}</p>
            </div>
            <div id="sorter-download">
                <h2>View the code examlpe for this sort</h2>
                <p>{currentSorter.codeExample}</p>
            </div>
        </div>
    </div>
    )

}

export default Sorter