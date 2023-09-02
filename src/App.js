import { Route, Routes } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Customize from "./Pages/Customize";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/customize/" element={<Customize />} />
        <Route path="/customize/:element" element={<Customize />} />
      </Routes>
    </div>
  );
}

export default App;
