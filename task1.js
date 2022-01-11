// 1. Input - "Neoquant Solutions"
// Output - N-3, E - 1, o -3 .... and so on.....

let str = "Neoquant solution";
let str2 = str.toLowerCase();
str2.replace(/\s/g, '')
let result ={}
for (var i = 0; i < str2.length; i++) {
  if (result[str2[i]]) {
    result[str2[i]] += result[str2[i]]
  }else{
    result[str2[i]] = 1
  }
}
// console.log (result)

// 2. Input - "Neoquant Solutions"
// Output - "snoituloS tnauqoeN"

let str = "Neoquant Solutions"
let result = " "
for (let i = str.length - 1; i >= 0; i--) {
     result+=str[i]
}
// console.log(result);

let splitStr = str.split("")
let revStr = splitStr.reverse()
let result  = revStr.join("")
// console.log(result);

// 3. Input - [{ age: 15, name: "abc" }, { age: 50, name: "xyz" }..... add more sample data of 5 10 elements]
// Output:
// Max age: N
// Min age: N
// Sum of ages: N
// Sort by name desc: same array in desc format

let array = [{ age: 15, name: "abc" }, { age: 50, name: "xyz" },
{ age: 21, name: "amu" }, { age: 23, name: "amruta" }, { age: 24, name: "vaidhu" }, { age: 51, name: "raju" }, { age: 42, name: "rita" },
{ age: 35, name: "rahul" }
]
let ageArray = [];
let nameArray=[];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    ageArray.push(array[i].age)
    nameArray.push(array[i].name)
}

for (let j = 0; j < ageArray.length; j++) {
    sum += ageArray[j]
}

for (let j = 1; j < ageArray.length; j++) {
    let right = ageArray[j]
    for (let k = 0; k < j; k++) {
        let left = array[k];
        if (right > left) {
            let temp = ageArray[j+1]
            ageArray[j+1] = ageArray[k]
            ageArray[k] = temp
        }else{
            break
        }
    }
}

let nameArr = array.map((pri,index)=>{
    return pri.name
})

// console.log(nameArr);
// console.log('Total Sum of Array is ' + sum);
// console.log('Sorted Array ' + ageArray);
// console.log('Sorted Array ' + nameArray.sort().reverse());
// console.log('Max Age ' + Math.max(...ageArray));
// console.log('Min Age ' + Math.min(...ageArray));

// 4. Input - [{ age: 15, name: "abc" }, { age: 50, name: "xyz" }..... add more sample data of 5 10 elements]
// Output - [15, 50, ......]
// ["abc", "xyz",.....]

let array2 = [{ age: 15, name: "abc" }, { age: 50, name: "xyz" },
{ age: 21, name: "amu" }, { age: 23, name: "amruta" }, { age: 24, name: "vaidhu" }, { age: 51, name: "raju" }, { age: 42, name: "rita" },
{ age: 35, name: "rahul" }
]
let ageArray2 = []
let nameArray2=[]
for (let i = 0; i < array2.length; i++) {
    ageArray2.push(array2[i].age)
    nameArray2.push(array2[i].name)
}

console.log(ageArray2,nameArray2);

// let result = array.map((value,index)=>{
//     return value.age
// })
// console.log(result);