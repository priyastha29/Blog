import React from 'react'

import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

import HomePage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import RootLayout from './pages/RootLayout'
import SignUp from './pages/SignUp'
import NotFoundPage from './pages/NotFoundPage'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(

     <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="signup" element={<SignUp/>} />
        <Route path = "*" element ={<NotFoundPage/>}></Route>
        

      </Route>
      )
      );
     return<RouterProvider router = {router} />;


      }
      export default App;





