import logo from './logo.svg';
import './App.css';

import GitHubCard from './components/GitHubCard/GitHubCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-badge">
          React Workbench
        </p>
      </header>

      <GitHubCard />

    </div>
  );
}

export default App;
