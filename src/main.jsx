import EditContact, { action as editaction } from "./routes/edit";
import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import Index from "./routes";
import ErrorPage from './errorelement'
import Contact, {
  loader as contactLoader,
  action as deleteaction
} from "./routes/contact";
import './index.css'
import { loader as rootLoader, action as rootAction } from './routes/root'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        errorElement: <h1>Contact not found</h1>
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editaction,
        errorElement: <h1>Contact not found</h1>
      },
      {
        path: "contacts/:contactId/delete",
        action: deleteaction,
        errorElement: <h1>Contact not found</h1>

        
      },
      {
        index: true,
        element: <Index></Index>
      }
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
