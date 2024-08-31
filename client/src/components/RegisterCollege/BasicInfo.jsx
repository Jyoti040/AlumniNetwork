// src/components/RegisterCollege/BasicInfo.jsx

import React from 'react';

const BasicInfo = ({ formData, handleInputChange }) => {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700">College Name</label>
        <input
          type="text"
          id="collegeName"
          value={formData.collegeName}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
        <textarea
          type="text"
          id="address"
          value={formData.address}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default BasicInfo;
