/******************
 * YOUR CODE HERE *
 ******************/
function colorDeconstructor(secondaryColor){
  if(secondaryColor == 'purple'){
    return 'red and blue'
  }else if(secondaryColor == 'orange'){
    return 'red and yellow'
  }else if(secondaryColor == 'green'){
    return 'blue and yellow'
  }else{
  
  }

}


// Our setup code here. Don't touch!
if(typeof colorDeconstructor === 'undefined') {
  colorDeconstructor = undefined;
}


module.exports = colorDeconstructor;
