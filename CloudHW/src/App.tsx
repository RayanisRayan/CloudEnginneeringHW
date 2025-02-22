import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1>Rayan Alamrani HW</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Click to increase count 
          </p>
      </div>
      <p className="read-the-docs">
          This is a webpage
      </p>
    </>
  )
}

export default App
