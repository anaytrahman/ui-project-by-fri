import doctor2 from "assets/images/doctor2.png";
//chat
import person1 from "assets/images/man1.jpg";
import doctorDp from "assets/images/doctor-dp.png";
import chat from "assets/images/icons/chat.png";
import query from "assets/images/icons/query.png";
import phonecall from "assets/images/icons/phone-call.png";
import videoCall from "assets/images/icons/video-call.png";

const StartOnlineChat = () => {
  return (
    <>
      {/* start online chat section */}
      <section className="start-online-chat-section-main section-mrg-bottom">
        <div className="container-docta">
          <div className="start-online-chat-section">
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
                <p className="color-grey">
                  Post unlimited follow-ups to the doctor for the next 50 or 100
                  hourse by picking one of our
                  <strong> #cliniq50hrs </strong> or
                  <strong> #cliniq100hrs </strong> chat services. easily
                  accessible comprehensive Online consulation app available both
                  in Android and iOS.
                </p>
              </div>
              {/* for checkbox and icon  */}
              <div className="input-action-wrapper">
                <div className="checkbox-and-icon-wrapper">
                  <div>
                    <input
                      type="radio"
                      id="query"
                      value="query"
                      
                      name="select-type"
                    />
                  </div>
                  <label
                    className="custom-control-label label-wrapper"
                    htmlFor="query"
                  >
                    <div className="icon-and-title-wrapper">
                      <div className="icon-wrapper">
                        <img src={query} alt="icon" />
                      </div>
                      <div className="">
                        <span> Query</span>
                      </div>
                    </div>
                  </label>
                </div>
                {/* second  */}
                <div className="checkbox-and-icon-wrapper">
                  <div>
                    <input type="radio" id="chat" value="Chat"  name="select-type" defaultChecked/>
                  </div>
                  <label
                    className="custom-control-label label-wrapper"
                    htmlFor="chat"
                  >
                    <div className="icon-and-title-wrapper">
                      <div className="icon-wrapper">
                        <img src={chat} alt="icon" />
                      </div>
                      <div className="">
                        <span> Chat</span>
                      </div>
                    </div>
                  </label>
                </div>
                {/* third  */}
                <div className="checkbox-and-icon-wrapper">
                  <div>
                    <input
                      type="radio"
                      id="phone"
                      value="query"
                     
                      name="select-type"
                    />
                  </div>
                  <label
                    className="custom-control-label label-wrapper"
                    htmlFor="phone"
                  >
                    <div className="icon-and-title-wrapper">
                      <div className="icon-wrapper">
                        <img src={phonecall} alt="icon" />
                      </div>
                      <div className="">
                        <span> Phone</span>
                      </div>
                    </div>
                  </label>
                </div>
                {/* fourth */}
                <div className="checkbox-and-icon-wrapper">
                  <div>
                    <input type="radio" id="video" value="query"  name="select-type"/>
                  </div>
                  <label
                    className="custom-control-label label-wrapper"
                    htmlFor="video"
                  >
                    <div className="icon-and-title-wrapper">
                      <div className="icon-wrapper">
                        <img src={videoCall} alt="icon" />
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
                <button className="button btns">Start Chat Consulation</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartOnlineChat;
