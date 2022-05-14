import React from 'react'

const logStep = (currentRay,index1,index2) => {
    let step = {
     change: `Swapped ${currentRay[index1]} at ray[${index1}] with ${currentRay[index2]} at ray[${index2}]`,
     currentArray: [...currentRay],
     percentDone:null
     }
     return step;
}

const bubbleSort = {
    name:"bubble sort",
    description:"//todo informative description of the bubble sort algorithm",
    algorithm:  (ray) =>
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
    
}



const selectionSort = {
    name:"selection sort",
    description:"//todo informative description of the Selection sort algorithm",
    algorithm: (ray) => 
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
}

export {bubbleSort,selectionSort};