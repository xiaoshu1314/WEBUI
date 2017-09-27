let s= new Set();
//[2,2,3,4,5,3,2,5,7,6,7].forEach((x)=>s.add(x));
[2,2,3,4,5,3,2,5,7,6,7].forEach(function(item){
    s.add(item) 
        
        })
console.log(s)

var arr =[2,2,3,4,5,6,5,6];
var hh =[...new Set(arr)];
console.log(hh);

let ww =new Set();
ww.add(2);
ww.add(3);
ww.add(4);

console.log(ww);
console.log(Set.prototype.constructor)
//console.log(Set.prototype.size(ww))
    
