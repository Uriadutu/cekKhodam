import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chek from "./Components/Chek";
import Add from "./Components/Add";
import KhodamList from "./Components/ListKodam.";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chek />} />
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<KhodamList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
