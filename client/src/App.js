import './App.css';

import {
  BrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

import Add from './Components/add';
import Books from './Components/books';
import Update from './Components/update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/update/:id" element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
      

  );
}

export default App;
