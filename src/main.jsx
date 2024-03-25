import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Pages/Home';
import Root from './Component/Root';
import ErrorPage from './Component/ErrorPage';
import BookDetails from './Component/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails/>,
        loader: () => fetch('/bookData.json'),
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
