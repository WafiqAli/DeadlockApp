import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Heroes from "./pages/Heroes";
import Items from "./pages/Items";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="flex flex-col items-center bg-main-background">
        <div className="w-full max-w-7xl px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/heroes" element={<Heroes />} />
            <Route path="/items" element={<Items />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
