import "./styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./screens/Landing";
import Home from "./screens/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={Footer} />
          <Route path="/shop" exact component={Landing} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
};
