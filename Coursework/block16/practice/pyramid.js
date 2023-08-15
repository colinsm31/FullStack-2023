function buildPyramid(rows){
  let output = '';
  for(let i=0; i<rows; i++){
    for(let j=0; j<rows-i; j++){
      output += ' ';
    }
    for(let k=0; k<=2*i; k++){
      output +='*'
    }
    output += '\n'
  }
  console.log(output);
}

buildPyramid(5);