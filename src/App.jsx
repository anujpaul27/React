import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      
      <h1>Vite + React</h1>
      <Student></Student>
    </>
  )
}

// Function rule is start to the function name is capital letter
function Student ()
{
  return <div>
    <h2>Student Details</h2>
    <p>Name: Shyam</p>
    <p>Roll: 4512141</p>
  </div>
}


export default App
