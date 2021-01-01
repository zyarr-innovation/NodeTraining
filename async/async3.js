caller = function (status) {
    return new Promise(function (resolve, reject) {
        if (status === 'happy')
            resolve("I am happy - version 3");
        else
            reject("I am sad - version 3")
    });
}

async function test(strTest) {
    try {
        data = await caller(strTest)
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

test("happy")
test("Very sad")