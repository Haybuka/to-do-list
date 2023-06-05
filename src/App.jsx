import { Route, Routes } from "react-router-dom";
import Navigation from "./component/navigation/navigation";
import Todo from "./component/Todo/todo";

function App(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<p>home page</p>} />
          <Route path="todo" element={<Todo />} />
          <Route path="contact" element={<p>contact page</p>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
