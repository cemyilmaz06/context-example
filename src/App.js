import { createContext, useState } from "react";
import Home from "./components/Home";
import "./data.js";
import data from "./data.js";
export const StudentContext=createContext()

function App() {
const [student , setStudent  ] = useState(data)

  return (
    <div>
     <StudentContext.Provider value={{student}}>
      <Home/>
     </StudentContext.Provider>
    </div>
  );
}

export default App;
