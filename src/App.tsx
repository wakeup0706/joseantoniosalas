import { Routes, Route } from "react-router-dom";
import New from "./pages/new";

function App() {
  return (
    <Routes>
      <Route path="/" element={<New />} />
    </Routes>
  );
}

export default App;