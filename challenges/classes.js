// 1. Copy and paste your prototype in here and refactor into class syntax.

// CuboidMaker.prototype.volume = function() {
//     return this.length * this.width * this.height;
// }

// CuboidMaker.prototype.surfaceArea = function() {
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// }

class cuboidd {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    volume() {
        console.log(this.length * this.width * this.height);
    }

    surfaceArea() {
        console.log(2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    }
}

const realCube = new cuboidd(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(realCube.volume(4, 5, 5)); // 100
console.log(realCube.surfaceArea(4, 5, 5)); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods 
// using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.

class CubeMaker extends cuboidd {
    constructor(length, width, height) {
        super(length, width, height);
    }

    volume() {
        console.log(this.length * this.width * this.height);
    }

    surfaceArea() {
        console.log(2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    }
}

const nuthaCube = new CubeMaker(7, 8, 9);
console.log(nuthaCube.volume(7, 8, 9)); // 504
console.log(nuthaCube.surfaceArea(7, 8, 9)); // 382