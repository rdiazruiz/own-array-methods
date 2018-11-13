var forEach = require('./forEach');

var obj = [{
    id: 1,
    nombre: "Antonio"
},
{
    id: 2,
    nombre: "Pepe"
},
{
    id: 3,
    nombre: "Manolo"
},
{
    id: 4,
    nombre: "Antonio"
},
{
    id: 5,
    nombre: "Francisco"
},
{
    id: 6,
    nombre: "Antonio"
},
];

// EL MÉTODO filter() CREA UN NUEVO ARRAY CON TODOS LOS ELEMENTOS QUE CUMPLAN CON LA CONDICIÓN IMPLEMENTADA POR LA FUNCIÓN DADA.
function filter(arr, fun) {
    let newArr = [];
    forEach(arr, (item,i) => {
        if (fun(item,i,arr)) {
            newArr.push(item);
        }
    });
    return newArr;
}

var arr1 = filter(obj, function (item, i) {
    return item.nombre === "Antonio"
});

console.log(arr1)