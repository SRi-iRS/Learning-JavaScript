checkSpeed(100);

function checkSpeed(speed){
    let speedLimit = 70;
    let kmPerPoints = 5;

    if(speed <= speedLimit+kmPerPoints){
        console.log("Ok");
        return;
    }
    
        let points=Math.floor((speed-speedLimit)/kmPerPoints);
        console.log(points>=12?"License Suspended" : "Points: "+points);

}