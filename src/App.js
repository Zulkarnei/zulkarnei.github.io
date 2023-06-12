// App.js
import React from "react";
import './App.css';
import NavigationBar from "./components/NavigatioBar/NavigationBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import { useContext } from "react";
import { themeContext } from "./Context";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
export default function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>
      <NavigationBar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

