const circle = {
    radius : 5,
    get area(){
        //console.log(3.14 * this.radius);
        return Math.PI * this.radius * this.radius;
    }
};
console.log(circle.area);

