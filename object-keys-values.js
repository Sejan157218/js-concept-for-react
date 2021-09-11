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

const keys = Object.keys(student);
const Value = Object.values(student);
const keysAndValues = Object.entries(student);
/* console.log(keys);
console.log(Value);
console.log(keysAndValues); */

// loop
/* for(let element in student){
    console.log(element,student[element]);
} */

/* for(let prop of keys){
    console.log(prop,student[prop]);
} */


/* for(let [keys,value] of Object.entries(student)){
    console.log(keys,value);
} */
