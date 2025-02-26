import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TeacherList from './components/TeacherList'
import Header from './components/Header'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Home></Home>
    <AboutUs></AboutUs>
  <TeacherList></TeacherList>
  

    </>
  )
}

export default App
