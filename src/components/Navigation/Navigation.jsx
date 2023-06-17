import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth/authSelectors";
import css from './Navigation.module.css';
import { LinkEl } from 'components/AuthNav/AuthNav.styled';


export const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

    return (
        <nav>
          <LinkEl className={css.link} to="/">
            Home
          </LinkEl>
          {isLoggedIn && (
            <LinkEl className={css.link} to="/contacts">
              Contacts
            </LinkEl>
          )}
        </nav>
      );
}