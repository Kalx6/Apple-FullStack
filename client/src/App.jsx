import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Main from "./components/Main";
import Iphone from "./components/Iphone/Iphone";
import Tv from "./components/Pages/Tv.jsx";
import Music from "./components/Pages/Music.jsx";
import Watch from "./components/Pages/Watch.jsx";
import Ipad from "./components/Pages/Ipad.jsx";
import Support from "./components/Pages/Support.jsx";
import Mac from "./components/Pages/Mac.jsx";
import SharedLayout from "./components/SharedLayout.jsx";
import Four04 from "./components/Pages/Four04.jsx";
import IphoneSingle from "./components/Pages/IphoneSingle.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/iphone/:productID" element={<IphoneSingle />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/music" element={<Music />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/support" element={<Support />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="*" element={<Four04 />} />
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
