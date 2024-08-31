// src/components/RegisterCollege/Review.jsx

import React from 'react';

const Review = ({ formData }) => {
  const handleSubmit = () => {
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Review Your Details</h2>
      <table className="w-full border-collapse border border-gray-300">
        <tbody>
          {Object.entries(formData).map(([key, value]) => (
            <tr key={key} className="border-b border-gray-200">
              <td className="px-4 py-2 font-medium text-gray-800">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</td>
              <td className="px-4 py-2 text-gray-600">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-6">
        <button
          className="bg-blue-600 mt-4 text-white px-6 py-3 w-full rounded-md shadow-md hover:bg-blue-700 transition-all"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Review;
