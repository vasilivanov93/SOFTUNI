class Circle {
    constructor(radius) {
        this.radius = Number(radius);
    }

    get diameter() {
        return 2 * this.radius;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    get area() {
        return (Math.PI * Math.pow(this.radius, 2)).toFixed(3);
    }
}

let c = new Circle(2);
console.log(c.radius)
console.log(c.diameter);
console.log(c.area);