import doctorIcon from "assets/images/icons/doctor-icon.png";
import privateIcon from "assets/images/icons/private-network.png";
import millionIcon from "assets/images/icons/million.png";
import chatSupport from "assets/images/icons/chat-support.png";
const TrustUs = () => {
  return (
    <>
      <section className="trust-us-section section-mrg-bottom">
        <div className="container-docta">
          <div className="heading-wrapper div-align ">
            <h2>Why should trust us ?</h2>
            <h3>Get Know Abouse us</h3>
          </div>
          <div className="boxes-wrapper">
            {/* box */}
            <div className="row">
              <div className="col-md-6 col-lg-3 bx-col d-flex">
                <div className="boxes">
                  <div className="logo-wrapper div-align">
                    <img src={doctorIcon} alt="icon" />
                  </div>
                  <div className="details-wrapper">
                    <h3>All Specialist</h3>
                    <p>
                      You can reach out to 3500+ doctors from 80+ specialties,
                      who are experienced in telemedicine.
                    </p>
                  </div>
                </div>
              </div>
              {/* end col */}
              <div className="col-md-6 col-lg-3 bx-col d-flex">
                {/* box */}
                <div className="boxes">
                  <div className="logo-wrapper div-align">
                    <img src={privateIcon} alt="icon" />
                  </div>
                  <div className="details-wrapper">
                    <h3>Private & Secure</h3>
                    <p>
                      All your data is protected ans safegurded with sucured
                      SSL. data at rest enctyption.
                    </p>
                  </div>
                </div>
              </div>
              {/* end col */}
              <div className="col-md-6 col-lg-3 bx-col d-flex">
                {/* box */}
                <div className="boxes">
                  <div className="logo-wrapper div-align">
                    <img src={millionIcon} alt="icon" />
                  </div>
                  <div className="details-wrapper">
                    <h3>Million Customers</h3>
                    <p>
                      Trusted by millions and serving users worldwide. Users
                      from 196 countries and counting.
                    </p>
                  </div>
                </div>
              </div>
              {/* end col */}

              <div className="col-md-6 col-lg-3 bx-col d-flex">
                {/* box */}
                <div className="boxes">
                  <div className="logo-wrapper div-align">
                    <img src={chatSupport} alt="icon" />
                  </div>
                  <div className="details-wrapper">
                    <h3>Chatbot support</h3>
                    <p>
                      Get access to Docta via chat bots for a fantastic
                      telehealth service.
                      <p>
                        Contect via <strong>telegram</strong>
                      </p>
                    </p>
                  </div>
                </div>
              </div>
              {/* end col */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustUs;
