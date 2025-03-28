var name=["mm",11,12,"be","cs",true,"",null];
console.log(name);
for(var i=0;i<name.lenght;i++){
    console.log(name[i]);
}
var arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [11,12,13]
];
console.log(arr);
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        console.log(arr[i][j]);
    }
    console.log();
} 
var num=[1,2,3,4,5];
console.log(num);
console.log(num[2]);
console.log(num.slice(1,4));
for(let i=0;i<num.length;i++){
    console.log(num[i]);
}
num.pop();
console.log(num);
num.push();
console.log(5);
num.shift();
console.log(num);
num.unshift(3);
console.log(num);
num.sort();
console.log(num);