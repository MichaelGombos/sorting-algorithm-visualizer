import React from 'react'

const logStep = (type,currentRay,index1,index2) => {
    let changeString;
    
    if(type == "swap"){
        changeString =`Swapped ${currentRay[index1]} at ray[${index1}] with ${currentRay[index2]} at ray[${index2}]`
    }
    else if(type == 'skip'){
        changeString =`Skipped over ${currentRay[index1]} at ray[${index1}] after comparing against ${currentRay[index2]} at ray[${index2}]`
    }
    let step = {
     change: changeString,
     currentArray: [...currentRay],
     percentDone:null
     } 
     return step;
}


//its important that the algorims do not mutate the original array.
const selectionSort = {
    name:"selection sort",
    description:"//todo informative description of the Selection sort algorithm",
    codeExample:"//todo informative code example for Selection sort",
    stepsFromArray: (ray) => 
    {
        let n = ray.length;
        let i, j, min_idx;
        let currentRay = [...ray];
           let StepArray = [{
          change:"Starting Index 0. No change detected.",
          currentArray: [...ray],
        }];
        // One by one move boundary of unsorted subarray
        for (i = 0; i < n; i++)
        {
            // Find the minimum element in unsorted array
            min_idx = i;
            for (j = i; j < n; j++)
            {   
                     if (currentRay[j] < currentRay[min_idx])
                {   
                    min_idx = j;
                 }
            }
            if(min_idx != i){
             //swap
            let temp = currentRay[min_idx];
            currentRay[min_idx] = currentRay[i];
            currentRay[i] = temp;
            
            StepArray.push(logStep("swap",currentRay,i,min_idx));
            }
            // else
            // {
            //     StepArray.push(logStep("skip",currentRay,i,min_idx));
            // }
        }
        
        return StepArray;
    }
}

const bubbleSort = {
    name:"bubble sort",
    description:"//todo interesting description of the bubble sort algorithm",
    codeExample:"//todo informative code example for bubble sort",
    stepsFromArray:  (ray) =>
    {
      //hold an array of step objects, this will allow us to "backtrack" this sort later.
      let StepArray = [{
          change:"Starting Index 0. No change detected.",
          currentArray: [...ray],
      }];
      let currentRay = [...ray]
      let n = ray.length;
      let i, j;
      for (i = 0; i < n-1; i++)
      {
          for (j = 0; j < n-i-1; j++)
          {
              if (currentRay[j] > currentRay[j+1])
              {
              //swap
              let temp = currentRay[j];
              currentRay[j] = currentRay[j+1];
              currentRay[j+1] = temp;
              
              //add new step object to step array
              // console.log(`Swapped ${ray[j]} at ray[${j}] with ${ray[j+1]} at ray[${j+1}]`)
              // console.log(`CurrentRay ${ray}`);
               
               StepArray.push(logStep("swap",currentRay,j,j+1));
               //step ray append current
              }
            //   else{
            //       StepArray.push(logStep("skip",currentRay,j,j+1));
            //   }
          }
      }
  //need to return the complete ray object, 
  //and a "step" array that contains all the steps taken throughout this program.
  return StepArray;
}
    
}

const recursiveBubbleSort = {
    name:"recursive bubble sort",
    description:`//todo informative description `,
    codeExample:`//todo informative code example `,
    stepsFromArray: (ray) => 
    {
        //TODO actuall step array calculation
        return(
            [
                {
                    change:"Starting Index 0. No change detected.",
                    currentArray: [...ray],
                }
             ]
        )
    }
}

const insertionSort = {
    name:"insertion sort",
    description:"//todo informative description of the insertion sort algorithm",
    codeExample:"//todo informative code example for insertion sort sort",
    stepsFromArray: (ray) => {
        let StepArray = [{
            change:"Starting Index 0. No change detected.",
            currentArray: [...ray],
            }];
        let currentRay = [...ray]
        const n = currentRay.length;
        let i, key, j; 
        for (i = 1; i < n; i++){ 
            key = currentRay[i]; 
            j = i - 1; 
       
            /* Move elements of arr[0..i-1], that are 
            greater than key, to one position ahead 
            of their current position */
            while (j >= 0 && currentRay[j] > key){ 
                StepArray.push(logStep("swap",currentRay,j,j+1));
                currentRay[j + 1] = currentRay[j]; 
                j = j - 1; 
            } 
            currentRay[j + 1] = key; 
        } 
        return StepArray;
    }
}

const shellSort = {
    name:"shell sort",
    description:`//todo informative description of the  algorithm`,
    codeExample:`//todo informative code example for `,
    stepsFromArray: (ray) => 
    {
        //TODO actuall step array calculation
        return(
            [
                {
                    change:"Starting Index 0. No change detected.",
                    currentArray: [...ray],
                }
             ]
        )
    }
}

