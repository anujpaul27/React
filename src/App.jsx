import './App.css'
import Form from './component/Form'

function App() {
  
  function information (data)
  {
    console.log((data.name));
    console.log((data.password));
  }

  return (
    <div>
      <Form 
      heading={'Sign Up'}  
      btnText={'Submit'} 
      information={information}>
      <div>
        <h1 className='text-3xl'>Sign Up</h1>
        <p>Please sign up now</p>
      </div>
      </Form>,
      <Form 
      heading={'Update Information'} 
      btnText={'Enter to Update'} 
      information={information}> 
      <div>
        <h1 className='text-3xl'>Update</h1>
        <p>Please Update up now</p>
      </div>
      </Form>
    </div>
  )
}


export default App
