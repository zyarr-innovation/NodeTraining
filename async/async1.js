var callback = function (err, success) {
    if (err) {
        console.log("I am very sad!");
    } else {
        console.log("I am very happy");
    }
}



var caller = function (status, callback) {
    if (status === 'Happy')
        callback(null, true);
    else {
        callback(new Error(), false);

    }
}

// Executes the success part 
caller('Happy', callback);

// Executes the error part 
caller('Sad', callback);