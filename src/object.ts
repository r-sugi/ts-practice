type User = {
  age?: number
  name?: string
}

function registerUser(user: User) {}

const maybeUser = {
  age: 26,
  name: 'Taro',
  gender: 'male'
}
const notUser = {
  gender: 'male',
  graduate: 'Tokyo'
}

registerUser(maybeUser) // no Error
// registerUser(notUser) // Error


// Excess Property Checks
// Argument of type '{ age: number; name: string; gender: string; }' is not assignable to parameter of type 'User'.
//   Object literal may only specify known properties, and 'gender' does not exist in type 'User'.ts(2345)
registerUser({
  age: 26,
  name: 'Taro',
  // gender: 'male' // Error
})

// avoid Excess Property Checks
registerUser({...{
  age: 26,
  name: 'Taro',
  gender: 'male' // No Error
}})
