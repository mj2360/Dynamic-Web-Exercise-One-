import{
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom"; 

import './App.css';
import Article from "./containers/Article";
import ArticleListing from "./containers/ArticleListing";

function App() {
  return (
     <Router>
       <Switch>
         <Route path="/article">
            <Article />
         </Route>
         {/* this is the home path, which will take you to ArticleListing path  */}
         <Route path="/">
            <ArticleListing />
         </Route>
       </Switch>
     </Router>
  );
}

export default App;
