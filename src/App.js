import { useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null);

  const changeMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("success", "Dark Mode has been enabled.");
      // setAlert({type: "suck", msg: "Dark mode "}); // This is also right but when we have to change state we always prefer to change it via a function so that we can send it to a component as a prop for use it later.
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light Mode has been enabled.");
    }
  }

  const showAlert = (type, message)=>{
    setAlert({
      type: type,
      msg : message
    });
    document.title = "TextUtils - Alert";
    setTimeout(() => {
      setAlert(null);
      document.title = "TextUtils - Home";
    }, 1500);
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title='TextUtils' aboutText='About' mode={mode} changeMode={changeMode} />
        <Alerts alert={alert} />

        {/* <Routes>
          <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} />} />
          <Route path="/about" element={<About/>} />
        </Routes> */}
        <TextForm mode={mode} showAlert={showAlert} />
      {/* </Router> */}
    </>
  );
}

export default App;


// Bug exist on multiple clicks on any of the different buttons these lead to going of alert very fast for some time