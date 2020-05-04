// 6-2-1 型の条件分岐
type IsString<T> = T extends string ? true : false
type X = IsString<'test'>
type Y = IsString<0>

interface Properties {
  name: string
  age: number
  flag: boolean
}

type IsType<T, U> = {
  [K in keyof T]: T[K] extends U ? true : false
}

type IsString1 = IsType<Properties, string>
// 推論結果
// type IsString1 = {
//   name: true;
//   age: false;
//   flag: false;
// }

type IsNumber = IsType<Properties, number>
// 推論結果
// type IsNumber = {
//   name: false;
//   age: true;
//   flag: false;
// }

type IsBoolean = IsType<Properties, boolean>
// 推論結果
// type IsBoolean = {
//   name: false;
//   age: false;
//   flag: true;
// }


// 6-2-2 条件に適合した型を抽出する型
interface Properties10 {
  name: string
  age: number
  walk: () => void
  jump: () => Promise<void>
}

type Filter<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never
}[keyof T]

// 具体例
// type StringKeys = {
//   name: "name";
//   age: never;
//   walk: never;
//   jump: never;
// }["name"]

type StringKeys = Filter<Properties10, string>
// 推論結果
// type StringKeys = "name"

type NumberKeys = Filter<Properties10, number>
// 推論結果
// type NumberKeys = "age"

type FunctionKeys = Filter<Properties10, Function>
// 推論結果
// type FunctionKeys = "walk" | "jump"

type ReturenPromiseKeys = Filter<Properties10, () => Promise<any>>
// 推論結果
// type ReturenPromiseKeys = "jump"


// 6-2-3 条件分岐で得られる確約
interface DeepNest {
  deep: { nest: { value: string } }
}
interface ShallowNest {
  shallow: { value: string }
}
interface Properties100 {
  deep: DeepNest
  shallow: ShallowNest
}

type Salvage<T extends DeepNest> = T['deep']['nest']['value']

type DeepDive<T> = {
  [K in keyof T]: T[K] extends DeepNest ? Salvage<T[K]> : never
}[keyof T]

type X1 = DeepDive<Properties100>
// type X1 = string


// 6-2-4 部分的な型抽出
function greet() {
  return 'Hello'
}

// (...arg: any[])は「関数かつ戻り値がある」型であり、戻り型のU型を返却する
type Return<T> = T extends (...arg: any[]) => infer U ? U : never
type R = Return<typeof greet>
// type R = string

// 引数型の抽出
function greet2(name: string, age: number) {
  return `Hello! Im ${name}. ${age} years old`
}

// A1型は「関数かつ第一引数がある」 => 第一引数の型を返却する
type A1<T> = T extends (...args: [infer U, ...any[]]) => any ? U : never
// A2型は「関数かつ第二引数がある」 => 第二引数の型を返却する
type A2<T> = T extends (...args: [any, infer U, ...any[]]) => any ? U : never
// AA型は「関数型」 => 引数をTuple型で返却する
type AA<T> = T extends (...args: infer U) => any ? U : never

// examples
type X10 = A1<typeof greet2> // type X10 = string
type Y10 = A2<typeof greet2> // type Y10 = number
type Z10 = AA<typeof greet2> // type Z10 = [string, number]


// Promise.resolve引数型の抽出
async function greet3(){
  return 'Hello'
}
type ResolveArg<T> = T extends () => Promise<infer U> ? U : never

// exmaples
type X100 = typeof greet // type X100 = () => string
type Y100 = ResolveArg<typeof greet> // type Y100 = never
