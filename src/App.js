
import './App.css';
import {HashRouter,BrowserRouter,Route} from "react-router-dom"
import Home from "./Home/Home";
import Generic from "./Generic/Generic"
import Element from "./Element/Element"


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route path="/element" component={Element}/>
        <Route path="/generic" component={Generic}/>
      </div>
    </HashRouter>
  );
}

export default App;
