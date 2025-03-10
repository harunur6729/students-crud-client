import React from "react";
import { data, useLoaderData } from "react-router-dom";
import Student from "./Student";

const UpdatreStudent = () => {
  const students = useLoaderData();

  const handleUpdate = event =>{
     event.preventDefault();
     const form = event.target;

    const name = form.name.value;
    const className = form.className.value;
    const roll = form.roll.value;
    const father = form.father.value;
    const mother = form.mother.value;

    const updatedStudent= {name, className, roll, father, mother};
    console.log(updatedStudent);

    fetch(`http://localhost:5000/students/${students._id}`, {
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(updatedStudent)
    })
    .then(res =>res.json())
    .then(data =>{
      console.log(data)
    })
  }

  return (
    <div className="border border-white flex justify-center items-center min-h-screen bg-gray-400 px-4">
      <form onSubmit={handleUpdate} className="w-full bg-white max-w-md p-3 ">
        <h1 className="text-2xl font-semibold  p-7 text-black">
          Update Students Information
        </h1>
        <div className="grid grid-cols-1 gap-2">
          <div className="grid grid-cols-1">
            <p className="text-black text-start">Student Name:</p>
            <input
              className="p-2 rounded-lg  bg-gray-700"
              type="text"
              name="name"
              id=""
              defaultValue={students.name}
            />
          </div>

          <div  className="grid grid-cols-1">
            <p className="text-black text-start">Class:</p>
            <input
            className="p-2 rounded-lg bg-gray-700 "
            type="text"
            name="className"
            id=""
            defaultValue={students.className}
          />
          </div>

         <div className="grid grid-cols-1">
          <p className="text-black text-start"> Roll No:</p>
          <input
            className="p-2 rounded-lg  bg-gray-700"
            type="number"
            name="roll"
            id=""
            defaultValue={students.roll}
          />
         </div>
         
         <div className="grid grid-cols-1">
          <p className="text-black text-start">Father Name:</p>
          <input
            className="p-2 rounded-lg bg-gray-700 "
            type="text"
            name="father"
            id=""
            defaultValue={students.father}
          />
         </div>
          
          <div className="grid grid-cols-1">
            <p className="text-black text-start">Mother Name:</p>
            <input
            className="p-2 rounded-lg bg-gray-700"
            type="text"
            name="mother"
            id=""
            defaultValue={students.mother}
          />
          </div>
          {/* <input type="file" name="image" id="" defaultValue={students.image} /> */}

          <input
            className="w-full bg-blue-500 rounded-full p-2 "
            type="submit"
            value="Update"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdatreStudent;
