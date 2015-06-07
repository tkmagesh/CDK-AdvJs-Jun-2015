/* Sync */
function add(x,y){
    console.log("[sp] processing ", x , " and ", y);
    var result = x + y;
    console.log("[sp] returing result");
    return result;
}

function usingAdd(x,y){
    console.log("[sc] - triggering add");
    var result = add(x,y);
    console.log("[sc] - result = ", result);
}

/* Async using Callback*/
function addAsync(x,y, onResult){
    setTimeout(function(){
        console.log("[sp] processing ", x , " and ", y);
        var result = x + y;
        console.log("[sp] returing result");
        if (typeof onResult === "function")
            onResult(result);
    },4000);
}

function usingAddAsync(x,y){
    console.log("[sc] - triggering add");
    addAsync(x,y, function(result){
        console.log("[sc] - result = ", result);
    });
}

/* Async using Events*/
function getAdder(){
    var _callbacks = [];
    return {
        addResultListener : function(callback){
            _callbacks.push(callback);
        },
        add : function(x,y){
            setTimeout(function(){
                console.log("[sp] processing ", x , " and ", y);
                var result = x + y;
                console.log("[sp] returing result");
                _callbacks.forEach(function(callback){
                    callback(result);
                })
            },4000);
        }
    }
}

/* Async using Promise*/
function add(x,y){
    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("[sp] processing ", x , " and ", y);
            var result = x + y;
            console.log("[sp] returing result");
            resolve(result);
        },4000);
    });
    return promise;
}
var p = add(100,200);
p.then(function(result){
  console.log("[sc] - result = ", result);
});
p.catch(fn);








