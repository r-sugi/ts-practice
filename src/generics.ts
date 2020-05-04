// 6-1-1
interface Box<T> {
  value: T
}
// const box0: Box = { value: 'test' } // imple genericts error
const box1: Box<string> = { value: 'test' }
// const box2: Box<number> = { value: 'test' } // type error


interface Box2<T = string> {
  value: T
}
const box10: Box2 = { value: 'test' }
const box11: Box2<string> = { value: 'test' }
const box12: Box2<number> = { value: 1 }


interface Box3<T extends string | number> {
  value: T
}
const box20: Box3<string> = { value: 'test' }
const box21: Box3<number> = { value: 1 }
// const box22: Box3<boolean> = { value: 1 } // type error


// 6-1-2 infer type from argument type
const boxed = <T>(props: T) => ({ value: props })
// 同じ意味
// function boxed<T>(props: T) {
//   return { value: props }
// }

const box100 = boxed('test')
const box101 = boxed(0)
const box102 = boxed(false)
const box103 = boxed(null)

const box200 = boxed(false as boolean | null)
const box201 = boxed<string | null>(null)

// 6-1-13 extendsによる制約
function boxed2<T extends string>(props: T) {
  return { value: props }
}
const box301 = boxed(0)
const box302 = boxed('test')

// 6-1-14
interface Props {
  amount: number
}
function boxed3<T extends Props>(props: T) {
  return { value: props.amount.toFixed(1) }
}

const box401 = boxed3({ amount: 0 })
// const box402 = boxed3({ value: 0 }) // Error key is not in type Props
// const box403 = boxed({ amount: 'test' }) // Error type

// 6-1-3 複数のGenerics
function pick<T, K extends keyof T>(props: T, key: K) {
  return props[key]
}
const obj = {
  name: 'Taro',
  amount: 0,
  flag: false
}
const value1 = pick(obj, 'name') // const value1: string
const value2 = pick(obj, 'amount') // const value2: number
const value3 = pick(obj, 'flag') // const value2: number
// const value4 = pick(obj, 'test') // Error


// 6-1-4 クラスのGenerics
class Person<T extends string> {
  constructor(public name: T) {}
}
const p1 = new Person('Taro')
const personName = p1.name

interface PersonProps {
  name: string
  age: number
  gender: 'male' | 'female' | 'other'
}

class Person2<T extends PersonProps> {
  name: T['name']
  age: T['age']
  gender: T['gender']

  constructor(props: T) {
    this.name = props.name
    this.age = props.age
    this.gender = props.gender
  }
}

const p2 = new Person2({
  name: 'Taro',
  age: 28,
  gender: 'male'
})
