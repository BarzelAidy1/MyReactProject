import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AdminPage from './components/admin/AdminPage.jsx';
import EditBusinessData from './components/businessData/EditBusinessData.jsx';
import MeetingList from './components/meeting/MeetingList.jsx';
import Service from './components/service/Service.jsx';
import AddService from './components/service/AddService.jsx';


const routes = createBrowserRouter([{

  path: "/",
  element: <App />,
  //errorElement:<ErorNotFound />


}, {
  path: "/admin",
  element: <AdminPage />,

  children: [
    { path: "service", element: <Service /> },
    { path: "meeting", element: <MeetingList /> },
    { path: "edit", element: <EditBusinessData /> },
    { path: "addservice", element: <AddService /> },
  
  ],
},
  //errorElement:<ErorNotFound />
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
