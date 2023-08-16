"use strict";
function descendingOrder(n) {
    let f = String(n);
    let arr = f.split("");
    arr = arr.sort()
    arr = arr.reverse()
    n = arr.join("")
    console.log(n)
    return n;
}
descendingOrder(1201);
