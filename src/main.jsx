import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Downloader from './components/Downloader.jsx';
import {store} from "./store/createStore.js";
import {Provider} from "react-redux"
import Layout from './Components/Layout.jsx';

const router = createBrowserRouter([
  {
  path: '/', 
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <App />
    },
    {
      path: "/download",
      element: <Downloader />
    }
  ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
