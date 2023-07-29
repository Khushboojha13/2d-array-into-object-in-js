//approach 1- using forEach() 

let array2d=[["john",12],
["hello",13],
["yello",15],
["pello",18]
]

function array2obj(array2d){
    let emptyobj={}; //create an empty object
    array2d.forEach((val)=> {
         let keys=val[0];
         let values= val[1];
         emptyobj[keys]=values; //add the key and value to the object

    });
    return emptyobj;
}
console.log("Array into object");
console.log(array2obj(array2d));


//approach 2- reduce() method
const aray2doutput= array2d.reduce(function(acc,curr){
        let keys=curr[0];
        let values=curr[1];
        acc[keys]=values;
        return acc;
},{});
console.log("Array into object using reduce");
console.log(aray2doutput);


//approach 3- Array.flat() method - it flatens the array means convert 2d array into 1d array

function array2dflat(array2d){
    array2d= array2d.flat(); 
    let emptyobj1={};
    
      for(let i=0;i<array2d.length;i++){
        if(i%2==0){
         let key1=array2d[i];
         let value1= array2d[i+1];
    
        emptyobj1[key1]=value1;
        }
    }
    return emptyobj1;
}

console.log("Array into object");
console.log(array2dflat(array2d));



