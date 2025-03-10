import React from "react";
import { Link } from "react-router-dom";

const Student = ({ student, students, setStudents }) => {
  const handleDelete = _id =>{
    console.log('delete', _id)

    fetch(`http://localhost:5000/students/${_id}`, {
      method:'DELETE',
      // headers:{
      //   'content-type': 'application/json'
      // },
      // body:JSON.stringify(student)
    })
    .then(res =>res.json())
    .then (data =>{
      console.log(data);
      if(data.deletedCount>0){
          alert('Deleted Successfully!')
          const remaining = students.filter(student => student._id !== _id);
          setStudents(remaining);
      }
    })

  }
  return (
    
      <tr className="odd:bg-gray-800 even:bg-gray-700 text-white">
        <td className="p-2 border border-gray-300 ">{student.name}</td>
        <td className="p-2 border border-gray-300 ">{student.className}</td>
        <td className="p-2 border border-gray-300 ">{student.roll}</td>
        <td className="p-2 border border-gray-300 ">{student.father}</td>
        <td className="p-2 border border-gray-300 ">{student.mother}</td>
        <td className="p-2 border border-gray-300 "> {student.image}</td>
       
        <td><Link to={`/update/${student._id}`}><button  className="btn btn-secondary m-1">Update</button></Link></td>
        <td><button onClick={()=>handleDelete(student._id)} className="btn btn-accent m-1">Delete</button></td>
      </tr>
    
  );
};

export default Student;
