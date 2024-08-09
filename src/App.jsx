import './App.css'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { HomePage } from './components/routes/HomePage';
import ErrorPage from './components/routes/ErrorPage';
import { ItemPage } from './components/routes/ItemPage'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<HomePage />}> 
        <Route index element={<HomePage />} />
        <Route path='error-404' errorElement={<ErrorPage />} />
        <Route path='itemPage' element={<ItemPage />} />
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