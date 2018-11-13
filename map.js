var forEach = require('./forEach');

arr1 = [1, 2, 3, 4, 5];

var obj1 = {
    id: 1,
    nombre: "Antonio"
};


function map(param, fun) {
    if (Array.isArray(param)) {
        let arr = mapArray(param, fun);
        return arr
    } else {
        let obj = mapObject(param, fun);
        return obj
    }
}

function mapArray(arr, fun) {
    let newArr = [];
    forEach(arr, (item, i) => {
        newArr[i] = fun(item,i,arr);
    });
    return newArr;
}

function mapObject(obj, fun) {
    let newArr = [];
    forEach(obj, (key,value,i) => {
        newArr[i] = fun(key,value,i,obj);
    });
    return newArr
}




var arr1 = map(arr1, function (key,value) {
    return value + " Hola"
});

console.log(arr1);