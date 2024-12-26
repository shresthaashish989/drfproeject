import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

const AddCategory = () => {
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const submitHandle = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/addlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category }),
      });

      if (response.status === 201) {
        toast.success('Category added successfully!');
        navigate('/admin/addcategory'); // Redirect after success
      } else {
        toast.error('Failed to add category. Please try again!');
      }
    } catch (err) {
      console.error(err);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <ToastContainer theme="colored" position="top-right" />
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white rounded-lg shadow-md p-6">
          <form onSubmit={submitHandle}>
            <div className="mb-5">
              <label
                htmlFor="category"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Category Name
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Enter your category name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div>
              <button
                type="submit"
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Add Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
