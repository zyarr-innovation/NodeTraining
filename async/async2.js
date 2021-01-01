caller = function (status){
    return new Promise (function (resolve, reject){ 
        if(status === 'happy') 
            resolve ("I am happy - version 2"); 
        else 
            reject ("I am sad - version 2")
    });
} 

function test (strTest) {
    caller(strTest)
        .then (data => console.log (data))
        .catch (data => console.log (data))
}

test("happy")
test ("Very sad")