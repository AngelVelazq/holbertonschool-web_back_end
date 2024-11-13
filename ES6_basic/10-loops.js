export default function appendToEachArrayValue(array, appendString) {
    for (let value of array) {
      let newValue = appendString + value;
      array[array.indexOf(value)] = newValue;
    }
  
    return array;
  }
