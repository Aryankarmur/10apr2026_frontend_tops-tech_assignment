// import "./App.css";
// import Navbar from "./component/Navbar";
// import Hero from "./component/Hero";
// import Footer from "./component/Footer";
// import StudentList from './session_6/StudentList';
// import TaskList from './session_6/TaskList';
// import ToggelBtn from './session_6/ToggelBtn';
// import Useeffect from './component/Useeffect';

import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./component/ReactRouter/Navbar";
import Home from "./component/ReactRouter/pages/Home";
import About from "./component/ReactRouter/pages/About";
import Contact from "./component/ReactRouter/pages/Contact";
import Footer from "./component/ReactRouter/Footer";
// import Axios from "./component/axios/Axios.jsx";

function App() {
  return (
    <>

{/* demowork-project.netlify.app */}

      {/* <Navbar/>
      <Hero/>
      <Footer/> */}

      {/* <StudentList/>
      <TaskList/>
      <ToggelBtn/>
      <Useeffect/> */}

      {/* react router part */}
      <BrowserRouter>
      
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

      </BrowserRouter>


{/* axios */}

{/* <Axios/> */}

    </>
  );
}

export default App;
