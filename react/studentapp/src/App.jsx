import { useState } from 'react'
import './App.css'
import State from './state'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <State />
      <count />
    </>
  )
}

export default App