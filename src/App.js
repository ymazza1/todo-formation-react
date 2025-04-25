import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import NotFound from "./NotFound/NotFound";
import About from "./About/About";
import TaskDetails from "./TaskDetails/TaskDetails";
import { initTask } from "../src/Redux/taskActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import TaskListContainer from "./TaskListContainer/TaskListContainer";

function App() {
  const authorName = "Yoann Mazza";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initTask());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<TaskListContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        </Routes>
        <Footer name={authorName} />
      </div>
    </Router>
  );
}

export default App;
