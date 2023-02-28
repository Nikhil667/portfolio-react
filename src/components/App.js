import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Project from '../pages/Project'
import Blog from '../pages/Blog'

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />}/>
          <Route path="/blog" element={<Blog />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
