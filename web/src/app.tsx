import {Toaster} from "react-hot-toast";
import {Route, Routes} from "react-router-dom";
import {TodoProvider} from "./providers/todo.provider";
// pages
import Home from "./pages/home";
import NotFound from "./pages/404";

export default function App() {
  return (
    <TodoProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </TodoProvider>
  );
}
