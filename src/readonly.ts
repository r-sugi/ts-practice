type State = {
  id: number
  name: string
}

const state: Readonly<State> = {
  id: 1,
  name: 'Taro'
}

// Error state.name = 'Hanako'
// Error state.id = 2

const state1 = {
  id: 2,
  name: 'Jojo'
} as const

// Error state1.name = "Dio"
// Error state1.id = 3

const state2 = {
  id: 3,
  name: 'Hanako'
}

const frozenState = Object.freeze(state2)
// Error frozenState.name = "Yu"
// Error frozenState.id = 4
