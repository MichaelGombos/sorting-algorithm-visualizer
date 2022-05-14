import React from 'react'
//This file is meant to hold the sorter component, aswell as the list of algorithms

//the sorter function should instantly run, and then provide a "stepArray" list  
// this will allow the user to iterate through the array at a given "step" through the alrorithm

const logStep = (currentRay,index1,index2) => {
    let step = {
     change: `Swapped ${currentRay[index1]} at ray[${index1}] with ${currentRay[index2]} at ray[${index2}]`,
     currentArray: [...currentRay],
     percentDone:null
     }
     return step;
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
          
          //add new step object to step array
          // console.log(`Swapped ${ray[j]} at ray[${j}] with ${ray[j+1]} at ray[${j+1}]`)
          // console.log(`CurrentRay ${ray}`);
           
           StepArray.push(logStep(ray,j,j+1));
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
    let StepArray = [];
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
                
                StepArray.push(logStep(ray,i,min_idx));
    }
    return ray;
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

export default Sorter