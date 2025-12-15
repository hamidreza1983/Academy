import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";

import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Courses from "./pages/Courses";
// import CourseDetail from "./pages/CourseDetail";
import News from "./pages/News";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 position-relative">
      {/* Header */}
      <Navbar />

      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />

          <Route path="/courses" element={<Courses />} />
          {/* <Route path="/courses/:id" element={<CourseDetail />} /> */}

          <Route path="/news" element={<News />} />

          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
