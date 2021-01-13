const largestOfFour = (arr) => {
    let result = [];
    let checker;
    for(let i = 0; i < arr.length; i++){
      let j = 0;
      checker = arr[i][j];
      while(j < arr[i].length){
        // If checker is smaller than the next, then = next
        if(checker < arr[i][j+1]){
          checker = arr[i][j+1];
        }
        j++;
        // console.log(checker);
      }
      result.push(checker);
    }
    return result;
  }
  
  console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));