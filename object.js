const address = {
    no : '125e',
    street : 'Shunmugapuram',
    pin : '003'
}

//Factory Function
function add(no, street, pin){
    return {
        no,
        street,
        pin,
    }
}


const addr = add(124, 'sddf', 798) ;

console.log(addr);

//Constructor function

function add_ress(no, street, pin){
    this.no = no;
    this.street = street;
    this.pin = pin;
}

const a = new add_ress(125, 'shun', 103);

console.log(a);
