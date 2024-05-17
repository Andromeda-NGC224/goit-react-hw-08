
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

const HomePage = lazy(()=> import(`../../pages/HomePage/HomePage`))
const ContactsPage = lazy(()=> import(`../../pages/ContactsPage/ContactsPage`))
const LoginPage = lazy(()=> import(`../../pages/LoginPage/LoginPage`))
const RegistrationPage = lazy(() => import(`../../pages/RegistrationPage/RegistrationPage`))



export default function App() {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing)

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

