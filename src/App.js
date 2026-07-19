import Home from "./pages/Home";
import Support from "./pages/Support";
import { Courses } from "./pages/Courses";
import React from "react";
import About from "./pages/About";
import LogInPage from "./pages/LogInPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Career } from "./pages/Career";
import SignUpPage from "./pages/SignUpPage";
import CoursesSyllabus from "./components/CoursesSyllabus";
import Class_9_IT from "./components/Class_9_IT";
import Class_10_IT from "./components/Class_10_IT";
import Class_11_CS from "./components/Class_11_CS";
import Class_12_CS from "./components/Class_12_CS";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}>
        </Route>
        <Route path="/Home" element={<Home></Home>}>

        </Route>
        <Route path="/Courses" element={<Courses></Courses>}>

        </Route>
        <Route path="/About" element={<About></About>}>

        </Route>
        <Route path="/Support" element={<Support></Support>}>

        </Route>
        <Route path="/Career" element={<Career></Career>}>

        </Route>
        <Route path="/LogInPage" element={<LogInPage></LogInPage>}>

        </Route>
        <Route path="/SignUpPage" element={<SignUpPage></SignUpPage>}>

        </Route>
        <Route path="/CoursesSyllabus" element={<CoursesSyllabus></CoursesSyllabus>}>

        </Route>
        <Route path="/Courses/Class_9_IT" element={<Class_9_IT></Class_9_IT>}>

        </Route>
        <Route path="/Courses/Class_10_IT" element={<Class_10_IT></Class_10_IT>}>

        </Route>

        <Route path="/Courses/Class_11_CS" element={<Class_11_CS></Class_11_CS>}>

        </Route>
        <Route path="/Courses/Class_12_CS" element={<Class_12_CS></Class_12_CS>}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;