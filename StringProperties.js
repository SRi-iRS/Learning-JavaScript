const person= {
    name : 'Sri',
    lname : 'Murugan',
    age : 21
};

showProperties(person);

function showProperties(obj){
    for(let i in obj){
        if(typeof obj[i] === 'string'){
            console.log(i ,obj[i]);
        }
    }
}