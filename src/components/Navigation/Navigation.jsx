import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from '../Navigation/Navigation.module.css'

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <div className={css.navLinkCont}>
            <NavLink className={css.navLink} to='/'>Головна</NavLink>
            {isLoggedIn && <NavLink className={css.navLink} to='/contacts'>Контакти</NavLink>}
      </div>
  )
}
