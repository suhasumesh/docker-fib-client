import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import otherpage from './otherpage';
import Fib from './fib';

function App() {
  return (
    <Router>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/">Home</Link>
        <Link to="/otherpage">OtherPage</Link>
       <div>
        <Route exact path="/" component={Fib}/>
        <Route path="/otherpage" component={otherpage}/>
       </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
    </div>
          </Router>
  );
}

export default App;
