// src/components/Login/CollegeLogin.jsx

import React, { useState } from 'react';

const CollegeLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('College Login:', { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6 bg-white rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">College Login</h1>
      <div className="mb-4">
        <label htmlFor="collegeEmail" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          id="collegeEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="collegePassword" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password"
          id="collegePassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Enter your password"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
      >
        Login
      </button>
    </form>
  );
};

export default CollegeLogin;
