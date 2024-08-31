// src/components/RegisterCollege/ContactInfo.jsx

import React from 'react';

const ContactInfo = ({ formData, handleInputChange }) => {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">Contact Person</label>
        <input
          type="text"
          id="contactPerson"
          value={formData.contactPerson}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
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
        <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
        <input
          type="url"
          id="website"
          value={formData.website}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default ContactInfo;
