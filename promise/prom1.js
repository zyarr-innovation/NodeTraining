
//CALLBACK PATTERN
doSomething(function (result) {
    doSomethingElse(result, function (newResult) {
        doThirdThing(newResult, function (finalResult) {
            console.log('Got the final result: ' + finalResult);
        }, failureCallback);
    }, failureCallback);
}, failureCallback);

//PROMISE PATTERN #1
doSomething()
    .then(function (result) {
        return doSomethingElse(result);
    })
    .then(function (newResult) {
        return doThirdThing(newResult);
    })
    .then(function (finalResult) {
        console.log('Got the final result: ' + finalResult);
    })
    .catch(failureCallback);

//PROMISE PATTERN #2
doSomething()
    .then(result => doSomethingElse(result))
    .then(newResult => doThirdThing(newResult))
    .then(finalResult => {
        console.log(`Got the final result: ${finalResult}`);
    })
    .catch(failureCallback);


//PROMISE PATTERN #3
try {
    const result = syncDoSomething();
    const newResult = syncDoSomethingElse(result);
    const finalResult = syncDoThirdThing(newResult);
    console.log(`Got the final result: ${finalResult}`);
} catch (error) {
    failureCallback(error);
}