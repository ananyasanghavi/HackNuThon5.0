import './App.css'
import './index.css'
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./Pages/SignUp";
import SignInPage from "./Pages/SignIn";
import Home from './Pages/Home';
import Conversion from './Pages/Conversion';
import InterviewComponent from './Components/Interview';
function App() {
 
  return (
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sign-in" element={<SignInPage />} />
    <Route path="/sign-up" element={<SignUpPage />} />
    <Route path="/conversion" element={<Conversion />} />
    <Route path="/interview" element={<InterviewComponent />} />
    </Routes>
  )
}

export default App
