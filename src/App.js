//dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import pages
import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import About from "./Pages/About";
import Error from "./Pages/Error";

//import components
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Index />} />
          <Route path="/items/:id" element={<Show />} />
          <Route path="/items/new" element={<New />} />
          <Route path="/items/:id/edit" element={<Edit />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
