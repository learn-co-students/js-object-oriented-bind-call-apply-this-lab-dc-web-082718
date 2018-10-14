//Your code here
function justInvoke(passedIn) {
  return passedIn()
}
function setThisWithCall(returnsThisAndArgs, bob, number){
  return returnsThisAndArgs.call(bob, number)
}
function setThisWithApply(returnsThisAndArgs, bob, args) {
  return returnsThisAndArgs.apply(bob,args )
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  return functionToBeCopied.bind(thisValue)
}
