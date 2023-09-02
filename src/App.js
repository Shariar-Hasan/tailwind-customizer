import { Route, Routes } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Customize from "./Pages/Customize";
import { Toaster } from "react-hot-toast";
import NoPageFound from "./Pages/NoPageFound";

function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/customize/" element={<Customize />} />
        <Route path="/customize/:element" element={<Customize />} />
        <Route path="/*" element={<NoPageFound />} />
      </Routes>
    </div>
  );
}

export default App;
