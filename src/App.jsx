



import {useState} from 'react'
import './App.css'
import TeacherList from './components/TeacherList'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)









  return (

    <>
    <Header/>
  <TeacherList></TeacherList>
  <Footer/>
    </>
  )
}

export default App;
