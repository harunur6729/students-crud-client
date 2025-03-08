const AddStudentForm = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
            <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-bold text-center mb-4 text-gray-700">শিক্ষার্থী নিবন্ধন</h2>

                <div className="grid grid-cols-1 gap-3">
                    <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="name" placeholder="শিক্ষার্থীর নাম" />
                    <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="class" placeholder="শ্রেণি" />
                    <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" name="roll" placeholder="রোল নম্বর" />
                    <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="father" placeholder="পিতার নাম" />
                    <input className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="mother" placeholder="মাতার নাম" />
                    
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
