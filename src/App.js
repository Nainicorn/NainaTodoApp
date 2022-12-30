import './App.css';
import './components//Add.css';
import './components//Todo.css';
import Add from './components/Add';
import Header from './components/Header';
import Todos from './components/Todos';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><Header />
          <Todos /></>}></Route>
        <Route path="/add" element={<Add />}></Route>
      </Routes>
    </div>
  );
}
// add Todo
// delete Todo
// highlight Todo on hover
// check Todo, Todo turns grey

// * edit/update Todo
// *category color Todo

export default App;
