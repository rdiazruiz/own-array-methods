var forEach = require('./forEach');
/* var arrA = ["1", 2, "3", 4, "5", 6, "7", 8, "9", 10]; // 55
var arrB = [1, "2", 3, "4", 5, "6", 7, "8", 9, "10"]; // 55 */
var arrX = [1, 2, 3, 4, 5] // Total 15

var objX = {
    x: 3,
    y: 5,
    z: 2,
    h: 1,
    q: 4
}

// APLICA UNA FUNCION A UN ACUMULADOR Y A CADA VALOR DE UN ARRAY (de izquierda a derecha) PARA REDUCIRLO A UN ÚNICO VALOR.
// Se usa para convertir un array en cualquier cosa

function reduce(param, fun, acc) {
    if (Array.isArray(param)) {
        let arr = reduceArray(param, fun, acc);
        return arr
    } else {
        let obj = reduceObject(param, fun, acc);
        return obj
    }
}

function reduceArray(arr, fun, acc) {
    var acc = acc;
    if (!acc) {
        var acc = 0;
    }
    forEach(arr, (item, i) => {
        acc = fun(acc, arr[i], i, arr);
    });
    return acc
}

function reduceObject(obj, fun, acc) {
    if (!acc) {
        var acc = 0;
    }
    forEach(obj, (key, value, i) => {
        acc = fun(acc, key, value, i, obj)
    });

    return acc
}

let arr1 = reduce(arrX, function (valAnterior, valActualKey, valActualValue, i, vector) {
    valAnterior += valActualKey
    return valAnterior
},0);

console.log(arr1);