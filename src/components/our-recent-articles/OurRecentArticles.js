import patient1 from "assets/images/patient1.jfif";
import drMask from "assets/images/dr-mask.jfif";
import drTest from "assets/images/dr-test.jfif";
import drDp1 from "assets/images/dr-dp2.jfif";
import drDp2 from "assets/images/doctor-dp.png";
import doctor2 from "assets/images/doctor2.png";
const OurRecentArticles = () => {
  return (
    <>
      <section className="our-recent-articles-section">
        <div className="container-docta">
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
                <div className="show-menu-container">
                  <div className="three-dots-menu">
                    <button className="btns">
                      <i class="bi bi-three-dots-vertical"></i>
                    </button>
                  </div>
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
                    <h6 className="">Dr. Muhammad Ibrahim </h6>
                    <span className="">Neurologist</span>
                  </div>
                </div>
                <div className="show-menu-container">
                  <div className="three-dots-menu">
                    <button className="btns">
                      <i class="bi bi-three-dots-vertical"></i>
                    </button>
                  </div>
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
                <div className="show-menu-container">
                  <div className="three-dots-menu">
                    <button className="btns">
                      <i class="bi bi-three-dots-vertical"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* buttons for more articles */}
            <div className="read-more-articles-wrapper about-text-wrapper-all mt-5">
              <button className="button btnBase btns">Read More Articles</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default OurRecentArticles;
