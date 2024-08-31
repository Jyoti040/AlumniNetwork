// src/components/RegisterAlumni/ContactInfo.jsx

import React from 'react';

const ContactInfo = ({ formData, handleInputChange }) => {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          id="address"
          value={formData.address}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">LinkedIn Profile</label>
        <input
          type="url"
          id="linkedin"
          value={formData.linkedin}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default ContactInfo;
