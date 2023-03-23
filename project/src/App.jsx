import "./styles/App.css";
import { useState } from "react";
import cardImage from "./assets/illustration-woman-online-mobile.svg";

function App() {
  const [collapse, setCollapse] = useState(0);
  return (
    <main>
      <div className="card">
        <div className="card__image">
          <img src={cardImage} alt="card image" />
        </div>
        <div className="card__content">
          <div className="card__content--title">
            <h1>FAQ</h1>
          </div>
          <div className="collapse">
            <div className="collapse__button">
              <button
                onClick={() =>
                  collapse === 1 ? setCollapse(0) : setCollapse(1)
                }
                className={collapse === 1 ? "active" : "disable"}
              >
                How many team members can I invite?
              </button>
            </div>
            <div
              className={`collapse__body ${
                collapse === 1 ? "visible" : "hidden"
              }`}
            >
              <p>
                You can invite up to 2 additional users on the Free plan. There
                is no limit on team members for the Premium plan.
              </p>
            </div>
          </div>
          <div className="collapse">
            <div className="collapse__button">
              <button
                onClick={() =>
                  collapse === 2 ? setCollapse(0) : setCollapse(2)
                }
                className={collapse === 2 ? "active" : "disable"}
              >
                What is the maximum file upload size?
              </button>
            </div>
            <div
              className={`collapse__body ${
                collapse === 2 ? "visible" : "hidden"
              }`}
            >
              <p>
                No more than 2GB. All files in your account must fit your
                allotted storage space.
              </p>
            </div>
          </div>
          <div className="collapse">
            <div className="collapse__button">
              <button
                onClick={() =>
                  collapse === 3 ? setCollapse(0) : setCollapse(3)
                }
                className={collapse === 3 ? "active" : "disable"}
              >
                How do I reset my password?
              </button>
            </div>
            <div
              className={`collapse__body ${
                collapse === 3 ? "visible" : "hidden"
              }`}
            >
              <p>
                Click “Forgot password” from the login page or “Change password”
                from your profile page. A reset link will be emailed to you.
              </p>
            </div>
          </div>
          <div className="collapse">
            <div className="collapse__button">
              <button
                onClick={() =>
                  collapse === 4 ? setCollapse(0) : setCollapse(4)
                }
                className={collapse === 4 ? "active" : "disable"}
              >
                Can I cancel my subscription?
              </button>
            </div>
            <div
              className={`collapse__body ${
                collapse === 4 ? "visible" : "hidden"
              }`}
            >
              <p>
                Yes! Send us a message and we’ll process your request no
                questions asked.
              </p>
            </div>
          </div>
          <div className="collapse">
            <div className="collapse__button">
              <button
                onClick={() =>
                  collapse === 5 ? setCollapse(0) : setCollapse(5)
                }
                className={collapse === 5 ? "active" : "disable"}
              >
                Do you provide additional support?
              </button>
            </div>
            <div
              className={`collapse__body ${
                collapse === 5 ? "visible" : "hidden"
              }`}
            >
              <p>
                Chat and email support is available 24/7. Phone lines are open
                during normal business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
