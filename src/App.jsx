import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Header } from './components/default/Header';
import { HomePage } from './components/routes/HomePage';
import ErrorPage from './components/routes/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />
    },
  ]);

  return (
    <div className="App" id='App'>
      <header className="App-header">
        <Header />
      </header>
      <main className="App-body">
        <RouterProvider router={router} />
      </main>
      <footer className='App-footer'>
      </footer>
    </div>
  )
}

export default App
