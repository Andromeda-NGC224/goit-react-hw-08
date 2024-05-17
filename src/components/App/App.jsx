
import css from './App.module.css'
import Layout from '../Layout/Layout'
import { Route, Routes } from 'react-router'
import { Suspense, lazy, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { refreshUser } from '../../redux/auth/operations'
import { selectIsRefreshing } from '../../redux/auth/selectors'
import Loader from '../Loader/Loader'
import RestrictedRoute from '../RestrictedRoute'
import PrivatedRoute from '../PrivateRoute'

import HomePage from '../../pages/HomePage/HomePage'
import ContactsPage from '../../pages/ContactsPage/ContactsPage'
import LoginPage from '../../pages/LoginPage/LoginPage'
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage'



export default function App() {
  
  const isRefreshing = useSelector(selectIsRefreshing)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

  return (isRefreshing ? (<Loader />) :
  (<Layout>
    <Suspense fallback={null}>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/contacts' element={<PrivatedRoute component={<ContactsPage/>} redirectTo='/login' />}></Route>
        <Route path='/login' element={<RestrictedRoute component={<LoginPage/>} redirectTo='/contacts' />}></Route>
        <Route path='/register' element={<RestrictedRoute component={<RegistrationPage/>} redirectTo='/' />}></Route>
        </Routes>
    </Suspense>
    </Layout>)
  )
}

