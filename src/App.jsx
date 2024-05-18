import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Header } from './components/default/Header';
import { HomePage } from './components/routes/HomePage';
import ErrorPage from './components/routes/ErrorPage';
import { ItemPage } from './components/routes/ItemPage'
import { ShopItem } from './components/main/ShopItem';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "item/:itemId",
          element: <ItemPage />,
        },
      ],
    },
  ]);

  return (
    <div className="App" id='App'>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
