import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import AddBlog from "./components/AddBlogPage";
import Edit from "./components/Edit";
import Home from "./components/home";
import Login from "./components/login";
import ViewPage from "./components/viewPage";

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
      <Route
        exact
        path="/Home/:userid/Edit/:id"
        element={<Edit />}
      />
      <Route
        exact
        path="/Home/:userid/ViewPage/:id"
        element={<ViewPage />}
      />
    </Routes>
  );
}

export default App;
