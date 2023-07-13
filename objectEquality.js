const addr = new Add(124, 'sddf', 798) ;


const addr1 = new Add(124, 'sddf', 98) ;
function Add(no, street, pin){
    this.no = no;
    this.street = street;
    this.pin = pin;
}

console.log(areEqual(addr, addr1));

function areEqual(addr, addr1){
    for(let key in addr){
        if(addr[key]!==addr1[key]){
            return false;
        }
        //console.log("d");
    }
    return true;
}

console.log(1==='1','sda');

const Array = [1,2,1,4,5,7];
