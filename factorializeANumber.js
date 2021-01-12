const factorialize = (input) => {
  let i = 1;
  let result = 1;
  while(i <= input){
    result = result * i;
    i++;
  }
  return result;
}
console.log(factorialize(20));