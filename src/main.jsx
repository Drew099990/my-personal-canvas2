import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './about/About.jsx';
import Contact from './contact me/Contact.jsx';
import Showcase from './showcase/Showcase.jsx';
import Brainstorm from './brsinstorm/Brainstorm.jsx'; // Fixed typo in import path
import Support from './support/Support.jsx';
import Home from './home/Home.jsx';
import LLE from './designs/LoveLastEmbrace.jsx'; // Fixed typo in import path
import DPage from './designs/designsPage.jsx';


const router = createBrowserRouter([
  { path: "/", element: <Home/> },
  { path: "/home", element: <App/> },
  { path: "/about", element: <About/> },
  { path: "/contact", element: <Contact/> },
  { path: "/brain", element: <Brainstorm/> },
  { path: "/embrace", element: <LLE/> },
  { path: "/show", element: <Showcase/> },
  { path: "/support", element: <Support/> },
  { path: "/designs", element: <DPage/> },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);