import React from "react";
import Header from "./components/Header/Navigation";
import Main from "./components/Main/Main";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import './App.css';

export default function App() {

{/* Importing all the child components in */}
{/* Importing the app.css file that contains the styling for components */}
{ /* Main App component - this function component is the main parent component that combines all the child components. */}

  return (
    <div className="App">
      <Header />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
}