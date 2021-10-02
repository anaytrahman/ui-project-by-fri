import dermatology from "./../../images/icons/dermatology.png";
import kidney from "./../../images/icons/kidney.png";
import brain from "./../../images/icons/brain.png";
import medicine from "./../../images/icons/medicine.png";
import tooth from "./../../images/icons/tooth.png";
import nose from "./../../images/icons/nose.png";
import hiv from "./../../images/icons/hiv.png";
import heart from "./../../images/icons/heart.png";
import allergy from "./../../images/icons/allergy.png";
import faceMask from "./../../images/icons/face-mask.png";
import stomach from "./../../images/icons/stomach.png";
import coronavirus from "./../../images/icons/coronavirus.png";
import { NavLink } from "react-bootstrap";

const ConsultingSpecialist = () => {
  return (
    <>
      <section className="consulting-specialist-section padding-t-b section-mrg-bottom">
        <div className="container-docta">
          <div className="about-text-wrapper about-text-wrapper-all">
            <h2>Our consulting specialities </h2>
            <p>
              Ask a doctor online and quick medical advice for your health
              queries. Our medical panel consists of over 3500+ doctors from 80+
              specialities.
            </p>
          </div>

          {/* boxes wrapper  */}
          <div className="small-boxes-wrapper">
            {/* boxes  */}

            <div className="boxes-sm-bx">
              <NavLink>
                <div className="boxes-sm">
                  <div className="icon-wrapper">
                    <img src={dermatology} alt="icon" />
                  </div>
                  <div className="icon-text-wrapper">
                    <h5>Internal Medicine</h5>
                  </div>
                </div>
              </NavLink>
            </div>

            {/* boxes  */}
            <div className="boxes-sm-bx">
            <NavLink>
              <div className="boxes-sm">
                <div className="icon-wrapper">
                  <img src={kidney} alt="icon" />
                </div>
                <div className="icon-text-wrapper">
                  <h5>Internal Medicine</h5>
                </div>
              </div>
              </NavLink>
            </div>
            {/* boxes  */}
            <div className="boxes-sm-bx">
            <NavLink>
              <div className="boxes-sm">
                <div className="icon-wrapper">
                  <img src={brain} alt="icon" />
                </div>
                <div className="icon-text-wrapper">
                  <h5>Neurology</h5>
                </div>
              </div>
              </NavLink>
            </div>
            {/* boxes  */}
            <div className="boxes-sm-bx">
            <NavLink>
              <div className="boxes-sm">
                <div className="icon-wrapper">
                  <img src={medicine} alt="icon" />
                </div>
                <div className="icon-text-wrapper">
                  <h5>General Medicine</h5>
                </div>
              </div>
              </NavLink>
            </div>
            {/* boxes  */}
            <div className="boxes-sm-bx">
            <NavLink>
              <div className="boxes-sm">
                <div className="icon-wrapper">
                  <img src={tooth} alt="icon" />
                </div>
                <div className="icon-text-wrapper">
                  <h5>Dentisty</h5>
                </div>
              </div>
              </NavLink>
            </div>
            {/* boxes  */}
            <div className="boxes-sm-bx">
            <NavLink>
              <div className="boxes-sm">
                <div className="icon-wrapper">
                  <img src={nose} alt="icon" />
                </div>
                <div className="icon-text-wrapper">
                  <h5>Otolaryngology</h5>
                </div>
              </div>
              </NavLink>
            </div>
            {/* boxes  */}
            <div className="boxes-sm-bx">
            <NavLink>
              <div className="boxes-sm">
                <div className="icon-wrapper">
                  <img src={hiv} alt="icon" />
                </div>
                <div className="icon-text-wrapper">
                  <h5>Hiv/Aids</h5>
                </div>
              </div>
              </NavLink>
            </div>
            <div className="boxes-sm-bx">
            <NavLink>
              <div className="boxes-sm">
                <div className="icon-wrapper">
                  <img src={heart} alt="icon" />
                </div>
                <div className="icon-text-wrapper">
                  <h5>Urology</h5>
                </div>
              </div>
              </NavLink>
            </div>
            {/* boxes  */}
            <div className="boxes-sm-bx">
            <NavLink>
              <div className="boxes-sm">
                <div className="icon-wrapper">
                  <img src={allergy} alt="icon" />
                </div>
                <div className="icon-text-wrapper">
                  <h5>Allergy</h5>
                </div>
              </div>
              </NavLink>
            </div>
            {/* boxes  */}
            <div className="boxes-sm-bx">
            <NavLink>
              <div className="boxes-sm">
                <div className="icon-wrapper">
                  <img src={faceMask} alt="icon" />
                </div>
                <div className="icon-text-wrapper">
                  <h5>Piediatric</h5>
                </div>
              </div>
              </NavLink>
            </div>
            {/* boxes  */}
            <div className="boxes-sm-bx">
            <NavLink>
              <div className="boxes-sm">
                <div className="icon-wrapper">
                  <img src={stomach} alt="icon" />
                </div>
                <div className="icon-text-wrapper">
                  <h5>Gastroenterology</h5>
                </div>
              </div>
              </NavLink>
            </div>
            {/* boxes  */}
            <div className="boxes-sm-bx">
            <NavLink>
              <div className="boxes-sm">
                <div className="icon-wrapper">
                  <img src={coronavirus} alt="icon" />
                </div>
                <div className="icon-text-wrapper">
                  <h5>Infectous Disease</h5>
                </div>
              </div>
              </NavLink>
            </div>

            {/* boxes  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ConsultingSpecialist;
