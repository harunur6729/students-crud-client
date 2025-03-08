const AddStudentForm = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <form className="bg-white p-6 rounded-lg shadow-lg w-80">
                <input className="w-full p-2 mb-2 border rounded" type="text" name="name" placeholder="শিক্ষার্থীর নাম" />
                <input className="w-full p-2 mb-2 border rounded" type="text" name="class" placeholder="শ্রেণি" />
                <input className="w-full p-2 mb-2 border rounded" type="number" name="roll" placeholder="রোল নম্বর" />
                <input className="w-full p-2 mb-2 border rounded" type="text" name="father" placeholder="পিতার নাম" />
                <input className="w-full p-2 mb-2 border rounded" type="text" name="mother" placeholder="মাতার নাম" />
                
                {/* ছবি আপলোড */}
                <input className="w-full p-2 mb-2 border rounded bg-gray-100" type="file" name="image" accept="image/*" />
                
                {/* সাবমিট বোতাম */}
                <input className="w-full p-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700" type="submit" value="শিক্ষার্থী যোগ করুন" />
            </form>
        </div>
    );
};

export default AddStudentForm;
