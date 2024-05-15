import '../App.css';
import { GearCarousel } from '../components/main/GearCarousel';
import { Header } from '../components/default/Header';
import { HomePage } from '../components/main/HomePage';
import { MotoCarousel } from '../components/main/MotoCarousel';

function App() {
  return (
    <div className="App" id='App'>
      <header className="App-header">
        <Header></Header>
      </header>
      <main className="App-body">
        <HomePage></HomePage>
        <MotoCarousel></MotoCarousel>
        <GearCarousel></GearCarousel>
      </main>
      <footer className='App-footer'>
      </footer>
    </div>
  );
}

export default App;
