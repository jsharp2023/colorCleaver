/******************
 * YOUR CODE HERE *
 ******************/
function isValidPrimary(color){
  if ((color === 'red')||(color === 'blue')||(color === 'yellow')){
    return true
  }else{
    return false
  }
}

// Our setup code here. Don't touch!
if(typeof isValidPrimary === 'undefined') {
  isValidPrimary = undefined;
}

module.exports = isValidPrimary;
