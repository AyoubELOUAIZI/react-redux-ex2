import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>My Redux App</h1>
          <Counter />
        </div>
      </header>
    </div>
  );
}

export default App;
