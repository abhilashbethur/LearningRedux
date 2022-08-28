import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const Header = () => {
  const dispatch = useDispatch();
  const logouthandler = () => {
    dispatch(authActions.logout());
  };
  const isloggedin = useSelector((state) => state.auth.loggedin);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isloggedin && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logouthandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
