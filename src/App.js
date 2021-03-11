import React from "react";
import "./App.css";
import Header from './components/Header/Header'
import Card from './components/Card/Card'

const App = () => {
  return <div className="App">
    <Header title="title for header"/>
    <Card/>
  </div>;
};

export default App;
