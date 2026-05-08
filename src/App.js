import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";

// ⚡ Bolt: Implement lazy loading for route components to reduce initial bundle size and improve performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Vehicle = React.lazy(() => import('./pages/Vehicle'));
const Testimonials = React.lazy(() => import('./pages/Testimonials'));
const Team = React.lazy(() => import('./pages/Team'));
const Contact = React.lazy(() => import('./pages/Contact'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='vehicle' element={<Vehicle />} />
      <Route path='testimonials' element={<Testimonials />} />
      <Route path='team' element={<Team />} />
      <Route path='contact' element={<Contact />} />

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
