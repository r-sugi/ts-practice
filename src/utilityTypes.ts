interface User1000 {
  name: string
  age: number | null
  gender: 'male' | 'female' | 'other'
  birthplace?: string
}

// Readonly: すべてreadonlyになる
type ReadonlyWrapUser = Readonly<User1000>
// 推論結果
// type ReadonlyWrapUser = {
//   readonly name: string;
//   readonly age: number | null;
//   readonly gender: "male" | "female" | "other";
//   readonly birthplace?: string | undefined;
// }

// Partial: すべてoptionalになる
type PartialWrapUser = Partial<User1000>
// 推論結果
// type PartialWrapUser = {
//   name?: string | undefined;
//   age?: number | null | undefined;
//   gender?: "male" | "female" | "other" | undefined;
//   birthplace?: string | undefined;
// }

// Required: すべてrequiredになる
type RequiredWrapUser = Required<User1000>
// 推論結果
// type RequiredWrapUser = {
//   name: string;
//   age: number | null;
//   gender: "male" | "female" | "other";
//   birthplace: string;
// }

// Record: 第一Genericsに指定したプロパティ名称で新しいObject型を生成する型
type UserRecord = Record<'user', User1000>
// 推論結果
// type UserRecord = {
//   user: User1000;
// }

// Pick: 第二Genericsに指定した名称のプロパティ型を、第一Genericsに指定した型から抽出し、新しいObject型を生成する型
type UserGender = Pick<User1000, 'gender'>
// 推論結果
// type UserGender = {
//   gender: "male" | "female" | "other";
// }

// Omit: 第二Genericsに指定した名称のプロパティ型を、第一Genericsから取り除き、新しいObject型を生成する型
type WithoutBirthplace = Pick<User1000, 'birthplace'>
// 推論結果
// type WithoutBirthplace = {
//   birthplace?: string | undefined;
// }

// Exclude:
type E1 = Exclude<"a" | "b", "b"> // type E1 = "a"
type E2 = Exclude<"a" | (() => void), Function> // type E2 = "a"

// Extract:
type Ex1 = Extract<"a" | "b", "b"> // type Ex1 = "b"
type Ex2 = Extract<"a" | (() => void), Function> // type Ex2 = () => void

// NonNullable:
type NN1 = NonNullable<string | null | undefined> // type NN1 = string

// ReturnType:
type R1 = ReturnType<() => string> // type R1 = string
// type R2 = ReturnType<string>  Error

// InstanceType:
class C {
  y = 0
  x = 0
}
type C100 = InstanceType<typeof C>
const n = {} as C100 // { x: number, y: number }

// 6-3-3 公式提唱Utility Types

// TypeName:
type TypeName<T> =
  T extends string ? "string" :
  T extends number ? "number" :
  T extends boolean ? "boolean" :
  T extends undefined ? "undefined" :
  T extends Function ? "function" :
  "object"

type Ty0 = TypeName<string> // type Ty0 = "string"
type Ty1 = TypeName<"a"> // type Ty1 = "string"
type Ty2 = TypeName<true> // type Ty2 = "boolean"
type Ty3 = TypeName<() => void> // type Ty3 = "function"
type Ty4 = TypeName<string[]> // type Ty4 = "object"

// FunctionProperties:
interface Part {
  id: number
  name: string
  subparts: Part[]
  updatePart(newName: string): void
}

type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]

type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>

type FP1 = FunctionPropertyNames<Part>
// type FP1 = "updatePart"

type FP2 = FunctionProperties<Part>
// type FP2 = {
//   updatePart: (newName: string) => void;
// }

// NonFunctionProperties:
interface Part2 {
  id: number
  name: string
  subparts: Part[]
  updatePart(newName: string): void
}

type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T]

type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>

type NFP1 = NonFunctionPropertyNames<Part>
// type NFP1 = "id" | "name" | "subparts"

type NFP2 = NonFunctionProperties<Part>
// type NFP2 = {
//   id: number;
//   name: string;
//   subparts: Part[];
// }

// Unpacked:
type Unpacked<T> =
  T extends (infer U)[] ? U :
  T extends (...args: any[]) => infer U ? U :
  T extends Promise<infer U> ? U :
  T

type U0 = Unpacked<string> // type U0 = string
type U1 = Unpacked<string[]> // type U1 = string
type U2 = Unpacked<() => string> // type U2 = string
type U3 = Unpacked<Promise<string>> // type U3 = string
type U4 = Unpacked<Promise<string>[]> // type U4 = Promise<string>
type U5 = Unpacked<Unpacked<Promise<string>[]>> // type U5 = string


// 6-3-4 再帰的なUtility Types
// isPrimitive: Object型およびArray型に該当するか否かを判定する型。該当しなければPrimitive型とみなす
// DeepReadonly: 再帰的にReadonly変換する型
// DeepRequired:
// DeepPartial:
// DeepNullable:
// DeepNOnNullable:

// 6-3-5 独自定義Utility Types
// Unbox:
// UnionToIntersection:
// NonEmptyList:
// PickSet:
// PickMapKeys:
