import ControlledAccordions from "../accordion/Accordion";
import drFaq from "assets/images/dr-faq.png";
const AskedQuestion = () => {
  return (
    <>
      <section className="asked-question-section">
        <div className="container-docta">
          <div className="about-text-wrapper about-text-wrapper-all">
            <h2>Frequently Asked Questions </h2>
            <p className="color-grey">
              Artilce is a part or segment of something joined to other parts,
              or, in combination, forming a structured set.
            </p>
          </div>
          <div className="faq-img-wrapper">
            <div className="img-faq-sec cm-bx-faq">
              <div className="round-div">
                <div className="img-wrapper">
                  <img src={drFaq} alt="img" />
                </div>
              </div>
            </div>
            <div className="accordion-faq-wrapper cm-bx-faq">
              <ControlledAccordions />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AskedQuestion;
