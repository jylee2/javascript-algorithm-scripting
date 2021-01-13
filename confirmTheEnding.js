const confirmEnding = (str, target) => {
    let endChar = str.substring(str.length - target.length, str.length);
    if(endChar === target){
      return true;
    } else {
      return false;
    }
  }
  console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));