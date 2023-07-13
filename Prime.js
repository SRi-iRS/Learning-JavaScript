findPrimeNumbers(11);

function findPrimeNumbers(number){
    for(let i = 2; i <= number; i++){
        if(isPrime(i)) 
            console.log(i);
    }
}

function isPrime(num){
    for(let factor = 2; factor <= Math.sqrt(num); factor++){
        if(num % factor === 0){
            //console.log(num);
            return false;
        }
    }
    return true;
}