const timShort = {
    name:"tim sort",
    description:`//todo informative description of the algorithm`,
    codeExample:`//todo informative code example for`,
    stepsFromArray: (ray) => 
    {
        //TODO actuall step array calculation
        return(
            [
                {
                    change:"Starting Index 0. No change detected.",
                    currentArray: [...ray],
                }
             ]
        )
    }
}

const combSort = {
    name:"comb sort",
    description:`//todo informative description of the algorithm`,
    codeExample:`//todo informative code example for `,
    stepsFromArray: (ray) => 
    {
        //TODO actuall step array calculation
        return(
            [
                {
                    change:"Starting Index 0. No change detected.",
                    currentArray: [...ray],
                }
             ]
        )
    }
}

const pigeonholeSort = {
    name:"pigeonhole sort",
    description:`//todo informative description of the algorithm`,
    codeExample:`//todo informative code example for`,
    stepsFromArray: (ray) => 
    {
        //TODO actuall step array calculation
        return(
            [
                {
                    change:"Starting Index 0. No change detected.",
                    currentArray: [...ray],
                }
             ]
        )
    }
}

const cycleSort = {
    name:"cycle sort",
    description:`//todo informative description of the algorithm`,
    codeExample:`//todo informative code example for`,
    stepsFromArray: (ray) => 
    {
        //TODO actuall step array calculation
        return(
            [
                {
                    change:"Starting Index 0. No change detected.",
                    currentArray: [...ray],
                }
             ]
        )
    }
}

const cocktailSort = {
    name:"cocktail sort",
    description:`//todo informative description of the algorithm`,
    codeExample:`//todo informative code example for`,
    stepsFromArray: (ray) => 
    {
        //TODO actuall step array calculation
        return(
            [
                {
                    change:"Starting Index 0. No change detected.",
                    currentArray: [...ray],
                }
             ]
        )
    }
}

const bitonicSort = {
    name:"bitonic sort",
    description:`//todo informative description of the algorithm`,
    codeExample:`//todo informative code example for`,
    stepsFromArray: (ray) => 
    {
        //TODO actuall step array calculation
        return(
            [
                {
                    change:"Starting Index 0. No change detected.",
                    currentArray: [...ray],
                }
             ]
        )
    }
}

const pancakeSort = {
    name:"pancake sort",
    description:`//todo informative description of the algorithm`,
    codeExample:`//todo informative code example for`,
    stepsFromArray: (ray) => 
    {
        //TODO actuall step array calculation
        return(
            [
                {
                    change:"Starting Index 0. No change detected.",
                    currentArray: [...ray],
                }
             ]
        )
    }
}

const binaryInsertionSort = {
    name:"binary insertion sort",
    description:`//todo informative description of the algorithm`,
    codeExample:`//todo informative code example for`,
    stepsFromArray: (ray) => 
    {
        //TODO actuall step array calculation
        return(
            [
                {
                    change:"Starting Index 0. No change detected.",
                    currentArray: [...ray],
                }
             ]
        )
    }
}

const bogoSort = {
    name:"bogo sort",
    description:`//todo informative description of the algorithm`,
    codeExample:`//todo informative code example for`,
    stepsFromArray: (ray) => 
    {
        //TODO actuall step array calculation
        return(
            [
                {
                    change:"Starting Index 0. No change detected.",
                    currentArray: [...ray],
                }
             ]
        )
    }
}

const gnomeSort = {
    name:"gnome sort",
    description:`//todo informative description of the algorithm`,
    codeExample:`//todo informative code example for `,
    stepsFromArray: (ray) => 
    {
        //TODO actuall step array calculation
        return(
            [
                {
                    change:"Starting Index 0. No change detected.",
                    currentArray: [...ray],
                }
             ]
        )
    }
}

const stoogeSort = {
    name:"stooge sort",
    description:`//todo informative description of the  algorithm`,
    codeExample:`//todo informative code example for `,
    stepsFromArray: (ray) => 
    {
        //TODO actuall step array calculation
        return(
            [
                {
                    change:"Starting Index 0. No change detected.",
                    currentArray: [...ray],
                }
             ]
        )
    }
}

const brickSort = {
    name:"brick sort",
    description:`//todo informative description of the  algorithm`,
    codeExample:`//todo informative code example for `,
    stepsFromArray: (ray) => 
    {
        //TODO actuall step array calculation
        return(
            [
                {
                    change:"Starting Index 0. No change detected.",
                    currentArray: [...ray],
                }
             ]
        )
    }
}



export {
    selectionSort,
    bubbleSort,
    recursiveBubbleSort,
    insertionSort,
    shellSort,
    timShort,
    combSort,
    pigeonholeSort,
    cycleSort,
    cocktailSort,
    bitonicSort,
    pancakeSort,
    binaryInsertionSort,
    bogoSort,
    gnomeSort,
    stoogeSort,
    brickSort
};