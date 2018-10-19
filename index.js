function justInvoke(fn){
  return fn()
}

// invokes function passed to it but changes function's .this value, passes new arg to function
function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue, arg)
}

//same as above
function setThisWithApply(fn, thisValue, arg) {
  return fn.apply(thisValue, arg)
}
//returns a copy of the function passsed through but sets the .this value of the functions copy
function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue)
}
