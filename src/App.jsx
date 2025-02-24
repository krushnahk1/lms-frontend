import Footer from "./components/Footer"
import { useState } from 'react'


import './App.css'
import TeacherList from './components/TeacherList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <TeacherList></TeacherList>
  <Footer/>
    </>
  )
}

export default App;
