import UsersJson from './users.json'
type Users = typeof UsersJson

const localJson: Users = UsersJson
console.log(localJson)
