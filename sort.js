arr = [5,6,-9,-2,-7];

arr = arr.sort(); // it will give wrong sorting
console.log(arr); //[ -2, -7, -9, 5, 6 ]

// actual sorting 
arr = arr.sort((a,b)=> a-b);
console.log(arr); //[ -9, -7, -2, 5, 6 ]

// decending sorting
arr = arr.sort((a,b)=>b-a);
console.log(arr); // [ 6, 5, -2, -7, -9 ]



arr = arr.sort(function (a, b){
    return Math.abs(a)-Math.abs(b);
});
console.log(arr); //[ -2, 5, 6, -7, -9 ]