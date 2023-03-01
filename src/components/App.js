import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from '../pages/Home'
import Project from '../pages/Project'
import Blog from '../pages/Blog'
import Footer from './Footer'
import '../spreadsheets/App.css'
import { useState, useEffect } from "react";

function App() {

  const [userName, setUserName] = useState("")
  useEffect(() => {
    setUserName(window.prompt("Please enter your name"))
  }, [])

  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home name={userName} />} />
          <Route path="/project" element={<Project />}/>
          <Route path="/blog" element={<Blog />}/>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
