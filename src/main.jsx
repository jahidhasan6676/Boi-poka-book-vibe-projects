import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './components/Root/Root';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import BookDetails from './components/bookDetails/BookDetails';
import ListedBooks from './components/ListedBooks/ListedBooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Recharts from './components/Recharts/Recharts';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/book/:bookId",
        loader: () => fetch("booksData.json"),
        element:<BookDetails></BookDetails>

      },
      {
        path:"listedBooks",
        loader: ()=> fetch("booksData.json"),
        element:<ListedBooks></ListedBooks>
      },
      {
        path:"recharts",
        loader: ()=> fetch("booksData.json"),
        element:<Recharts></Recharts>
      },
      {
        path:'dashboard',
        element:<Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
     <ToastContainer />
  </StrictMode>,
)
