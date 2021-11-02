function receivesAFunction(callBack) {
    callBack();
}

function returnsANamedFunction() {
    return receivesAFunction
}
function returnsAnAnonymousFunction(value){
    return (function(){return "string"})
}
