import React from 'react'
//This file is meant to hold the sorter component, aswell as the list of algorithms
import { useState } from 'react';
//the sorter function should instantly run, and then provide a "stepArray" list  
// this will allow the user to iterate through the array at a given "step" through the alrorithm

const Sorter = (props) => {
         //TODO - current ray will eventually be part of the props passed in.
   
    const [step,setStep] = useState(0); //state for the current step of the sorter
    
    props = props.props;
    const currentSorter = props.currentAlgo;
    const starterRay = [2,3,4,5,3,2,4,7,5,3];
    let sortedRay = [];
    let steps = props.currentAlgo.stepsFromArray(starterRay);
    
    sortedRay = steps[steps.length-1].currentArray;
    
    
    

    
    console.log("props",props);
    console.log("props.currentAlgo",props.currentAlgo);
    console.log();
    const handleCommand =(command)=>(e) => {
    console.log(`You clicked on the command button`)
    //here I want to re-render the "sorter" component
    
    }
        
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
                <h4>starting array</h4>
                <p>[{starterRay.join(",")}]</p>
                <h4>current array</h4>
                <p>[{steps[step].currentArray.join(",")}]</p>
                <h4>solved array</h4>
                <p>[{sortedRay.join(",")}]</p>
            </div>
            <p>Completed in {null} (Javascript)</p>
            <p>It tooks {steps.length} steps for this algorithm to solve</p>
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