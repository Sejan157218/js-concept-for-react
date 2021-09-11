// let const

const name = 'sejan';
let age = 25;


// comparison 

if(name ==='sejan' && age<26){
    console.log('my name is sejan mahmud');
}
else if(name ==='sejan' || age <= 25){
    console.log('I am 25 years old');
}


// Array

/* const array = ['sejan',1,'sajal',2]
array.push('ash')
array.push(3)
array.pop('ash')
console.log(array);
console.log(array[3]);
console.log(array.indexOf(2));
console.log(array.length);
console.log(array.includes(1)); */


// for loop
const number = [1,2,3,4,5,6,7,8,9]

for(let i = 0;i<number.length;i++){
    const element = number[i]
    // console.log(element);
}
for(const element of number){
    // console.log(element);
}

// function
function add(num1,num2){
    const sum = num2+num1;
    return sum;
}
// console.log(add(3,5));


// Object

const student={
    name : 'sajal',
    age : 15,
    id : 101,
    subject : ['english','js','react'],
    narks:{
        english:90,
        js : 100,
        react:100,
    }
}
/* console.log(student.name);
console.log(student['age']);
console.log(student.subject[2]);
console.log(student.narks.react); */


