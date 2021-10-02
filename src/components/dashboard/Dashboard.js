import { Link } from "react-router-dom";
import doctor from "assets/images/doctor.png";
import onlineDot from "assets/images/online-dot.png";
import slider from "assets/images/banner.jpg";

const Dashboard=()=>{
    return(
        <>
          <section className="dashboard-section">
          <img src={slider} alt="img" />
            <div className="details-action-container">
              <div className="details-action-wrapper">
                <div>
                  <h2>
                    Consult a doctor anytime, anywhere by{" "}
                    <Link className="video-call" to="">Video call</Link>
                  </h2>
                </div>
                <div>
                  <p className="">
                    Talk with a doctor using our highly secured HIPAA complaint
                    end-to-end encrypted video call.
                  </p>
                </div>
                <div className="button-wrapper">
                  <button className="mybtn btnBase btns">
                    Ask A Doctor online
                  </button>
                  <button className="mybtn btnsecond btns">
                    Unlimited Chat
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="dr-image-wrapper">
              <div className="img-wrapper">
                <img src={doctor} alt="dr" />
              </div>
              <div className="doctors-online-box-wrapper">
                <div className="green-dot-wrapper">
                  <img src={onlineDot} alt="img" />
                </div>
                <div>
                <span>
                  <strong>2110 Doctors Online </strong>
                </span>
                </div>
              </div>
            </div> */}
          </section>
        </>
    )
}

export default Dashboard;