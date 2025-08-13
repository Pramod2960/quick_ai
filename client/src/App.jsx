import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import WriteArticle from "./pages/WriteArticle";
import BlogTitles from "./pages/BlogTitles";
import Generateimages from "./pages/Generateimages";
import RemoveObject from "./pages/RemoveObject";
import ReviewResume from "./pages/ReviewResume";
import Community from "./pages/Community";

function App() {
  return (
    <div>
      <Routes>
        {/* single route */}
        <Route path="/" element={<Home />} />

        {/* Nested routes */}
        <Route path="/ai" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="write-article" element={<WriteArticle />} />
          <Route path="blog-titles" element={<BlogTitles />} />
          <Route path="genertate-image" element={<Generateimages />} />
          <Route path="remove-object" element={<RemoveObject />} />
          <Route path="review-resume" element={<ReviewResume />} />
          <Route path="cummunity" element={<Community />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
