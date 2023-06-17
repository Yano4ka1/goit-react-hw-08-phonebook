import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux"
import { authSelectors } from "redux/auth/authSelectors"
import css from './AppBar.module.css';

export const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

    return (
        <header className={css.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};