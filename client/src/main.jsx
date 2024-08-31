import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import { Profile, Home, Login, Register, RegisterStudent, RegisterAlumni, RegisterCollege } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='register/student' element={<RegisterStudent />} />
      <Route path='register/alumni' element={<RegisterAlumni />} />
      <Route path='register/college' element={<RegisterCollege />} />
      <Route path='profile' element={<Profile />} />
    </Route>
  )
);

const Layout = () => {
  return (
    <RouterProvider router={router} />
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
