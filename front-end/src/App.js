import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/login";
import Register from "./pages/register";
import Posts from "./pages/posts";
import Addposts from "./pages/addposts";
import Allposts from "./pages/allposts";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/post/myposts' element={<Posts />} />
        <Route path='/post/allposts' element={<Allposts />} />
        <Route path='/post/addposts' element={<Addposts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
