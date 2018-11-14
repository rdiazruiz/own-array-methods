

var obj = {
    id: 1,
    nombre: "Antonio",
    apellido: "Machin",
    edad: "88",
    email: "a.machin@gmail.com"
}

var arr = [5, 2, 3, 4];


var foreach =  function forEach (param, fun) {
    if (Array.isArray(param)) {
        forEachArray(param, fun)
    } else {
        forEachObject(param, fun)
    }
}

function forEachObject(obj, fun) {
    let arr = Object.keys(obj)
    for (let i = 0; i < arr.length; i++) {
        fun(arr[i], obj[arr[i]], i, obj);
    }
};

function forEachArray(arr, fun) {
    for (let i = 0; i < arr.length; i++) {
        fun(arr[i], i, arr);
    }
};

module.exports = foreach;






