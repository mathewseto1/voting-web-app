import './App.css';
import Home from "./Pages/Home/Home";
import Vote from "./Pages/Vote/Vote";
import Summary from "./Pages/Summary/Summary";
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/stats/:code" component={Summary} />
          <Route path="/:code" component={Vote} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>

  );
}

export default App;
