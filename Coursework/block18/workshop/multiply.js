function multiplication(a, b){
  if(!a || !b || isNaN(a) || isNaN(b) || arguments.length>2){
    return 'Please enter two Integer inputs';
  }
  return a*b;
}

module.exports = multiplication;