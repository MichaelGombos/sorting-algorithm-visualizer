import React from 'react'
//This file is meant to hold the sorter component, aswell as the list of algorithms
import { useState } from 'react';
//the sorter function should instantly run, and then provide a "stepArray" list  
// this will allow the user to iterate through the array at a given "step" through the alrorithm


const Sorter = (props) => {


         //TODO - current ray will eventually be part of the props passed in.
    props = props.props;
    const {currentAlgo,setAlgo,step,setStep,steps,setSteps} = props;
    props = props.props;
    const currentSorter = currentAlgo;
    const starterRay = [2,3,4,5,3,2,4,7,5,3];
    let sortedRay = [];
    

    const handleBeginning = ()=> {
        //set step to 0
        setStep(0);
    }
    const handlePrevious = ()=>{
        //subtract 1 from step
        if(step>0){
            setStep(step-1)
        }

    }
    const handlePause = ()=> {
        //TODO switches the "playing" boolean.
    }
    const handleNext = ()=> {
        //add 1 to step
        if(step<steps.length-1){
                setStep(step+1)
        }

    }
    const handleEnd = ()=> {
        //set step to steps.length-1
        setStep(steps.length-1)
    }
    
    const calcPercentage = (part,whole) => {
        return (part/whole) * 100;
    }
        

  return(
    <div id="sorter">
        <div id="sorter-header">
            <h2>{currentSorter.name}</h2>
            <div id="sorter-control-bar">
                <button onClick ={handleBeginning}>Beginning</button>
                <button onClick ={handlePrevious}>Previous</button>
                <button onClick ={handlePause}>Pause/Play</button>
                <button onClick ={handleNext}>Next</button>
                <button onClick ={handleEnd}>End</button>
                {/*TODO need an object that holds, the step, the current step, and calculated the percentage*/}
                <p>Percentage done:: {calcPercentage(step,steps.length-1)}</p>
                <h3>STEP {step}:: {steps[step].change}</h3>
                <progress id="step-bar" max={steps.length-1} value={step}></progress>
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