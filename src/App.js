import React from "react";
import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes/Routes';
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import { Provider } from "react-redux";
import store from "./store";
import Modal from "./components/Modal/Modal.js"


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Modal />
          <Routes />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;