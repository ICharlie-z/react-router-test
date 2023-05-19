import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import Nosotros from "./pages/Nosotros";
import LayoutPublic from "./layouts/LayoutPublic";
import NotFound from "./pages/NotFound";
import Blogdetails from "./pages/BlogDetails";

const App = () => {
  return (
    <>
      <Navbar />
      <h1>App</h1>
      <Routes>
        <Route path="/" element={<LayoutPublic />}>
          <Route element={<Inicio />} index></Route>
          <Route element={<Contacto />} path="/contacto"></Route>
          <Route element={<Blog />} path="/blog"></Route>
          <Route element={<Blogdetails />} path="/blog/:id"></Route>
          <Route element={<Nosotros />} path="/nosotros"></Route>
          <Route element={<NotFound />} path="*"></Route>
        </Route>
      </Routes>
    </>
  );
};
export default App;
