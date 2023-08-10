import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getLogout } from "../actions/authActions";
import { slide as Menu } from "react-burger-menu";
import { useTranslation } from "react-i18next";
import TextDisplay from "./TextDisplay";
import { isMobile } from "react-device-detect";
import "../styles/Menu.css";
import { setLanguage } from "../store/mainSlice";
import { useState } from "react";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation()
  console.log(location)
  const { t, i18n } = useTranslation();
  const user = useAppSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(getLogout());
    navigate("/login");
  };

  const changeLanguageHandler = (e) => {
    const lng = e.target.value;
    const direction = lng === "he" ? "rtl" : "ltr";
    dispatch(setLanguage({ lng: lng, direction: direction }));
    i18n.changeLanguage(lng);
  };
  return (
    <header>
      <div className="nav">
        <Link className="title" to="/">
          <TextDisplay text={"Gita Therapy"} />
        </Link>
        {user && (
          <div className="nav-right">
                {!isMobile && (
              <>
                <button style={location.pathname==="/"?{ color:'rgb(161, 74, 89)'}:{}} className="header-item" onClick={()=>navigate("/")}>{t('home')}</button>
                <button style={location.pathname==="/videos"?{ color:'rgb(161, 74, 89)'}:{}} className="header-item" onClick={()=>navigate("/videos")}>{t("videos")}</button>
                <button  className="header-item" onClick={(e) => handleLogout(e)}>{t("logout")}</button>
              </>
            )}
         
        
            {isMobile && (
              <Menu
                slide
                right
                width={"30%"}
                isOpen={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
              >
                <a
                  id="home"
                  className="menu-item"
                  onClick={() => {
                    setOpen(() => false);
                    navigate("/");
                  }}
                >
                  {t("home")}
                </a>
                <a
                  id="events"
                  className="menu-item"
                  onClick={() => {
                    setOpen(() => false);
                    navigate("/events");
                  }}
                >
                  {t("events and responses")}
                </a>
                <a
                  id="logout"
                  className="logout"
                  href="/login"
                  onClick={(e) => handleLogout(e)}
                >
                  {t("logout")}
                </a>
              </Menu>
            )}
          </div>
        )}
           <select className="custom-select" onChange={changeLanguageHandler}>
              <option value="en">English</option>
              <option value="he">עברית</option>
            </select>
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
