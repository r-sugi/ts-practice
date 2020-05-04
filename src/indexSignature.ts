// Property 'name' of type 'string' is not assignable to string index type 'number'.ts(2411)
// type User2 = {
//   // name: string // Error
//   [k: string]: number
// }

type User3 = {
  name: string // No Error
  [k: string]: number | string
}

const userA: User3 = {
  name: 'Taro',
  age: 26
}

const x = userA.name
const y = userA.age


type Answer = 'mighty' | 'lot' | 'few' | 'entirely'
type User4 = {
  name: string
  enquete: { [k: string]: Answer | undefined }
}

const userB: User4 = {
  name: 'Taro',
  enquete: {
    exercise_habits: 'entirely',
    time_of_sleeping: 'few'
  }
}
const x1 = userB.enquete['exercise_habits']
const y1 = userB.enquete['time_of_sleeping']


type Question = 'exercise_habits' |  'time_of_sleeping'
type UserC = {
  name: string,
  enquete: { [K in Question]?: Answer }
}

const userC: UserC = {
  name: 'Taro',
  enquete: {
    exercise_habits: 'entirely',
    time_of_sleeping: 'few'
  }
}

const x3 = userC.enquete['exercise_habits']
// const x4 = userC.enquete['steps_per_data'] // Error
