import { NavLink } from "react-bootstrap";
import Logo from "../shared/Logo";
import logoImg from "./../../images/hospital-logo.png";
import menuBlue from "./../../images/icons/menuBlue.png";

const Header = () => {
     
  const menuHandle = (e) => {
    let menu = document.getElementById('menu');
    menu.classList.toggle('show-menu');
  };

  const loginBtnHandler=()=>{
    alert("Login btn clicked");
    
  }
  return (
    <>
      <header className="header">
        <div className="container-docta">
          <div className="menu-wrapper">
            {/* <Logo /> */}
            <div className="site-logo-container">
              <div className="logo-wrapper">
                <img src={logoImg} alt="logoHeader" />
              </div>
            </div>
            <div className="menubar" id="menu">
              <ul>
                <li>
                  <NavLink to="">Home</NavLink>
                </li>
                <li>
                  <NavLink to="">Service</NavLink>
                </li>
                <li>
                  <NavLink to="">Question & Answer</NavLink>
                </li>
                <li>
                  <NavLink to="">Consulation</NavLink>
                </li>
                <li>
                  <NavLink to="">Articles</NavLink>
                </li>
              </ul>
            </div>

            <div className="login-wrapper">
              <div className="number-wrapper">
                <span>Call Now</span>
                <span className="mb-number">(603)-555-0123</span>
                {/* <NavLink href="tel:(603)-555-0123"></NavLink> */}
              </div>
              <div className="login-btn-wrapper">
                <button onClick={loginBtnHandler} className="loginBtn btnsecond btns"> Login</button>
              </div>
              <div className="login-btn-wrapper menu-icon-hide">
                <button
                  onClick={menuHandle}
                  className="menu-show-hide-button"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
