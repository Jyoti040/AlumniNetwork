// src/components/RegisterStudent/ContactInfo.jsx

import React from 'react';

const ContactInfo = ({ formData, handleInputChange }) => {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
        <input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="(123) 456-7890"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Address</label>
        <textarea
          id="address"
          type="text"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="123 Main St, City, Country"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default ContactInfo;
