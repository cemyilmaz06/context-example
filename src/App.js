import { createContext } from "react";
import Home from "./components/Home";
import "./data.js";
export const StudentContext=createContext()

function App() {


  return (
    <div>
     <StudentContext.Provider>
      <Home/>
     </StudentContext.Provider>
    </div>
  );
}

export default App;
