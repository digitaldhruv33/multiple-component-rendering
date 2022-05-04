import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProjectName from './components/ProjectName';
import ProjectDescription from './components/ProjectDescription';

function App() {
  return (
    <div className="App">
      <div data-ns-test = "project-name">Full stack e-commerce web app using MERN Stack</div>
      <div data-ns-test = "project-description" >I'll build this project using React as frontend Node and Express for backend and database I'll use MongoDB</div>

      <ProjectName data-ns-test = "project-name" />
      <ProjectDescription data-ns-test = "project-description" />
      {/* <BrowserRouter>
    <Routes>
      <Route path="/project-name" element={<ProjectName />} />
      <Route path="/project-description" element={<ProjectDescription />} />
    </Routes>
  </BrowserRouter>, */}
    </div>
  );
}

export default App;
