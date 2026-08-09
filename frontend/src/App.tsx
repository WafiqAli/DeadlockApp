import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Heroes from "./pages/Heroes";
import Items from "./pages/Items";
import { useEffect } from "react";

function App() {
  const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_DEADLOCKAPP_BACKEND_BASE_URL,
  });

  useEffect(() => {
    const fetchDeadlockData = async () => {
      const response = await axiosClient.get("/heroes");
      console.log(response);
    };

    fetchDeadlockData();
  }, [axiosClient]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
