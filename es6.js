// template string
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

const string = `my name is ${student.name}.I am ${student.age} yrs old. I am a ${student.subject[2]} Devoloper`;
// console.log(string);

// spead oparator

const number = [1,2,3,4,5,6,7,8,9]
const newNumber = [...number,10];
// console.log(newNumber);
const filterArray = number.filter(num=>num<7);
// console.log(filterArray);

// Arrow funtion
const return9 =()=>console.log(9);
// return9();
// single parameter
const multiply = num1 => num1 * 12;
// console.log(multiply(12));

// double parameter
const Division = (num1,num2) => (num1+num2) / 4;
// console.log(Division(12,12));

// destructuring
const player={
    name : 'sajal',
    age : 25,
    salary : 101111,
    preveousClub : ['ab','abc','abcd'],
    goals:{
        firstMatch:9,
        secondMatch : 1,
        thirdMatch:2,
    }
}

const preveousSecound = player.preveousClub[1];
// console.log(preveousSecound);
const [ab,abc,abcd] = player.preveousClub;
// console.log(abcd);

const {firstMatch,secondMatch,thirdMatch} = player.goals;
// console.log(secondMatch);

// default parameter
const defaultParameter = (num1,num2=5) =>{
    const sum = num1+num2;
    return sum;
}
// console.log(defaultParameter(50));

// Optional chaining

const chainingObject={
    laguageFirst : 'js',
    // laguageSecound : 'react',
}
const stringChaining = `my name is ${student.name}.I am ${student.age} yrs old. I am a ${chainingObject.laguageSecound?chainingObject.laguageSecound:'react'} Devoloper`;
// console.log(stringChaining);