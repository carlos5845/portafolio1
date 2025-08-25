import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import About from "./pages/about.tsx";
import Home from "./pages/home.tsx";
import Blog from "./pages/blog.tsx";
import Videos from "./pages/video.tsx";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="Videos" element={<Videos />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
