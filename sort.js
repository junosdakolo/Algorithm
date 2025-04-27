// InsertionSort

function insertionSort(arr) {  // Function to perform insertion sort on an array
  for (let i = 1; i < arr.length; i++) { 
    let currentVal = arr[i]; // Store the current value to be inserted
    let j = i - 1; // Start comparing with the previous element
    while (j >= 0 && arr[j] > currentVal) { // Compare current value with the sorted part of the array
      arr[j + 1] = arr[j]; // Shift larger elements to the right
      j--; // Move to the left in the array
    }
    arr[j + 1] = currentVal; // Place the current value in its correct position
  }
  return arr; // Return the sorted array
}
