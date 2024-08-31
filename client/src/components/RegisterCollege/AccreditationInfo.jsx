// src/components/RegisterCollege/AccreditationInfo.jsx

import React from 'react';

const AccreditationInfo = ({ formData, handleInputChange }) => {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="accreditation" className="block text-sm font-medium text-gray-700">Accreditation Body</label>
        <input
          type="text"
          id="accreditation"
          value={formData.accreditation}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="accreditationNumber" className="block text-sm font-medium text-gray-700">Accreditation Number</label>
        <input
          type="text"
          id="accreditationNumber"
          value={formData.accreditationNumber}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default AccreditationInfo;
