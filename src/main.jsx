import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import ErrorPage from './ErrorPage.jsx';
import Home from './Home.jsx';
import Donation from './Donation.jsx';
import Statistics from './Statistics.jsx';
import DonationCardDetails from './DonationCardDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/donation',
        element: <Donation></Donation>,
        loader: ()=>fetch('card.json')
      },
      {
        path:'/statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'/donation/:donationId',
        element: <DonationCardDetails></DonationCardDetails>,
        loader: () => fetch('./card.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)


