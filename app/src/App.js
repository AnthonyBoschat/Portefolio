import Loading from "./Components/Initialisation/Loading";
import "./Css/main.css"
import {Provider} from "react-redux"
import store from "./Redux/store"

function App() {


  return (
    <Provider store={store}>
        <div className="app">
          <Loading/>
        </div>
    </Provider>
    
  );
}

export default App;
