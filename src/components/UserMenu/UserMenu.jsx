import { Button } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux"
import { logOut } from "redux/auth/authOperations";
import { authSelectors } from "redux/auth/authSelectors";
import css from './UserMenu.module.css';

export const UserMenu = () => {

    const dispatch = useDispatch();
    const user = useSelector(authSelectors.selectUser);

    return (
        <div className={css.wrapper}>
          <p className={css.username}>Welcome, {user.name}</p>
          <Button
            type="button"
            onClick={() => dispatch(logOut(user.name))}
            sx={{ bgcolor: deepPurple[300] }}
            variant="contained"
          >
            Logout
          </Button>
        </div>
      );
}