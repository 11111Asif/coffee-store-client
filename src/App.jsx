
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCart from './components/CoffeeCart'
import { useState } from 'react'

function App() {

  const coffees = useLoaderData()

  const [coffe, setCoffe] = useState(coffees)
  

  return (
    <>
    
      <h1 className='text-5xl text-purple-600 text-center'>HOT HOT COLD COFFEE: {coffees.length}</h1>
     <div className='grid lg:grid-cols-2 p-24 gap-6'>
     {
        coffees.map(coffee => <CoffeeCart key={coffee._id} coffee={coffee} coffe={coffe} setCoffe={setCoffe}></CoffeeCart>)
      }
     </div>
    
    </>
  )
}

export default App
