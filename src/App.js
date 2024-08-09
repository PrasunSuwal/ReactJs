// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, {useState} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";


// let name ="Prasun";
function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils -DarkMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils -LightMode';
    }
  }
  //FOR ROUTING
  return (
    <>
    <BrowserRouter>
      <Navbar
        title="TextUtils2"
        aboutText="TextAbouts"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} mode={mode} />
      <div className="container my-4" mode={mode}>
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />}>
          </Route>
          <Route
            exact path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Try TextUtils- Word Counter, Character Counter, Remove Extraspaces"
                mode={mode}
              />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </>
);
}

export default App;

//FOR ROUTING
// return (
//   <>
//     <BrowserRouter>
//       <Navbar
//         title="TextUtils2"
//         aboutText="TextAbouts"
//         mode={mode}
//         toggleMode={toggleMode}
//       />
//       <Alert alert={alert} />
//       <div className="container my-4" mode={mode}>
//         <Routes>
//           <Route exact path="/about" element={<About />}></Route>
//           <Route
//             exact path="/"
//             element={
//               <Textbox
//                 showAlert={showAlert}
//                 heading="Enter Text to analyze "
//                 mode={mode}
//               />
//             }
//           ></Route>
//         </Routes>
//       </div>
//     </BrowserRouter>
//   </>
// );
