import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function AppBar() {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <header>
            <Navigation></Navigation>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
  
}