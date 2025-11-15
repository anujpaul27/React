import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'

function App() {
  const [count, setCount] = useState(0)
  const ar = ['kanha','Natkat','Nanda Dulal']
  return (
    <>
      
      <h1>Vite + React</h1>
      <Student name='Shyam' roll='12141541'></Student>
      <Student name='Ram' roll='12184551'></Student>
      <Todo name='Today Module' isDone={true}></Todo>
      <Todo name='Today Practice' isDone={false}></Todo>
      <Actor name='Sundor' ></Actor>
      {
        ar.map(actor=><Actor name={actor}></Actor>)
      }      
    </>
  )
}

// Function rule is start to the function name is capital letter
function Student ({name,roll})
{
  const obj = {
      backgroundColor: 'rgb(84, 84, 230)',
      margin: '10px',
      padding: '10px',
      borderRadius: '10px',
  }
  return <div>
    <h2>Student Details</h2>
    <p className='btn'>Name: {name}</p>
    <p style={obj}>Roll: {roll}</p>
  </div>
}


export default App
