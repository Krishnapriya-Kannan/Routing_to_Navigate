import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Downloads from './component/Download';
import Contact from './component/Contact';
import Layout from './component/List';
function App() {
  return (
    <div className="App">
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="downloads" element={<Downloads/>} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
