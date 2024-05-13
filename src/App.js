import './App.css';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <body className="App-body">
        <HomePage></HomePage>
      </body>
      <footer className='App-footer'>

      </footer>
    </div>
  );
}

export default App;
