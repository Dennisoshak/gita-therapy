import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getLogout } from "../actions/authActions";
import { slide as Menu } from "react-burger-menu";
import "../styles/Menu.css";
const NavBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(getLogout());
    navigate("/login");
  };

  return (
    <header>
      <div className="nav">
        <Link className="title" to="/">
          Gita Therapy
        </Link>
        {user && (
          <div className="nav-right">
            <span className="user-name">{user.email}</span>
            <span className="nav-logout" onClick={handleLogout}>
              Log out
            </span>

            <Menu slide right width={"30%"}>
              <a id="home" className="menu-item" href="/">
                Home
              </a>
              <a id="workouts" className="menu-item" href="/workouts">
                Workouts
              </a>
            </Menu>
          </div>
        )}
        {!user && (
          <div className="nav-right">
            <Link className="user-name" to="/login">
              Login
            </Link>
            <Link className="nav-logout" to="/signup">
              Signup
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
