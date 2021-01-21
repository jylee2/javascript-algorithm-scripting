const repeatStringNumTimes = (str, num) => {
    let result = [];
    if(num > 0){
      for(let i = 0; i < num; i++){
        result.push(str);
      }
    }
    result = result.toString().replaceAll(",", "");
    return result;
}
console.log(repeatStringNumTimes("*", 8));