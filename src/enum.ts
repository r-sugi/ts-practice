enum Direction {
  Up, // enum number Direction.Up = 0
  Down, // enum number Direction.Down = 1
  Left, // enum number Direction.Left = 2
  Right, // enum number Direction.Right = 3
}

const left = Direction.Left // const left: Direction.Left
console.log(left) // 2


enum Ports {
  USER_SERVICE = '8080',
  REGISTER_SERVICE = '8081',
  MEDIA_SERVIE = '8888'
}

const port = Ports.USER_SERVICE
console.log(port) // 8080

// 代入
let hoge: Ports
hoge = Ports['USER_SERVICE']
console.log(hoge) // 8080
