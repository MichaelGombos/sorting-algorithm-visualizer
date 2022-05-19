import React from 'react'
//This file is meant to hold the sorter component, aswell as the list of algorithms
import { useState } from 'react';
//the sorter function should instantly run, and then provide a "stepArray" list  
// this will allow the user to iterate through the array at a given "step" through the alrorithm


let pageLoaded = 0

const Sorter = (props) => {


         //TODO - current ray will eventually be part of the props passed in.
    props = props.props;
    const {currentAlgo,setAlgo,step,setStep,steps,setSteps,play,setPlay} = props;
    props = props.props;
    const currentSorter = currentAlgo;
    let sortedRay = steps[steps.length-1].currentArray;

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
        if(play.playing){
            setPlay({...play,playing:false})
        }
        else{
            setPlay({...play,playing:true})
        }
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
        
    //need a function to find the largest item in array
    const findLargest = (ray) =>{
        let largest = Number.MIN_SAFE_INTEGER;
        for(let item of ray){
            if (item > largest){
                largest = item;
            }
        }
        return largest;
    }
    
    const handleSliderChange = () =>(e)=> {
        setPlay({...play,playSpeed : e.target.value})
    }
    
    //generate a list of value bars with the current swap indexes
    if(step > 1){
        
        let cStep = steps[step]
        let vBar1 = document.querySelectorAll(`div[data-key="${steps[step].index1}"]`)[0].children[1];
        let vBar2 = document.querySelectorAll(`div[data-key="${steps[step].index2}"]`)[0] ? document.querySelectorAll(`div[data-key="${steps[step].index2}"]`)[0].children[1] : vBar1;
        
        vBar1.className += " imRed";
        vBar2.className += " imRed";
        
        const otherBars = document.getElementsByClassName("value-bar");
        for(const bar of otherBars){
            if(bar != vBar1 && bar != vBar2){
                bar.className=("value-bar")
            }
        }
    }
  return(
    <div id="sorter" >
        <div id="sorter-header">
            <div className="container">
                <h2 className="mb-0">{currentSorter.name}</h2>
                <div className="control-bar">
                    <button onClick ={handleBeginning}>Restart</button>
                    <button onClick ={handlePrevious}>Previous</button>
                    <button onClick ={handlePause}>{play.playing ? "pause" : "play"}</button>
                    <button onClick ={handleNext}>Next</button>
                    <button onClick ={handleEnd}>End</button>
                    {/*TODO need an object that holds, the step, the current step, and calculated the percentage*/}
                    <p>Current Speed: {play.playSpeed}ms</p>
                    <div className="slider-container">
                      <input type="range" min="10" max="200" defaultValue="50" className="slider" id="myRange" onChange={handleSliderChange()}/>
                    </div>
                    <div className="progress-bar-wrapper">
                        <div style={{width: calcPercentage(step,steps.length-1)+"%"}} className="progress-bar">
                            <p className="progress-bar-text">{calcPercentage(step,steps.length-1).toFixed(2)}%</p>
                        </div>
                    </div>
                </div>
                <p>STEP {step}/{steps.length-1} :: {steps[step] ? steps[step].change : "no"}</p>
                <div id="array-display-wrap">
                    <div id="array-display">
                    
                    {/*value bars*/}
                    {steps[step] ? steps[step].currentArray.map((item,index) =>  <div key={index} data-key={index} className="value-bar-container"><p>{/*index*/}</p><div className="value-bar" style={{height:`${item/findLargest(steps[step].currentArray)*100}%`}}></div></div>) : "Restart : )"}
                    </div>
                </div>
                <p>It tooks {steps.length} swaps for {currentSorter.name} to sort the array</p>
            </div>
        </div>
        <div id="sorter-footer" className="container">
            <div id="sorter-description">
                <h3>Description:</h3>
                <p>{currentSorter.description}</p>
            </div>
            <div id="sorter-download">
                <h3>View the code example for this sort</h3>
                <p>{currentSorter.codeExample}</p>
            </div>
        </div>
    </div>
    )

}

export default Sorter