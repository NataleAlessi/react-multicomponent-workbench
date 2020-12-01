import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import GitHubCard from './components/GitHubCard/GitHubCard';
import Counter from './components/Counter/Counter';
import Form from './components/Form/Form';
import FormTest from './components/FormTest/FormTest';
import ClassTest from './components/ClassTest/ClassTest';
import Rubrik from './components/Rubrik/Rubrik';
import TicTacToe from './components/TicTacToe/TicTacToe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-badge">
         React Workbench
        </p>
      </header>

      <div className='Container'>
      <BrowserRouter>

        <nav className='Navigation'>
          <ul>
            <li><Link className='NavigationLink' exact to='/GitHubCard'>GitHubCard</Link></li>
            <li><Link className='NavigationLink' exact to='/Counter'>Counter</Link></li>
            <li><Link className='NavigationLink' exact to='/Form'>Form</Link></li>
            <li><Link className='NavigationLink' exact to='/FormTest'>FormTest</Link></li>
            <li><Link className='NavigationLink' exact to='/ClassTest'>ClassTest</Link></li>
            <li><Link className='NavigationLink' exact to='/Rubrik'>Rubrik</Link></li>
            <li><Link className='NavigationLink' exact to='/TicTacToe'>TicTacToe</Link></li>
            <li><Link className='NavigationLink' exact to='/'>Home</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path='/GitHubCard'><GitHubCard/>
          </Route>
          <Route path='/Counter'><Counter/>
          </Route>
          <Route path='/Form'><Form/>
          </Route>
          <Route path='/FormTest'><FormTest/>
          </Route>
          <Route path='/ClassTest'><ClassTest/>
          </Route>
          <Route path='/Rubrik'><Rubrik/>
          </Route>
          <Route path='/TicTacToe'><TicTacToe/>
          </Route>
          <Route path='/'>
            <img src={logo} className="App-center-logo" alt="logo" />
          </Route>
        </Switch>

      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
