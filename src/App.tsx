import { Route, Routes } from "react-router-dom";
import Home from "./pages/home"
import Books from "./pages/books-list";
import Movies from "./pages/movies-list";
import Games from "./pages/games-list";
import { FC } from "react";

const App: FC = () => {
  return <Routes>
    <Route path="/movies" element={<Movies />}></Route>
    <Route path="/books" element={<Books />}></Route>
    <Route path="/games" element={<Games />}></Route>
    <Route path="/" element={<Home />}></Route>
  </Routes>;
}

export default App;