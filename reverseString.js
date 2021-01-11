const reverseString = (str) => {
  let strArray = [];
  // Push reversed string into strArray
  for(let i = str.length; i >= 0; i--) {
    strArray.push(str.charAt(i));
  }
  // Convert back to string and remove ","
  let result = strArray.toString().replaceAll(",", "");
  return result;
}

// freeCodeCamp test
console.log(reverseString("Greetings from Earth"));
