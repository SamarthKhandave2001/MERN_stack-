import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import Home from '../components/Home/Home.jsx'
import App from './App.jsx'
import './index.css'
//import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home />}></Route>
  
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
