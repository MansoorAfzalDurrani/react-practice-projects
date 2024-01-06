import Popup from "./components/Popup";
import { useState, useEffect } from "react";
function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 3000);
  }, []);
  return (
    <div className="App">
      <main>
        <h1> React PopUps</h1>
        <br />
        <button onClick={() => setButtonPopup(true)}> Open Popup</button>
      </main>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3> My popup</h3>
        <br />
        <p>this is my button triggered popup</p>
      </Popup>

      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h3> My Timed popup</h3>
        <br />
        <p>this is my time triggered popup</p>
      </Popup>
    </div>
  );
}

export default App;
