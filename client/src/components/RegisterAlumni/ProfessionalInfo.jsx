// src/components/RegisterAlumni/ProfessionalInfo.jsx

import React from 'react';

const ProfessionalInfo = ({ formData, handleInputChange }) => {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="currentJob" className="block text-sm font-medium text-gray-700">Current Job Title</label>
        <input
          type="text"
          id="currentJob"
          value={formData.currentJob}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default ProfessionalInfo;
