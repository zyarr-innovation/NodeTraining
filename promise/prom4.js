function loadScript(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(name)
            resolve(1)
        }, 1000);
    });
}

loadScript("one.js")
    .then(function () {
        return loadScript("two.js");
    })
    .then(function () {
        return loadScript("three.js");
    })
    .then(function () {
        console.log("Loaded all the scripts");
    });

// loadScript("one.js")
//     .then(() => loadScript("two.js"))
//     .then(() => loadScript("three.js"))
//     .then(() => {
//         console.log("Loaded all the scripts");
//     });

// loadScript("one.js").then(() => {
//     loadScript("two.js").then(() => {
//         loadScript("three.js").then(() => {
//             console.log("Loaded all the scripts");
//         });
//     });
// });