// 2-6-1
class Creature {
  numberOfHands: number
  numberOfFeet: number
  constructor(numberOfHands: number, numberOfFeet: number) {
    this.numberOfHands = numberOfHands
    this.numberOfFeet = numberOfFeet
  }
}
const creature = new Creature(0, 4)

// 2-6-2
class Dog extends Creature {
  bark: string
  constructor(bark: string) {
    super(0, 4)
    this.bark = bark
  }
  barking() {
    return `${this.bark}! ${this.bark}!`
  }
  shakeTail() {
    console.log(this.barking())
  }
}

class Human extends Creature {
  protected name: string
  constructor(name: string) {
    super(2, 2)
    this.name = name
  }
  greet() {
    return `Hello! Im ${this.name}`
  }
  shakeHands() {
    console.log(this.greet())
  }
}

const dog = new Dog('bow-wow')
const human = new Human('Hanako')

class Taro extends Human {
  constructor() {
    super('Taro')
  }
  public greeting() {
    console.log(this.greet()) // 継承関係ではprotectedメンバーを実行可能
  }
}

const taro = new Taro()
taro.greeting()
taro.greet() // protected メンバーは実行不可
taro.shakeHands()
