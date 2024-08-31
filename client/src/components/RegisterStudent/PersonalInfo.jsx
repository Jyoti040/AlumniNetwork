// src/components/RegisterStudent/PersonalInfo.jsx

import React from 'react';

const PersonalInfo = ({ formData, handleInputChange, handleSelectChange }) => {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name</label>
        <input
          id="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="John Doe"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="john.doe@example.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="dob" className="block text-gray-700 font-medium mb-2">Date of Birth</label>
        <input
          id="dob"
          type="date"
          value={formData.dob}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
