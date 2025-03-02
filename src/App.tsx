import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Solutions from "./Solutions";
import Blogs from "./Blogs";
import SolutionDetails from "./SolutionDetails";

export default function App() {
  return (
    // <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<Solutions />} />
        <Route path="/solutions/:solution" element={<SolutionDetails />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
    // </div>
  );
}
