
import css from './App.module.css'
import Layout from '../Layout/Layout'
import { Route, Routes } from 'react-router'
import { lazy } from 'react'

const HomePage = lazy(()=> import(`../../pages/HomePage/HomePage`))
const ContactsPage = lazy(()=> import(`../../pages/ContactsPage/ContactsPage`))
const LoginPage = lazy(()=> import(`../../pages/LoginPage/LoginPage`))
const RegistrationPage = lazy(()=> import(`../../pages/RegistrationPage/RegistrationPage`))

export default function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/contacts' element={<ContactsPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegistrationPage/>}></Route>
      </Routes>
    </Layout>
  )
}

