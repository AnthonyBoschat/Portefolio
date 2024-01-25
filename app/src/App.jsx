import "./Css/main.css"
import {useSelector} from "react-redux"
import Loading from "./Components/Loading/Loading";
import Main from "./Components/Main/Main";

function App() {


  const onLoad = useSelector(store => store.loading.onLoad)

    return(
        <div className="app">
            {onLoad && <Loading />}
            {!onLoad && <Main />}
        </div>
    )


}

export default App;
