// src/components/RegisterStudent/AcademicInfo.jsx

import React from 'react';

const AcademicInfo = ({ formData, handleInputChange, handleSelectChange }) => {
  // Generate an array of years from the current year to 1900
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i);

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="school" className="block text-gray-700 font-medium mb-2">School/University</label>
        <input
          id="school"
          type="text"
          value={formData.school}
          onChange={handleInputChange}
          placeholder="Your School/University"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="degree" className="block text-gray-700 font-medium mb-2">Degree</label>
        <input
          id="degree"
          type="text"
          value={formData.degree}
          onChange={handleInputChange}
          placeholder="Your Degree"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="year" className="block text-gray-700 font-medium mb-2">Graduation Year</label>
        <select
          id="year"
          value={formData.year}
          onChange={handleSelectChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        >
          <option value="">Select Year</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AcademicInfo;
