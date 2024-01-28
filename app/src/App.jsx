import "./Css/main.css"
import {useSelector} from "react-redux"
import Loading from "./Components/Loading/Loading";
import Main from "./Components/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pending from "./Components/Main/subComponents/Pending/Pending";
import Projet from "./Components/Main/subComponents/Project/Projet";
import Profil from "./Components/Main/subComponents/Profil/Profil";
import Contact from "./Components/Main/subComponents/Contact/Contact";

function App() {


  const onLoad = useSelector(store => store.loading.onLoad)
  

  return (
    <div className="app">
      {onLoad && <Loading />}
      {!onLoad && (
        <Router>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route index element={<Pending />} />
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
