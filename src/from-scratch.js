/** FEEDBACK: I left some feedback throughout! Great job getting all test cases to pass! */
class Quadrilateral {
  constructor(side1, side2, side3, side4) {
    this.side1 = side1
    this.side2 = side2
    this.side3 = side3
    this.side4 = side4
  }
  getPerimeter() {
    return (this.side1 + this.side2 + this.side3 + this.side4)
  }
}

class Rectangle extends Quadrilateral {
  constructor(side1, side2) {
    /** FEEDBACK: We do this because we need to have these values sub in for the values in the constructor in the parent class. */
    super(side1, side2, side1, side2) // why we do this? 

  }
  getArea() {
    return this.side1 * this.side2
  }
}

class Square extends Rectangle {
  constructor(side1) {
    /** FEEDBACK: Here you can get away with only having side1 twice because the constructor it references is the rectangle and rectangle only requires 2 values! */
    super(side1, side1, side1, side1)

  }
  /** FEEDBACK: This should be in Rectangle since we can get the diagonal of a rectangle! */
  getDiagonal() {
    return Math.sqrt(this.getArea() * 2)
  }
}

/* Be creative with this one! */

//I am not sure if i did this right
class Person {
  static #allPeople = [];

  constructor(name, age, height) {
    this.name = name
    this.age = age
    this.height = height
    Person.#allPeople.push(this);
  }
  setName() {
    let name = this.name
  }

  changeName(newName) {
    return this.name = newName
  }

  getName() {
    return this.name
  }

  static getAllPeople() {
    return [...Person.#allPeople];
  }

  static findBy(name) {
    return Person.#allPeople.find((person) => person.name === name);
  }
}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
