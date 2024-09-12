import React, { useContext } from 'react'
import { StudentContext } from '../App'

const OgrenciItem = () => {

    const {student}=useContext(StudentContext)
  return (
    <div>
        {student.map((a)=>(
            <div key={a.id}>
                 <h3>NAME: {a.name}</h3>
                 <h4>EMAIL: {a.email} </h4>
                 <h4>AGE: {a.age} </h4>
                 COLOR: <input type="text" />
            </div>
           
        ))}
    </div>
  )
}

export default OgrenciItem