
var wakeUp = function (callback) {
    console.log("Alarm goes off");
    if(callback)
        if(typeof callback === 'function')
            callback();
}

var checkPhone = function(callback){
    console.log("Look at phone....");
    if(callback)
        if(typeof callback === 'function')
            callback();
}

var eatBreakfast = function(callback){
    console.log("Coffee....");
    if(callback)
        if(typeof callback === 'function')
            callback();

}


wakeUp(function(){
    checkPhone(function () {
        eatBreakfast();
    });
});

