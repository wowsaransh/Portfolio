import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Notfound } from "./pages/Notfound";
import {Home} from "./pages/Home";
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path ="*" element={<Notfound/>}/>
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;