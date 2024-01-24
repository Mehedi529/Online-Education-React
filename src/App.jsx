import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage/HomePage';
import Login from "./components/Login";
import Registration from "./components/Registration";
import Courses from './pages/Courses/Courses';
import Team from './pages/Team/Team';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {

  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
