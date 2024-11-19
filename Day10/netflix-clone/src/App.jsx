import { useState } from 'react'
import Movielist from './MovieList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 style={{
        backgroundColor: "black",
        color: "White",
        textAlign: "center",
        fontSize: "20px" }}>
        Netflix Clone App
        </h2>
      <Movielist />
    </>
  )
}

export default App