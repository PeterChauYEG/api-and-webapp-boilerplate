export const loadState = () => {
  try {
    // read state from localStorage
    const serializedState = localStorage.getItem('state')

    // key doesn't exist if null
    if (serializedState === null) {
      return undefined
    }

    // convert string to JSON for reducers
    return JSON.parse(serializedState)
  } catch (err) {

    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)

    localStorage.setItem('state', serializedState)
  } catch(err) {

    // handle error
  }
}