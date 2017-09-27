var o={
name:'larry',
age:11};
var rr ={}
var result =Object.assign(rr,o);
console.log(result);
//console.log(result === o);

console.log(result === rr);


var obj={
name:'larry',
     age:11

}
var obj2={
ll:99,
   hh:55
};
var jj =Object.assign(obj,obj2);
console.log(jj)
console.log(jj === obj)
