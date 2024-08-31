// src/components/RegisterStudent/Review.jsx

import React from 'react';

const Review = ({ formData }) => {
  const handleSubmit = () => {
    console.log('Submitted Data:', formData);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-blue-600">Review Your Information</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-left text-gray-600">Field</th>
              <th className="py-2 px-4 text-left text-gray-600">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold text-gray-700">Full Name</td>
              <td className="py-2 px-4 text-gray-600">{formData.fullName}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold text-gray-700">Email Address</td>
              <td className="py-2 px-4 text-gray-600">{formData.email}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold text-gray-700">Date of Birth</td>
              <td className="py-2 px-4 text-gray-600">{formData.dob}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold text-gray-700">School/University</td>
              <td className="py-2 px-4 text-gray-600">{formData.school}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold text-gray-700">Degree</td>
              <td className="py-2 px-4 text-gray-600">{formData.degree}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold text-gray-700">Graduation Year</td>
              <td className="py-2 px-4 text-gray-600">{formData.year}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold text-gray-700">Phone Number</td>
              <td className="py-2 px-4 text-gray-600">{formData.phone}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold text-gray-700">Address</td>
              <td className="py-2 px-4 text-gray-600">{formData.address}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        className="bg-blue-600 mt-4 text-white px-6 py-3 w-full rounded-md shadow-md hover:bg-blue-700 transition-all"
        onClick={handleSubmit} 
      >
        Submit
      </button>
    </div>
  );
};

export default Review;
