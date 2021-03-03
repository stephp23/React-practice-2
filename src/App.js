import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./screens/Landing";
import Cats from "./services/Cat_API";
import Dogs from "./services/Dog_API";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/dogs" exact component={Dogs} />
          <Route path="/cats" exact component={Cats} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
