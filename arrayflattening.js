function flattenArray(arr) {
    let result = [];
  
    arr.forEach(item => {
      if (Array.isArray(item)) {
        result = result.concat(flattenArray(item)); // Recursively flatten the array
      } else {
        result.push(item); // Push non-array items
      }
    });
  
    return result;
  }
  
  // Function to get user input and flatten the array
  function getUserInputAndFlatten() {
    const input = prompt("Enter a deeply nested array (e.g., [1, [2, [3, [4, 5]], 6], 7]):");
    try {
      const nestedArray = JSON.parse(input); // Parse input into an array
      const flattenedArray = flattenArray(nestedArray);
      console.log(flattenedArray); // Output the flattened array
    } catch (error) {
      console.error("Invalid input. Please enter a valid nested array.");
    }
  }
  
  // Call the function to execute
  getUserInputAndFlatten();
  