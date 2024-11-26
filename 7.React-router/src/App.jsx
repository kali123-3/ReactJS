import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import NavBar from "./components/NavBar.jsx";
import Images from "./components/Images.jsx";
import Analyse from "./components/analyse.jsx";
import Global from "./components/global.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
          <NavBar ></NavBar>
          <Routes>
            <Route path="/"  element={<Home />}></Route>
             <Route path="/contact/:id"  element={<Contact />}></Route>
              <Route path="/detail"  element={<Global />}>
                  <Route path="/detail/images"  element={<Images />}></Route>
                  <Route path="/detail/analyse"  element={<Analyse />}></Route>
              </Route>
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
