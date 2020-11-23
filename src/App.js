import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import GitHubCard from './components/GitHubCard/GitHubCard';
import Counter from './components/Counter/Counter';
import Form from './components/Form/Form';
import FormTest from './components/FormTest/FormTest';

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
            <li><Link className='NavigationLink' to='/githubcard'>GitHubCard</Link></li>
            <li><Link className='NavigationLink' to='/counter'>Counter</Link></li>
            <li><Link className='NavigationLink' exact to='/form'>Form</Link></li>
            <li><Link className='NavigationLink' exact to='/formtest'>FormTest</Link></li>
            <li><Link className='NavigationLink' exact to='/'>Home</Link></li>
          </ul>
        </nav>

        <Switch>
      
          <Route path='/githubcard'>
            <GitHubCard/>
          </Route>
      
          <Route path='/counter'>
            <Counter/>
          </Route>

          <Route path='/formtest'>
            <FormTest/>
          </Route>

          <Route path='/form'>
            <Form/>
          </Route>
      
        </Switch>
        
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
