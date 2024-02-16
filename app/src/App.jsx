import "./Css/main.css"
import {useSelector} from "react-redux"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading_Launch from "./Components/Scenes/Loading/Launch";
import Loading_Animation from "./Components/Scenes/Loading/Animation";
import Main from "./Components/Scenes/Main/Main";
import Projet from "./Components/Scenes/Projet/Projet";
import Profil from "./Components/Scenes/Profil/Profil";
import Contact from "./Components/Scenes/Contact/Contact";

function App() {


  const onLoad = useSelector(store => store.loading.launch.onLoad)
  

  return (
    <div className="app">
      {onLoad && <Loading_Launch />}
      {!onLoad && (
        <Router>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route index element={<Loading_Animation />} />
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
