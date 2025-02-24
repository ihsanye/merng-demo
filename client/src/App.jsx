import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
