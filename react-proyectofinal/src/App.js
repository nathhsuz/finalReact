import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import CartContent from './components'
import Inicio from './components/Inicio'

function App() {
  return (
    <div>
     
   <BrowserRouter>
  <Routes>
    <Route path='/' element={<Inicio />} />
    <Route path='/cart' element={<CartContent /> }/>
  </Routes>
   </BrowserRouter>
    </div>
   
  )
}

export default App;