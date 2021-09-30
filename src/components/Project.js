import { Link, NavLink } from "react-router-dom";
import doctor from "../images/doctor.png";
import doctor2 from "../images/doctor2.png";
//chat
import person1 from "../images/man1.jpg";

import doctorDp from "../images/doctor-dp.png";
//article section
import patient1 from "../images/patient1.jfif";
import drMask from "../images/dr-mask.jfif";
import drTest from "../images/dr-test.jfif";
import drDp1 from "../images/dr-dp2.jfif";
import drDp2 from "../images/doctor-dp.png";

//icon footer
import googlePlay from "../images/google-olay-icon.png";
import appleIcon from "../images/apple-icon.png";
import onlineDot from "../images/online-dot.png";
const Project = () => {
  return (
    <>
      <div className="project-container">
        {/* header ////////////////// */}
        <div className="header-dashboard-wrapper">
          <header className="header">
            <div className="menu-wrapper">
              <div className="logo-wrapper">
                <div>
                  <p className="logo-name">Docta</p>
                  <span>Consulation</span>
                </div>
              </div>

              <div className="menubar">
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
                  <p>Call Now</p>
                </div>
                <div className="login-btn-wrapper">
                  <button className="loginBtn btnsecond btns"> Login</button>
                </div>
              </div>
            </div>
          </header>
          {/* section 1 dashboard */}
          {/* /////////////////////////////////////////////// */}

          <section className="dashboard-section">
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
            <div className="dr-image-wrapper">
              {/* style={{ backgroundImage: `url(${doctor})` }} */}
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
            </div>
          </section>
        </div>
        {/* section 2 why  trust us */}
        {/* /////////////////////////////////////////////// */}

        <section className="trust-us-section">
          <div className="heading-wrapper div-align ">
            <h2>Why should trust us ?</h2>
            <h3>Get Know Abouse us</h3>
          </div>
          <div className="boxes-wrapper">
            {/* box */}
            <div className="boxes">
              <div className="logo-wrapper div-align">
                <span> icon</span>
              </div>
              <div className="details-wrapper">
                <h3>All Specialist</h3>
                <p>
                  You can reach out to 3500+ doctors from 80+ specialties, who
                  are experienced in telemedicine.
                </p>
              </div>
            </div>

            {/* box */}
            <div className="boxes">
              <div className="logo-wrapper div-align">
                <span> icon</span>
              </div>
              <div className="details-wrapper">
                <h3>Private & Secure</h3>
                <p>
                  All your data is protected ans safegurded with sucured SSL.
                  data at rest enctyption.
                </p>
              </div>
            </div>

            {/* box */}
            <div className="boxes">
              <div className="logo-wrapper div-align">
                <span> icon</span>
              </div>
              <div className="details-wrapper">
                <h3>Million Customers</h3>
                <p>
                  Trusted by millions and serving users worldwide. Users from
                  196 countries and counting.
                </p>
              </div>
            </div>

            {/* box */}
            <div className="boxes">
              <div className="logo-wrapper div-align">
                <span> icon</span>
              </div>
              <div className="details-wrapper">
                <h3>Chatbot support</h3>
                <p>
                  Get access to Docta via chat bots for a fantastic telehealth
                  service.
                  <p>
                    Contect via <strong>telegram</strong>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* start online chat section */}
        <section className="start-online-chat-section">
          <div className="img-chat-wrapper ">
            <div className="img-wrapper">
              <img src={doctor2} alt="dr" />
            </div>
            <div className="chat-wrapper">
              <div className="chat">
                <div className="dp-wrapper dp-wrapper-all">
                  <img src={person1} alt="img" />
                </div>
                <div className="chat-text">
                  <p> Hello! I'm suffring from fever since 2 days</p>
                </div>
              </div>
              {/* ///// */}
              <div className="chat dr-chat">
                <div className="dp-wrapper dp-wrapper-all">
                  <img src={doctorDp} alt="img" />
                </div>
                <div className="chat-text">
                  <p> Okay, no worries let me know how you get fiver?</p>
                </div>
              </div>
              {/* ///// */}
              <div className="chat">
                <div className="dp-wrapper dp-wrapper-all">
                  <img src={person1} alt="img" />
                </div>
                <div className="chat-text">
                  <p>
                    i was out of my house. And suddenly rain started and i got
                    wet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="consult-doctor-details-wrapper">
            <div className="about-online-chat-wrapper">
              <h2> Start an online chat consulation with a doctor.</h2>
              <p>
                Post unlimited follow-ups to the doctor for the next 50 or 100
                hourse by picking one of our
                <strong> #cliniq50hrs </strong> or{" "}
                <strong> #cliniq100hrs </strong> chat services. easily
                accessible comprehensive Online consulation app available both
                in Android and iOS.
              </p>
            </div>
            {/* for checkbox and icon  */}
            <div className="input-action-wrapper">
              <div className="checkbox-and-icon-wrapper">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="customRadio"
                    name="example1"
                    value="customEx"
                  />
                </div>
                <label
                  className="custom-control-label label-wrapper"
                  for="customRadio"
                >
                  <div className="icon-and-title-wrapper">
                    <div className="icon-wrapper">
                      <span>
                        <i className="bi bi-patch-question"></i>
                      </span>
                    </div>
                    <div className="">
                      <span> Query</span>
                    </div>
                  </div>
                </label>
              </div>
              {/* second  */}
              <div className="checkbox-and-icon-wrapper">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="chat"
                    name="example1"
                    value="customEx"
                    defaultChecked
                  />
                </div>
                <label
                  className="custom-control-label label-wrapper"
                  for="chat"
                >
                  <div className="icon-and-title-wrapper">
                    <div className="icon-wrapper">
                      <span>
                        <i className="bi bi-chat-dots"></i>
                      </span>
                    </div>
                    <div className="">
                      <span> Chat</span>
                    </div>
                  </div>
                </label>
              </div>

              {/* third  */}
              <div className="checkbox-and-icon-wrapper">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="phone"
                    name="example1"
                    value="customEx"
                  />
                </div>
                <label
                  className="custom-control-label label-wrapper"
                  for="phone"
                >
                  <div className="icon-and-title-wrapper">
                    <div className="icon-wrapper">
                      <span>
                        <i className="bi bi-telephone-fill"></i>
                      </span>
                    </div>
                    <div className="">
                      <span> Phone</span>
                    </div>
                  </div>
                </label>
              </div>

              {/* fourth */}
              <div className="checkbox-and-icon-wrapper">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="video"
                    name="example1"
                    value="customEx"
                  />
                </div>
                <label class="custom-control-label label-wrapper" for="video">
                  <div className="icon-and-title-wrapper">
                    <div className="icon-wrapper">
                      <span>
                        <i class="bi bi-camera-video-fill"></i>
                      </span>
                    </div>
                    <div className="">
                      <span> Video</span>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            {/* button  */}

            <div className="start-chat-consult-btn-wraper">
              <button className="mybtn btns">Start Chat Consulation</button>
            </div>
          </div>
        </section>
        {/* our consulting  specialist section*/}
        <section className="consulting-specialist-section padding-t-b">
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
            <div className="boxes-sm">
              <div className="icon-wrapper">
                <span>
                  <i class="bi bi-asterisk"></i>
                </span>
              </div>
              <div className="icon-text-wrapper">
                <h5>Dermatology</h5>
              </div>
            </div>
            {/* boxes  */}
            <div className="boxes-sm">
              <div className="icon-wrapper">
                <span>
                  <i class="bi bi-bag-plus"></i>
                </span>
              </div>
              <div className="icon-text-wrapper">
                <h5>Internal Medicine</h5>
              </div>
            </div>
            {/* boxes  */}
            <div className="boxes-sm">
              <div className="icon-wrapper">
                <span>
                  <i class="bi bi-binoculars-fill"></i>
                </span>
              </div>
              <div className="icon-text-wrapper">
                <h5>Neurology</h5>
              </div>
            </div>
            {/* boxes  */}
            <div className="boxes-sm">
              <div className="icon-wrapper">
                <span>
                  <i class="bi bi-box"></i>
                </span>
              </div>
              <div className="icon-text-wrapper">
                <h5>General Medicine</h5>
              </div>
            </div>
            {/* boxes  */}
            <div className="boxes-sm">
              <div className="icon-wrapper">
                <span>
                  <i class="bi bi-bricks"></i>
                </span>
              </div>
              <div className="icon-text-wrapper">
                <h5>Dentisty</h5>
              </div>
            </div>
            {/* boxes  */}
            <div className="boxes-sm">
              <div className="icon-wrapper">
                <span>
                  <i class="bi bi-compass-fill"></i>
                </span>
              </div>
              <div className="icon-text-wrapper">
                <h5>Otolaryngology</h5>
              </div>
            </div>
            {/* boxes  */}
            <div className="boxes-sm">
              <div className="icon-wrapper">
                <span>
                  <i class="bi bi-egg-fill"></i>
                </span>
              </div>
              <div className="icon-text-wrapper">
                <h5>Hiv/Aids</h5>
              </div>
            </div>

            <div className="boxes-sm">
              <div className="icon-wrapper">
                <span>
                  <i class="bi bi-exclamation-square"></i>
                </span>
              </div>
              <div className="icon-text-wrapper">
                <h5>Urology</h5>
              </div>
            </div>
            {/* boxes  */}
            <div className="boxes-sm">
              <div className="icon-wrapper">
                <span>
                  <i class="bi bi-file-earmark-zip-fill"></i>
                </span>
              </div>
              <div className="icon-text-wrapper">
                <h5>Allergy</h5>
              </div>
            </div>
            {/* boxes  */}
            <div className="boxes-sm">
              <div className="icon-wrapper">
                <span>
                  <i class="bi bi-file-ppt-fill"></i>
                </span>
              </div>
              <div className="icon-text-wrapper">
                <h5>Piediatric</h5>
              </div>
            </div>
            {/* boxes  */}
            <div className="boxes-sm">
              <div className="icon-wrapper">
                <span>
                  <i class="bi bi-peace"></i>
                </span>
              </div>
              <div className="icon-text-wrapper">
                <h5>Gastroenterology</h5>
              </div>
            </div>
            {/* boxes  */}
            <div className="boxes-sm">
              <div className="icon-wrapper">
                <span>
                  <i class="bi bi-pie-chart-fill"></i>
                </span>
              </div>
              <div className="icon-text-wrapper">
                <h5>Infectous Disease</h5>
              </div>
            </div>

            {/* boxes  */}
          </div>
        </section>

        {/* our recent articles  */}

        <section className="our-recent-articles-section">
          <div className="about-text-wrapper about-text-wrapper-all">
            <h2>Our recent Articles </h2>
            <p>
              Artilce is a part or segment of something joined to other parts,
              or, in combination, forming a structured set.
            </p>
          </div>
          {/* articles content */}
          <div className="articles-wrapper">
            {/* article box for wrapping  */}
            <div className="article-box">
              <div
                className="article-img"
                style={{
                  backgroundImage: `url(${patient1})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div>
                  <button className="all-type-dr color-white bg-grey">
                    Health
                  </button>
                </div>
                {/* total records */}
                <div className="articles-records-wrapper">
                  <div className="date-wrapper">
                    <span>
                      {" "}
                      <i class="bi bi-calendar-date-fill"></i>
                    </span>
                    <span>15 June</span>
                  </div>
                  <div className="comment-wrapper">
                    <span>
                      {" "}
                      <i class="bi bi-chat-dots"></i>
                    </span>
                    <span>54</span>
                  </div>
                  <div className="views-wrapper">
                    <span>
                      {" "}
                      <i class="bi bi-eye-fill"></i>
                    </span>
                    <span>1.9K</span>
                  </div>
                </div>
              </div>

              {/* text for the articles */}
              <div className="article-texts-wrapper">
                <h4> How to decrease the level of adipose in the body</h4>
                <p>
                  Serum of blood creatinine gives an idea renal health. Creatine
                  phosphat is made with three diffrent types of amino acids such
                  as arginine, glycine, and methionine.
                </p>
              </div>
              {/* doctor names*/}
              <div className="doctor-details-wrapper">
                <div className="about-doctor-wrapper">
                  {/* dp */}
                  <div className="doctor-dp-wrapper dp-wrapper-all">
                    <img src={doctor2} alt="img" />
                  </div>
                  {/* NAME AND position */}
                  <div className="doctor-name-position">
                    <h6>Dr. Mehrab</h6>
                    <span>Health & Food</span>
                  </div>
                </div>

                <div className="three-dots-menu">
                  <button className="btns">
                    <i class="bi bi-three-dots-vertical"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* article box for wrapping  */}
            <div className="article-box">
              <div
                className="article-img"
                style={{
                  backgroundImage: `url(${drMask})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div>
                  <button className="all-type-dr color-white bg-grey">
                    Infectous
                  </button>
                </div>
                {/* total records */}
                <div className="articles-records-wrapper">
                  <div className="date-wrapper">
                    <span>
                      {" "}
                      <i class="bi bi-calendar-date-fill"></i>
                    </span>
                    <span>15 June</span>
                  </div>
                  <div className="comment-wrapper">
                    <span>
                      {" "}
                      <i class="bi bi-chat-dots"></i>
                    </span>
                    <span>54</span>
                  </div>
                  <div className="views-wrapper">
                    <span>
                      {" "}
                      <i class="bi bi-eye-fill"></i>
                    </span>
                    <span>1.9K</span>
                  </div>
                </div>
              </div>
              {/* text for the articles */}
              <div className="article-texts-wrapper">
                <h4>COVID-19 vaccines and people with cronic contidion</h4>
                <p>
                  COVID-19 Vaccines is one of the highest priorities in this
                  current Pandemic Situaction. all the countries arround the
                  world are rolling out COVID-19 vaccines. the currently
                  available COVID-19 vaccines.
                </p>
              </div>
              {/* doctor names*/}
              <div className="doctor-details-wrapper">
                <div className="about-doctor-wrapper">
                  {/* dp */}
                  <div className="doctor-dp-wrapper dp-wrapper-all">
                    <img src={drDp1} alt="img" />
                  </div>
                  {/* NAME AND position */}
                  <div className="doctor-name-position">
                    <h6>Dr. Muhammad Ibrahim </h6>
                    <span>Neurologist</span>
                  </div>
                </div>

                <div className="three-dots-menu">
                  <button className="btns">
                    <i class="bi bi-three-dots-vertical"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* article box for wrapping  */}
            <div className="article-box">
              <div
                className="article-img"
                style={{
                  backgroundImage: `url(${drTest})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div>
                  <button className="all-type-dr color-red  bg-grey">
                    Neurology
                  </button>
                </div>
                {/* total records */}
                <div className="articles-records-wrapper">
                  <div className="date-wrapper">
                    <span>
                      {" "}
                      <i class="bi bi-calendar-date-fill"></i>
                    </span>
                    <span>15 June</span>
                  </div>
                  <div className="comment-wrapper">
                    <span>
                      {" "}
                      <i class="bi bi-chat-dots"></i>
                    </span>
                    <span>54</span>
                  </div>
                  <div className="views-wrapper">
                    <span>
                      {" "}
                      <i class="bi bi-eye-fill"></i>
                    </span>
                    <span>1.9K</span>
                  </div>
                </div>
              </div>
              {/* text for the articles */}
              <div className="article-texts-wrapper">
                <h4>
                  {" "}
                  Current Staet of Disparities in Neuroligy and Neurologic
                  Training
                </h4>
                <p>
                  Medical School taught us ask "men, women, of both?", but then
                  we become Neurology residents.. now what? Scrolling through
                  the lenghty list of this year's presentations of the american
                  Academy.
                </p>
              </div>
              {/* doctor names*/}
              <div className="doctor-details-wrapper">
                <div className="about-doctor-wrapper">
                  {/* dp */}
                  <div className="doctor-dp-wrapper dp-wrapper-all">
                    <img src={drDp2} alt="" />
                  </div>
                  {/* NAME AND position */}
                  <div className="doctor-name-position">
                    <h6>Dr. Billal</h6>
                    <span>Nureologist</span>
                  </div>
                </div>

                <div className="three-dots-menu">
                  <button className="btns">
                    <i class="bi bi-three-dots-vertical"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* buttons for more articles */}
            <div className="read-more-articles-wrapper about-text-wrapper-all mt-5">
              <button className="mybtn btnBase btns">Read More Articles</button>
            </div>
          </div>
        </section>
      </div>

      {/* ask question section  */}
      <section className="asked-question-section">
        <div className="about-text-wrapper about-text-wrapper-all">
          <h2>Frequently Asked Questions </h2>
          <p>
            Artilce is a part or segment of something joined to other parts, or,
            in combination, forming a structured set.
          </p>
        </div>
      </section>

      {/* footer section last */}
      <footer className="footer">
        {/* about website logo heading */}
        <div className="about-webpage-wrapper">
          <div className="logo-img-wrapper"></div>
          <div className="text-wrapper">
            <p>
              Talk with a doctor using our highly secured end-to-end encrypted.
            </p>
          </div>
          {/* button for apps store */}
          <div className="app-store-wrapper">
            <NavLink to="">
              <div className="apps-btn-wrapper applelogo">
                <div className="social-icon-wrapper">
                  {/*   googlePlay*/}
                  <span>
                    <img src={appleIcon} alt="google-icon" />
                  </span>
                </div>
                <div className="social-name-wrapper">
                  <span className="small-tex">Download on the</span>
                  <span className="app">Apple Store</span>
                </div>
              </div>
            </NavLink>
            {/* google play */}
            <NavLink to="">
              <div className="apps-btn-wrapper google-playlogo">
                <div className="social-icon-wrapper">
                  {/*   googlePlay*/}
                  <span>
                    <img src={googlePlay} alt="google-icon" />
                  </span>
                </div>
                <div className="social-name-wrapper">
                  <span className="small-tex">Get it from</span>
                  <span className="app">Google Play</span>
                </div>
              </div>
            </NavLink>
          </div>
         
        </div>
               {/* other links */}

               <div className="contact-wrapper">
                      <ul>
                        <li><NavLink to="">Ask a doctor online</NavLink></li>
                        <li><NavLink to="">Chat with a doctor </NavLink></li>
                        <li><NavLink to=""> Phone a doctor </NavLink></li>
                        <li><NavLink to=""> Video consulation</NavLink></li>
                        <li><NavLink to="">Online COVID-19 care </NavLink></li>
                        <li><NavLink to=""> Site map </NavLink></li>
                        <li><NavLink to="">Physician directory </NavLink></li>
                        <li><NavLink to="">Book a lab test </NavLink></li>
                        <li><NavLink to="">MRI/CT scan </NavLink></li>
                        <li><NavLink to=""> Articles </NavLink></li>
                        <li><NavLink to="">Answers </NavLink></li>
                      </ul>
               </div>

               <div className="important-wrapper">
                    <ul>
                      <li> <NavLink to=""> Tools </NavLink></li>
                      <li> <NavLink to=""> FAQ </NavLink></li>
                      <li> <NavLink to=""> Blogs </NavLink></li>
                      <li> <NavLink to=""> Careers </NavLink></li>
                      <li> <NavLink to=""> Abous us </NavLink></li>
                      <li> <NavLink to=""> Terms </NavLink></li>
                      <li> <NavLink to=""> Privacy </NavLink></li>
                      <li> <NavLink to=""> Ads policy </NavLink></li>
                      <li> <NavLink to=""> Press </NavLink></li>
                    </ul>
               </div>

               <div className="get-wrapper">
                    <ul>
                      <li> <NavLink to=""> Get docta app </NavLink></li>
                      <li> <NavLink to=""> Get API </NavLink></li>
                      <li> <NavLink to=""> Get widget </NavLink></li>
                      <li> <NavLink to=""> Medical review team </NavLink></li>
                      <li> <NavLink to=""> Symptom Checker </NavLink></li>
                      <li> <NavLink to=""> Deals & offer </NavLink></li>
                      <li> <NavLink to=""> Support </NavLink></li>
                      <li> <NavLink to=""> Help </NavLink></li>
                   
                    </ul>
               </div>

               <div className="extra-stuff-wrapper">
                    <ul>
                  
                      <li> <NavLink to=""> For empluers </NavLink></li>
                      <li> <NavLink to=""> For Telegram </NavLink></li>
                      <li> <NavLink to=""> For slack teams </NavLink></li>
                      <li> <NavLink to=""> For MS team </NavLink></li>
                      <li> <NavLink to=""> Sucess stories </NavLink></li>
                      <li> <NavLink to=""> #docta100hrs </NavLink></li>  
                      <li> <NavLink to=""> Medical cases </NavLink></li>
                      <li> <NavLink to=""> Contact </NavLink></li>  
                   
                    </ul>
               </div>

      </footer>
    </>
  );
};

export default Project;
