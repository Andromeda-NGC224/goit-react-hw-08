import { NavLink } from 'react-router-dom'
import css from '../AuthNav/AuthNav.module.css'


export default function AuthNav() {
    return (
        <div className={css.navLinkCont}>
            <NavLink className={css.navLink} to='/login'>Увійти</NavLink>
            <NavLink className={css.navLink} to='/register'>Зареєструватися</NavLink>
      </div>
  )
}

