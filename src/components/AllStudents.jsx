import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Student from './Student';

const AllStudents = () => {
    const loadedStudents = useLoaderData();
    const [students ,setStudents] = useState(loadedStudents);
    return (
        <div className=" pt-12 min-h-screen bg-gray-900 px-4">
            <h1 className='text-xl font-semibold'>Total Number of Student {students.length}</h1>

            <div>
                <table className='w-full border border-gray-300 text-left' border='1'>
                    <thead>
                        <tr className='bg-gray-700'>
                            <th className='p-2 border  border-gray-300'>Students Name</th>
                            <th className='p-2 border  border-gray-300'>Class</th>
                            <th className='p-2 border  border-gray-300'>Roll</th>
                            <th className='p-2 border  border-gray-300'>Father Name</th>
                            <th className='p-2 border  border-gray-300'>Mother Name</th>
                            <th className='p-2 border  border-gray-300'>photo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((student) =>(<Student key={student._id} student={student} students ={students} setStudents={setStudents}></Student>))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllStudents;