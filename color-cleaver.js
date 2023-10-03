const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!
const primary1 = getInput(1)
const primary2 = getInput(2)
const secondaryColor = getInput(3)

function colorCombinator(primary1, primary2){
    if ((primary1 === 'red' )&&(primary2 === 'yellow')){
      return 'orange'
    }else if((primary1 === 'red')&&(primary2 === 'blue')){
      return 'purple'
    }else if((primary1 === 'blue')&&(primary2 === 'yellow')){
      return 'green'
    }else if((primary1 === 'yellow')&&(primary2 === 'red')){
      return 'orange'
     }else if((primary1 === 'blue')&&(primary2 === 'red')){
       return 'purple'
     }else if((primary1 === 'yellow')&&(primary2 === 'blue')){
       return 'green'
     }else{
      return 'error'
    }
  }

  function colorDeconstructor(secondary){
    if(secondary === 'purple'){
      return 'red and blue'
    }else if(secondary === 'orange'){
      return 'red and yellow'
    }else if(secondary === 'green'){
      return 'blue and yellow'
    }else{
      return 'error'
    }
  
  }

  function isValidPrimary(color){
    if ((color === 'red')||(color === 'blue')||(color === 'yellow')){
      console.log ('You understand Primary colors like' + (primary1) +' ' (primary2))
    }else{
      console.log ('No sorry not even close try agin.')
    }
  }

  function isValidSecondary(secondaryColor){
    if((secondaryColor === 'orange')||(secondaryColor === 'green')||(secondaryColor === 'purple')){
      console.log ('You understand seconday colors like' + ' '(secondaryColor))
    }else{
      console.log ('No sorry not even close try agin.')
    }
  }
