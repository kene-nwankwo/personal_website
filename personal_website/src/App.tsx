import Navbar from './NavBar';
import "./styles.css"
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Resume from './pages/Resume';
import SoftwareProjects from './pages/SoftwareProjects';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/SoftwareProjects" element={<SoftwareProjects />} />
        </Routes>
        </div>
    </>
  )
  
}

export default App;
