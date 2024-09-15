import React from "react";
import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes/Routes';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import store from "./store";
import Modal from "./components/Modal/Modal"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Modal />
          <div className="main">

          <Routes />
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}
export default App;