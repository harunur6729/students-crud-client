// import { useState } from "react";

const AddStudentForm = () => {
    
    const handleAddStudent = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const className = form.className.value;
        const roll = form.roll.value;
        const father = form.father.value;
        const mother = form.mother.value;
        const image = form.image.value;
        
        

        const student = {name, className, roll, father, mother, image};

        console.log(student)

        fetch("http://localhost:5000/students", {
            method:'POST',
            headers:{
                "content-type" : "application/json"
            },
            body:JSON.stringify(student)

        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('Students added successfully')
                form.reset();
            }
        })

    }

    // const imgageBBKay ="cfba01aa0fba4c5915fa316f6efbdc4a";

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
            <form onSubmit={handleAddStudent} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-bold text-center mb-4 text-gray-700">শিক্ষার্থী নিবন্ধন</h2>

                <div className="grid grid-cols-1 gap-3">
                    <div className="grid grid-cols-1">
                        <p className="text-black ">শিক্ষার্থীর নাম:</p>
                        <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700" type="text" name="name" placeholder="শিক্ষার্থীর নাম" />
                    </div>


                   <div className="grid grid-cols-1">
                    <p className="text-black "> শ্রেণি:</p>
                    <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700" type="text" name="className" placeholder="শ্রেণি" />
                   </div>


                  <div>
                    <p className="text-black"> রোল নম্বর:</p>
                    <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700" type="number" name="roll" placeholder="রোল নম্বর" />
                  </div>

                 <div className="grid grid-cols-1">
                    <p className="text-black"> পিতার নাম:</p>
                    <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700" type="text" name="father" placeholder="পিতার নাম" />
                 </div>


                    <div className="grid grid-cols-1">
                        <p className="text-black">মাতার নাম:</p>
                        <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700" type="text" name="mother" placeholder="মাতার নাম" />
                    </div>
                    
                    {/* ছবি আপলোড */}
                    <input className="w-full p-3 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" type="file" name="image" accept="image/*" />
                    
                    {/* সাবমিট বোতাম */}
                    <button className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-300">
                        শিক্ষার্থী যোগ করুন
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddStudentForm;
