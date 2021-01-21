const truncateString = (str, num) => {
    let result = "";
    if(str.length > num){
      return result = str.substring(0, num) + "...";
    } else {
      return str;
    }
}
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));