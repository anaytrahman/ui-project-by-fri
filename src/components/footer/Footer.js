import { NavLink } from "react-bootstrap";
import googlePlay from "./../../images/google-olay-icon.png";
import playstore from "./../../images/playstore.png";
import appstore from "./../../images/appstore.png";
import Logo from "../shared/Logo";
import logoImg from "./../../images/hospital-logo.png";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container-docta">
          <div className="footer-inner">
            {/* about website logo heading */}
            <div className="about-webpage-wrapper">
              <div className="logo-img-wrapper">
              <div className="site-logo-container">
              <div className="logo-wrapper">
              <img src={logoImg} alt="logoHeader" />
              </div>
            </div>
              </div>
              <div className="text-wrapper">
                <p>
                  Talk with a doctor using our highly secured end-to-end
                  encrypted.
                </p>
              </div>
              {/* button for apps store */}
              <div className="app-store-wrapper">
                <NavLink to="">
                  <div className="apps-btn-wrapper applelogo">
                    <img src={appstore} alt="google-icon" />
                  </div>
                </NavLink>
                {/* google play */}
                <NavLink to="">
                  <div className="apps-btn-wrapper google-playlogo">
                    <img src={playstore} alt="google-icon" />
                  </div>
                </NavLink>
              </div>
            </div>
            {/* other links */}

            <div className="contact-wrapper">
              <ul>
                <li>
                  <NavLink to="">Ask a doctor online</NavLink>
                </li>
                <li>
                  <NavLink to="">Chat with a doctor </NavLink>
                </li>
                <li>
                  <NavLink to=""> Phone a doctor </NavLink>
                </li>
                <li>
                  <NavLink to=""> Video consulation</NavLink>
                </li>
                <li>
                  <NavLink to="">Online COVID-19 care </NavLink>
                </li>
                <li>
                  <NavLink to=""> Site map </NavLink>
                </li>
                <li>
                  <NavLink to="">Physician directory </NavLink>
                </li>
                <li>
                  <NavLink to="">Book a lab test </NavLink>
                </li>
                <li>
                  <NavLink to="">MRI/CT scan </NavLink>
                </li>
                <li>
                  <NavLink to=""> Articles </NavLink>
                </li>
                <li>
                  <NavLink to="">Answers </NavLink>
                </li>
              </ul>
            </div>

            <div className="important-wrapper">
              <ul>
                <li>
                  {" "}
                  <NavLink to=""> Tools </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to=""> FAQ </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to=""> Blogs </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to=""> Careers </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to=""> Abous us </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to=""> Terms </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to=""> Privacy </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to=""> Ads policy </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to=""> Press </NavLink>
                </li>
              </ul>
            </div>

            <div className="get-wrapper">
              <ul>
                <li>
                  {" "}
                  <NavLink to=""> Get docta app </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to=""> Get API </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to=""> Get widget </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to=""> Medical review team </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to=""> Symptom Checker </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to=""> Deals & offer </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to=""> Support </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to=""> Help </NavLink>
                </li>
              </ul>
            </div>

            <div className="extra-stuff-wrapper">
              <ul>
                <li>
                  {" "}
                  <NavLink to=""> For empluers </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to=""> For Telegram </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to=""> For slack teams </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to=""> For MS team </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to=""> Sucess stories </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to=""> #docta100hrs </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to=""> Medical cases </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to=""> Contact </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
