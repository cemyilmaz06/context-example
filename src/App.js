import { createContext, useState } from "react";
import Home from "./components/Home";
import "./data.js";
import data from "./data.js";
export const StudentContext=createContext()

function App() {
const [student , setStudent  ] = useState(data)
const changeColor=(id,newRenk)=>(
  setStudent(student.map((a)=>a.id===id ? {...a, color:newRenk} : a))
)

  return (
    <div>
     <StudentContext.Provider value={{student,changeColor}}>
      <Home/>
     </StudentContext.Provider>
    </div>
  );
}

export default App;
