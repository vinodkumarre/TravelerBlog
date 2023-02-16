import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import AddBlog from "./components/AddBlogPage";
import Home from "./components/home";
import Login from "./components/login";

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Login />}
      />
      <Route
        exact
        path="/Home/:id"
        element={<Home />}
      />
      <Route
        exact
        path="/Home/AddBlog/:id"
        element={<AddBlog />}
      />
    </Routes>
  );
}

export default App;
