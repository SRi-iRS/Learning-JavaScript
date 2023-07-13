console.log(sum([1,2,3]));

function sum(...items){
    console.log(items.length);
    if(items.length === 1)
        items=[...items[0]];
        //console.log(items);
    return items.reduce((a,b) => a+b);
}