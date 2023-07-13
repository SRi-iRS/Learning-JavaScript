let arr = ['', undefined, null, 0, false, NaN, 1, 'Sri'];

console.log(countTruthy(arr));

function countTruthy(array){
    let count =0;
    for(let val of array){
        if(val){
            count++;
            console.log(val);
        }
    }
    return count;
}