import './App.css';
import Header from './layouts/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './NofFound';


function App() {
  return (
    <Router>
    <div className="App container mx-auto ">
      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="*" component={NotFound} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
