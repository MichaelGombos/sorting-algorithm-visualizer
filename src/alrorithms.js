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
     index1:index1,
     index2:index2
     } 
     return step;
}


//its important that the algorims do not mutate the original array.
const selectionSort = {
    name:"selection sort",
    description:<div><p>Selection sort works by repeatedly finding the minimum element from an unsorted 'part' and putting it at the beginning.<br/><em>This algorithm maintains two different subarrays while sorting</em></p>
    <ul>
        <li><p>The sorted subarray</p></li>
        <li><p>The unsorted subarray</p></li>
    </ul>
    <p>in every iteration on this sort, the minimum element from the unsorted subarray is picked up and moved to the sorted subarray</p>
    </div>,
    codeExample:<div>
    <ol>
        <li><p>Initialize minimum value(min_idx) to location 0</p></li>
        <li><p>Traverse the array to find the minimum element in the array</p></li>
        <li><p>While traversing if any element smaller than min_idx is found then swap both the values.</p></li>
        <li><p>Then, increment min_idx to point to next element</p></li>
        <li><p>Repeat until array is sorted</p></li>

    </ol>
    </div>,
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
    description:<div><p>"Bubble sort works by swapping adjacent items of an array if they are in the wrong order. This algorithm is not suited for large data sets due to its high average and worst case time complexity."</p></div>,
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

// const recursiveBubbleSort = {
//     name:"recursive bubble sort",
//     description:`//todo informative description `,
//     codeExample:`//todo informative code example `,
//     stepsFromArray: (ray) => 
//     {
//         //TODO actuall step array calculation
//         return(
//             [
//                 {
//                     change:"Starting Index 0. No change detected.",
//                     currentArray: [...ray],
//                 }
//              ]
//         )
//     }
// }

const insertionSort = {
    name:"insertion sort",
    description:<div><p>Insertion sort works similar to sorting cards. The array is first split into a sorted and unsorted part. values from the unsorted part are selected and placed in the correct position in the sorted array"</p></div>,
    codeExample:<div>
        <ul>
            <li><p>Iterate from arr[1] to arr[N] over the array. </p></li>
            <li><p>Compare the current element (key) to its predecessor. </p></li>
            <li><p>If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.</p></li>
        </ul>
    </div>,
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

// const shellSort = {
//     name:"shell sort",
//     description:`//todo informative description of the  algorithm`,
//     codeExample:`//todo informative code example for `,
//     stepsFromArray: (ray) => 
//     {
//         //TODO actuall step array calculation
//         return(
//             [
//                 {
//                     change:"Starting Index 0. No change detected.",
//                     currentArray: [...ray],
//                 }
//              ]
//         )
//     }
// }

// const timShort = {
//     name:"tim sort",
//     description:`//todo informative description of the algorithm`,
//     codeExample:`//todo informative code example for`,
//     stepsFromArray: (ray) => 
//     {
//         //TODO actuall step array calculation
//         return(
//             [
//                 {
//                     change:"Starting Index 0. No change detected.",
//                     currentArray: [...ray],
//                 }
//              ]
//         )
//     }
// }

const combSort = {
    name:"comb sort",
    description:<div><p>Comb sort is like BubbleSort+ . It improves on bubble sort by using a gap size larger than 1. This gap value starts with a large value and shrinks by a factor of 1.3 before reaching one. </p></div>,
    codeExample:`//todo informative code example for `,
    stepsFromArray: (ray) => 
    {
    const getNextGap = (gap) =>{
    // Shrink gap by Shrink factor
    gap = parseInt((gap*10)/13, 10);
    if (gap < 1)
        return 1;
    return gap;
    }
        //TODO actuall step array calculation
    let combStepArray = [{
          change:"Starting Index 0. No change detected.",
          currentArray: [...ray],
        }];
    let currentRay = [...ray];
    let n = ray.length;
    
    // initialize gap
    let gap = n;

    // Initialize swapped as true to
    // make sure that loop runs
    let swapped = true;

    // Keep running while gap is more than
    // 1 and last iteration caused a swap
    while (gap != 1 || swapped == true)
    {
        // Find next gap
        gap = getNextGap(gap);

        // Initialize swapped as false so that we can
        // check if swap happened or not
        swapped = false;

        // Compare all elements with current gap
        for (let i=0; i<n-gap; i++)
        {
            if (currentRay[i] > currentRay[i+gap])
            {
                // Swap arr[i] and arr[i+gap]
                let temp = currentRay[i];
                currentRay[i] = currentRay[i+gap];
                currentRay[i+gap] = temp;
                combStepArray.push(logStep("swap",currentRay,i,i+gap));
                // Set swapped
                swapped = true;
            }
        }
    }
    return combStepArray;
    }
}

// const pigeonholeSort = {
//     name:"pigeonhole sort",
//     description:`//todo informative description of the algorithm`,
//     codeExample:`//todo informative code example for`,
//     stepsFromArray: (ray) => 
//     {
//         //TODO actuall step array calculation
//         return(
//             [
//                 {
//                     change:"Starting Index 0. No change detected.",
//                     currentArray: [...ray],
//                 }
//              ]
//         )
//     }
// }

const cycleSort = {
    name:"cycle sort",
    description:<div><p>Cycle sort works by turning an array into a number of cycles that can be rotated to generate a sorted array</p></div>,
    codeExample:<div>
        <ol>
            <li><p>Givent an element a, we can find the index where it will occur in the sorted list by first counting the number of elements in the ENTIRE list that are smaller than a </p></li>
            <li><p>If the element is already in the right spot, do nothing</p></li>
            <li><p>If not, we will write it into its intended position. </p></li>
            <li><p>This position is inhabited by a different element 'b'</p></li>
            <li><p>We will then move 'b' to the correct position, and repeat until a cycle is complete</p></li>
        </ol>
    </div>,
    stepsFromArray: (ray) => 
    {
                let cycleStepArray = [{
          change:"Starting Index 0. No change detected.",
          currentArray: [...ray],
        }];
        let currentRay = [...ray]
        let n = ray.length;
        // count number of memory writes
        let writes = 0;
   
        // traverse array elements and put it to on
        // the right place
        for (let cycle_start = 0; cycle_start <= n - 2; cycle_start++)
        {
         
            // initialize item as starting point
            let item = currentRay[cycle_start];
   
            // Find position where we put the item. We basically
            // count all smaller elements on right side of item.
            let pos = cycle_start;
            for (let i = cycle_start + 1; i < n; i++)
                if (currentRay[i] < item)
                    pos++;
   
            // If item is already in correct position
            if (pos == cycle_start)
                continue;
   
            // ignore all duplicate elements
            while (item == currentRay[pos])
                pos += 1;
   
            // put the item to it's right position
            if (pos != cycle_start)
            {
                let temp = item;
                item = currentRay[pos];
                currentRay[pos] = temp;
                writes++;
                
                cycleStepArray.push(logStep("write",currentRay,pos,"N/A"));
            }
   
            // Rotate rest of the cycle
            while (pos != cycle_start)
            {
                pos = cycle_start;
   
                // Find position where we put the element
                for (let i = cycle_start + 1; i < n; i++)
                    if (currentRay[i] < item)
                        pos += 1;
   
                // ignore all duplicate elements
                while (item == currentRay[pos])
                    pos += 1;
   
                // put the item to it's right position
                if (item != currentRay[pos]) {
                    let temp = item;
                    item = currentRay[pos];
                    currentRay[pos] = temp;
                    writes++;
                    //this is a write
                    cycleStepArray.push(logStep("write",currentRay,pos,"N/A"));
                }
            }
        }
        return cycleStepArray;
    }
}

const cocktailSort = {
    name:"cocktail sort",
    description:`//todo informative description of the algorithm`,
    codeExample:`//todo informative code example for`,
    stepsFromArray: (ray) => 
    {
        let cocktailStepArray = [{
          change:"Starting Index 0. No change detected.",
          currentArray: [...ray],
        }];
        let currentRay = [...ray]
        let swapped = true;
        let start = 0;
        let end = ray.length;
  
        while (swapped == true) {
  
            // reset the swapped flag on entering the
            // loop, because it might be true from a
            // previous iteration.
            swapped = false;
  
            // loop from bottom to top same as
            // the bubble sort
            for (let i = start; i < end - 1; ++i) {
                if (currentRay[i] > currentRay[i + 1]) {
                    let temp = currentRay[i];
                    currentRay[i] = currentRay[i + 1];
                    currentRay[i + 1] = temp;
                    swapped = true;
                    cocktailStepArray.push(logStep("swap",currentRay,i,i+1));
                }
            }
  
            // if nothing moved, then array is sorted.
            if (swapped == false)
                break;
  
            // otherwise, reset the swapped flag so that it
            // can be used in the next stage
            swapped = false;
  
            // move the end point back by one, because
            // item at the end is in its rightful spot
            end = end - 1;
  
            // from top to bottom, doing the
            // same comparison as in the previous stage
            for (let i = end - 1; i >= start; i--) {
                if (currentRay[i] > currentRay[i + 1]) {
                    let temp = currentRay[i];
                    currentRay[i] = currentRay[i + 1];
                    currentRay[i + 1] = temp;
                    swapped = true;
                    cocktailStepArray.push(logStep("swap",currentRay,i,i+1));
                }
            }
  
            // increase the starting point, because
            // the last stage would have moved the next
            // smallest number to its rightful spot.
            start = start + 1;
        }
        return cocktailStepArray;
    }
}

// const bitonicSort = {
//     name:"bitonic sort",
//     description:`//todo informative description of the algorithm`,
//     codeExample:`//todo informative code example for`,
//     stepsFromArray: (ray) => 
//     {
//         //TODO actuall step array calculation
//         return(
//             [
//                 {
//                     change:"Starting Index 0. No change detected.",
//                     currentArray: [...ray],
//                 }
//              ]
//         )
//     }
// }

// const pancakeSort = {
//     name:"pancake sort",
//     description:`//todo informative description of the algorithm`,
//     codeExample:`//todo informative code example for`,
//     stepsFromArray: (ray) => 
//     {
//         //TODO actuall step array calculation
//         return(
//             [
//                 {
//                     change:"Starting Index 0. No change detected.",
//                     currentArray: [...ray],
//                 }
//              ]
//         )
//     }
// }

// const binaryInsertionSort = {
//     name:"binary insertion sort",
//     description:`//todo informative description of the algorithm`,
//     codeExample:`//todo informative code example for`,
//     stepsFromArray: (ray) => 
//     {
//         //TODO actuall step array calculation
//         return(
//             [
//                 {
//                     change:"Starting Index 0. No change detected.",
//                     currentArray: [...ray],
//                 }
//              ]
//         )
//     }
// }

// const bogoSort = {
//     name:"bogo sort",
//     description:`//todo informative description of the algorithm`,
//     codeExample:`//todo informative code example for`,
//     stepsFromArray: (ray) => 
//     {
//         //TODO actuall step array calculation
//         return(
//             [
//                 {
//                     change:"Starting Index 0. No change detected.",
//                     currentArray: [...ray],
//                 }
//              ]
//         )
//     }
// }

const gnomeSort = {
    name:"gnome sort",
    description:`//todo informative description of the algorithm`,
    codeExample:`//todo informative code example for `,
    stepsFromArray: (ray) => 
    {
        let gnomeStepArray = [{
          change:"Starting Index 0. No change detected.",
          currentArray: [...ray],
        }];
        let currentRay = [...ray]
        let index = 0;
        let n = ray.length;
   
        while (index < n) {
            if (index == 0)
                index++;
            if (currentRay[index] >= currentRay[index - 1])
                index++;
            else {
                let temp = 0;
                temp = currentRay[index];
                currentRay[index] = currentRay[index - 1];
                currentRay[index - 1] = temp;
                index--;
                gnomeStepArray.push(logStep("swap",currentRay,index,index-1));

            }
        }
        return gnomeStepArray;
    }
}

// const stoogeSort = {
//     name:"stooge sort",
//     description:`//todo informative description of the  algorithm`,
//     codeExample:`//todo informative code example for `,
//     stepsFromArray: (ray) => 
//     {
//         //TODO actuall step array calculation
//         return(
//             [
//                 {
//                     change:"Starting Index 0. No change detected.",
//                     currentArray: [...ray],
//                 }
//              ]
//         )
//     }
// }

const brickSort = {
    name:"brick sort",
    description:`//todo informative description of the  algorithm`,
    codeExample:`//todo informative code example for `,
    stepsFromArray: (ray) => 
    {
        let oddEvenStepArray = [{
          change:"Starting Index 0. No change detected.",
          currentArray: [...ray],
        }];
        let currentRay = [...ray]
        let n = ray.length;
        let isSorted = false;
        while (!isSorted)
        {
            isSorted = true;
            let temp =0;
   
            for (let i=1; i<=n-2; i=i+2)
            {
                if (currentRay[i] > currentRay[i+1])
                {
                    temp = currentRay[i];
                    currentRay[i] = currentRay[i+1];
                    currentRay[i+1] = temp;
                    oddEvenStepArray.push(logStep("swap",currentRay,i,i+1));
                    
                    isSorted = false;
                }
            }
   
            for (let i=0; i<=n-2; i=i+2)
            {
                if (currentRay[i] > currentRay[i+1])
                {
                    temp = currentRay[i];
                    currentRay[i] = currentRay[i+1];
                    currentRay[i+1] = temp;
                    isSorted = false;
                    
                    oddEvenStepArray.push(logStep("swap",currentRay,i,i+1));
                }
            }
        }
   
        return oddEvenStepArray;
    }
}



export {
    selectionSort,
    bubbleSort,
    insertionSort,
    combSort,
    cycleSort,
    cocktailSort,
    gnomeSort,
    brickSort
};