
try{
    const array = [1,2,3,4,2];
    
    console.log(findOccurance(null, 2));

}
catch(e){
    console.log(e.message);
   // console.log(e);
}


function findOccurance(array, target){
    if(!Array.isArray(array)){
        throw new Error("Invalid");
    }
    return array.reduce((a,curr) => {
        const occurance = curr === target ? 1:0;
        //console.log(a);
        return a + occurance;
    },0)
}