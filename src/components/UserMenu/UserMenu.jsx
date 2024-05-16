import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selectors"
import { logOut } from "../../redux/auth/operations"

export default function UserMenu() {
    const userName = useSelector(selectUser)
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(logOut())
    }
        
    return (
        <div>
            <p>Welcome, {userName.name}</p>
            <button type="button" onClick={handleLogOut} >Logout</button>
        </div>
    )
     
 }