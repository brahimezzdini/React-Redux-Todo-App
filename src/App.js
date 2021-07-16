import "./css/main.css";
import DisplayTodos from "./components/TaskLis";
import Todos from "./components/AddTask";

import { motion } from "framer-motion";
function App() {
  return (
    <div className="App">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo App
        
      </motion.h1>
      <motion.h1 style={{textAlign:'center',fontSize:'16px'}}>
      <a href="https://github.com/brahimezzdini/React-Redux-Todo-App.git">SOURCE CODE ON GITHUB</a>
      </motion.h1>
     <br/> 
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todos />
        <DisplayTodos />
      </motion.div>
    </div>
  );
}

export default App;
