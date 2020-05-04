// 4-4-20
function increment() {
  return { type: 'INCREMENT' }
}
function decrement() {
  return { type: 'DECREMENT' } as const
}

const z1 = increment()
const z2 = decrement()

import constants from './constants'
const n = constants
// const n: {
//   readonly increment: "INCREMENT";
//   readonly decrement: "DECREMENT";
//   readonly setCount: "SET_COUNT";
// }
