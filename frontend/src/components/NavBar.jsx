import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getLogout } from "../actions/authActions";
import { slide as Menu } from "react-burger-menu";
import { useTranslation } from "react-i18next";
import TextDisplay from "./TextDisplay";
import "../styles/Menu.css";
const NavBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
const {t,i18n} = useTranslation()
  const user = useAppSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(getLogout());
    navigate("/login");
  };

  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }
  return (
    <header>
      <div className="nav">
        <Link className="title" to="/">
         <TextDisplay text={'Gita Therapy'}/>
        </Link>
        {user && (
          <div className="nav-right">
           
           <select className="custom-select"  onChange={changeLanguageHandler}>
        <option value="en" >English</option>
        <option value="he" >Hebrew</option>
      </select>

            <Menu slide right width={"30%"}>
              <a id="home" className="menu-item" href="/">{t("home")}
              </a>
              <a id="events" className="menu-item" href="/events">
                Events and Responses
              </a>
              <a id="logout" className="logout" href="/login" onClick={(e)=>handleLogout(e)}>
                Log Out
              </a>
            </Menu>
          </div>
        )}
        {!user && (
          <div className="nav-right">
            <Link className="nav-login" to="/login">
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
