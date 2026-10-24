import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <main style={{}}>
        <Outlet />
      </main>
    </div>
  )
}

export default App
