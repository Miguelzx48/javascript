#JS 

/// Closure - Object Oriented(Stoyan Stefanov)

function f() {
    function makeClosure(x) {
        return function() {
            return x;
        }
    }
    var a = [];
    var i;
    for (i = 0; i < 3; i++) {
        a[i] = makeClosure(i);
    }
    return a;
}
var a = f();

console.log(a[0]());
