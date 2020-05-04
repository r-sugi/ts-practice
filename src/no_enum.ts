enum Permission {
  foo = 'Foo',
  bar = 'BAR',
  baz = 'BAX'
}

const myObject = {
  foo: 'FOO',
  bar: 'BAR',
  baz: 'BAZ',
} as const

let myObjectKey: keyof typeof myObject // let myObjectKey: "foo" | "bar" | "baz"
let myObjectValue: typeof myObject[keyof typeof myObject] // let myObjectValue: "FOO" | "BAR" | "BAZ"
