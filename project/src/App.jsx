import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <main>
        <div class="card">
          <div class="card__image">
            <img src="" alt="card image" />
          </div>
          <div class="card__content">
            <div class="card__content--title">
              <h1>FAQ</h1>
            </div>
            <div class="collapse">
              <div class="collapse__button">
                <button>How many team members can I invite?</button>
              </div>
              <div class="collapse__body">
                <p>
                  You can invite up to 2 additional users on the Free plan.
                  There is no limit on team members for the Premium plan.
                </p>
              </div>
            </div>
            <div class="collapse">
              <div class="collapse__button">
                <button>What is the maximum file upload size?</button>
              </div>
              <div class="collapse__body">
                <p>
                  No more than 2GB. All files in your account must fit your
                  allotted storage space.
                </p>
              </div>
            </div>
            <div class="collapse">
              <div class="collapse__button">
                <button>How do I reset my password?</button>
              </div>
              <div class="collapse__body">
                <p>
                  Click “Forgot password” from the login page or “Change
                  password” from your profile page. A reset link will be emailed
                  to you.
                </p>
              </div>
            </div>
            <div class="collapse">
              <div class="collapse__button">
                <button>Can I cancel my subscription?</button>
              </div>
              <div class="collapse__body">
                <p>
                  Yes! Send us a message and we’ll process your request no
                  questions asked.
                </p>
              </div>
            </div>
            <div class="collapse">
              <div class="collapse__button">
                <button>Do you provide additional support?</button>
              </div>
              <div class="collapse__body">
                <p>
                  Chat and email support is available 24/7. Phone lines are open
                  during normal business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
