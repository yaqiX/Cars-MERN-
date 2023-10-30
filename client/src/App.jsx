import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import CreateCar from './pages/CreateCar'
import Car from './pages/Car'

function App() {


  return (
    <div>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/create">
          <button>Create</button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Car />}></Route>
        <Route path="/create" element={<CreateCar />}></Route>
      </Routes>
    </div>
  )
}

export default App;