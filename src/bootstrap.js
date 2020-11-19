import React from 'react'
import ReactDOM from 'react-dom'

import Counter from './components/counter'

function App () {
  return (
    <>
      <h1>Hello! We're exposing a Counter component</h1>
      <Counter />
    </>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
