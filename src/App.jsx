import './App.css'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { Header } from './components/default/Header';
import { HomePage } from './components/routes/HomePage';
import ErrorPage from './components/routes/ErrorPage';
import { ItemPage } from './components/routes/ItemPage'
import { ShopItem } from './components/main/ShopItem';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<ItemPage />}>
        <Route index element={<HomePage />} />
        <Route path='error-404' errorElement={<ErrorPage />} />
        <Route path='shopItem' element={<ShopItem />} />
      </Route>
    )
    /*[
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
      loader: rootLoader,
      children: [
        {
          path: "item/:itemId",
          element: <ShopItem />,
        },
      ],
    },
  ]*/);

  return (
    <div className="App" id='App'>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
