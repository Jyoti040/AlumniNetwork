// src/components/RegisterAlumni/PersonalInfo.jsx

import React from 'react';

const PersonalInfo = ({ formData, handleInputChange, handleSelectChange }) => {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          id="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
        <input
          type="date"
          id="dob"
          value={formData.dob}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700">Graduation Year</label>
        <select
          id="graduationYear"
          value={formData.graduationYear}
          onChange={handleSelectChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          {[...Array(30).keys()].map(year => (
            <option key={year + 2000} value={year + 2000}>{year + 2000}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PersonalInfo;
