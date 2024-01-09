import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


import Header from './components/Header'


function App() {

  return (
    <>




        <BrowserRouter>


                <Header />



                <Routes>
                    <Route path="/" element={<h1>Home</h1>} />
                    <Route path="/Writers" element={<h1>Writers</h1>} />

                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>




        </BrowserRouter>
    </>
  )
}

export default App
