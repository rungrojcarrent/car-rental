import { lazy } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";

// ⚡ Bolt: Lazy load route components to reduce initial bundle size
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Vehicle = lazy(() => import("./pages/Vehicle"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Team = lazy(() => import("./pages/Team"));
const Contact = lazy(() => import("./pages/Contact"));

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
