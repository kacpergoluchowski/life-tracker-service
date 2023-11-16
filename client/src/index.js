import './App.css';
import React from 'react';
import { createRoot } from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from './pages/LoginPage'
import SignIn from './pages/Sign-In';
import SignUp from './pages/Sign-Up';
import HomePage from './pages/HomePage';
import HabitPage from './pages/HabitPage';
import GoalsPage from './pages/GoalsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/sign-in",
    element: <SignIn/>
  },
  {
    path: "/sign-up",
    element: <SignUp/>
  }, 
  {
    path: "/home",
    element: <HomePage/>
  },
  {
    path: "/habits",
    element: <HabitPage/>
  },
  { 
    path: "/goals",
    element: <GoalsPage/>
  }
]);

const root = createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={router}>
      <LoginPage />
    </RouterProvider>
);
