import logo from "./../../images/icons/logo-site.png";
import "./../../styles/logo.scss";
const Logo=()=>{
    return(
        <>
        <div className="site-logo-container">

        <div className="logo-wrapper">
            <div className="logo-icon-wrapper">
              {/* <img src={logo} alt="logo" /> */}
              
            </div>
            <div className="logo-text-wrapper"> 
                  <h5 className="docta">D<img src={logo} alt="logo" />cta</h5>
                <span>Consulation</span>
            </div>
          </div>
        </div>
        </>
    )
}

export default Logo;