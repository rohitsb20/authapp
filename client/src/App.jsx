import { BrowserRouter, Routes ,Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import Signout from "./pages/Signout";
import Header from "./components/Header";

function App() {
 

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signout" element={<Signout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
