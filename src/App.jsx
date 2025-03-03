



import {useState} from 'react'
import './App.css'
import TeacherList from './components/TeacherList'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
function App() {

  return (

    <>
    <Header/>
    <Home></Home>
    <AboutUs></AboutUs>
  <TeacherList></TeacherList>
  <Card/>
  <Footer/>
  

    </>
  )
}

export default App;
