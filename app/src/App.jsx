import "./Css/main.css"
import {useSelector} from "react-redux"
import LoadingLaunch from "./Components/Loading/Launch";
import Main from "./Components/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingAnimation from "./Components/Loading/Animation";
import Projet from "./Components/Projet/Projet";
import Profil from "./Components/Profil/Profil";
import Contact from "./Components/Contact/Contact";

function App() {


  const onLoad = useSelector(store => store.loading.launch.onLoad)
  

  return (
    <div className="app">
      {onLoad && <LoadingLaunch />}
      {!onLoad && (
        <Router>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route index element={<LoadingAnimation />} />
              <Route path="/Projet" element={<Projet />}/>
              <Route path="/Profil" element={<Profil />}/>
              <Route path="/Contact" element={<Contact />}/>
            </Route>
          </Routes>
        </Router>
      )}
    </div>
  );


}

export default App;
