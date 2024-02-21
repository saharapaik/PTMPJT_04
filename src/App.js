import logo from './logo.svg';
import './App.css';
import RestAPI from "./RestAPI.js";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("없음");

  const clicked = () => {
    axios
      .get("http://127.0.0.1:8000", {
        params: {
          abc: "가나다",
        },
      })
      .then((response) => setText(JSON.stringify(response.data)));
  };


    return (
        <div className="App">
            <header className="App-header">
                <RestAPI />
            </header>
        </div>
    );

  // return (
  //   <div>
  //     <h1>{text}</h1>
  //     <button onClick={clicked}>클릭</button>
  //   </div>
  // );


  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
