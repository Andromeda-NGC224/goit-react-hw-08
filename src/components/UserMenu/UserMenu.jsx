import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selectors"
import { logOut } from "../../redux/auth/operations"
import css from '../UserMenu/UserMenu.module.css'

export default function UserMenu() {
    const userName = useSelector(selectUser)
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(logOut())
    }
        
    return (
        <div className={css.navLinkCont}>
            <p>Ласкаво просимо, {userName.name}</p>
            <button className={css.navLinkBtn} type="button" onClick={handleLogOut} >Вийти</button>
        </div>
    )
     
 }