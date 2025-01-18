import { BrowserRouter, Routes ,Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Signup from "./pages/Signup";

function App() {
 

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
