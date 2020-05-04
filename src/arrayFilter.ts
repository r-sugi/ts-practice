type User10 = { name: string }
type User11 = User10 & { gender: 'male' | 'female' | 'other' }
type User12 = User10 & { graduate: string }

const users: (User11 | User12)[] = [
  { name: 'Taro', gender: 'male' }
]

function filterUser(user: User11 | User12): user is User12 {
  return 'graduate' in user
}

const filteredUsers = users.filter(filterUser)

const filteredUsers2 = users.filter((user: User11 | User12): user is User12 => {
  return 'graduate' in user
})
