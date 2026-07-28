import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "quill/dist/quill.snow.css";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Layout from "./pages/Layout";
import Dashboard from "./pages/admin/Dashboard";
import AddBlogs from "./pages/admin/AddBlogs";
import ListBlogs from "./pages/admin/ListBlogs";
import ListComments from "./pages/admin/ListComments";
import Login from "./pages/admin/Login";

import { useAppContext } from "./context/AppContext";

function App() {
  const { token } = useAppContext();

  return (
    <>
      <Toaster />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin"
          element={token ? <Layout /> : <Login />}
        >
          <Route index element={<Dashboard />} />
          <Route path="addBlogs" element={<AddBlogs />} />
          <Route path="listBlogs" element={<ListBlogs />} />
          <Route path="listComments" element={<ListComments />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
