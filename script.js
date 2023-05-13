// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
  for (const item of dairy) {
    console.log(item);
  }
}

logDairy();
// Task 2
const animal = {
  canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (const property in bird) {
    console.log(`${property}: ${bird[property]}`);
  }
}

birdCan();

// Task 3
const animal = {
  canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function animalCan() {
  for (const property in bird) {
    console.log(`${property}: ${bird[property]}`);
  }
  for (const property in animal) {
    console.log(`${property}: ${animal[property]}`);
  }
}

animalCan();
