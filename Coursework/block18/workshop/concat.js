function concatOdds(arr1, arr2){
  if(!Array.isArray(arr1) || !Array.isArray(arr2) || !arr1 || !arr2 || arguments.length>2){
    return 'Enter two arrays as inputs';
  }
  const result = [];
  for(const i in arr1){
    if(arr1[i]%2!=0 && !result.includes(arr1[i])){
      result.push(arr1[i]);
    }
  }
  for(const i in arr2){
    if(arr2[i]%2!=0 && !result.includes(arr2[i])){
      result.push(arr2[i]);
    }
  }
  result.sort(function(a, b) {return a-b});
  return result;
}

module.exports = concatOdds;