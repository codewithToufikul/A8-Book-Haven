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
import ListBooks from './Component/ListBooks/ListBooks';
import ReadBook from './Component/ReadBook/ReadBook';
import Wishlist from './Component/Wishlist/Wishlist';
import PageToRead from './Component/PageToRead/PageToRead';
import TopRate from './Component/TopRate/TopRate';
import About from './Component/About/About';

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
      },
      {
        path: "/listed-book",
        element: <ListBooks/>,
        children:[
          {
            index: true,
            element: <ReadBook></ReadBook>
          },
          {
            path: 'wishlist',
            element: <Wishlist></Wishlist>,
          }
        ]
      },
      {
        path: "/pages-to-read",
        element: <PageToRead></PageToRead>,
      },
      {
        path: "/top-rate",
        element: <TopRate></TopRate>,
        loader: () => fetch('/bookData.json'),
      },
      {
        path: "/about",
        element: <About></About>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
