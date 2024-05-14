import './App.css';
import { GearCarousel } from './components/GearCarousel';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { MotoCarousel } from './components/MotoCarousel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <body className="App-body">
        <HomePage></HomePage>
        <MotoCarousel></MotoCarousel>
        <GearCarousel></GearCarousel>
      </body>
      <footer className='App-footer'>

      </footer>
    </div>
  );
}

export default App;
