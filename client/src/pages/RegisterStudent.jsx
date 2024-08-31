// src/pages/RegisterStudent.jsx

import React, { useState } from 'react';
import { PersonalInfo, AcademicInfo, ContactInfo, Review } from '../components/RegisterStudent';

const RegisterStudent = () => {
  const [activeTab, setActiveTab] = useState('personal');
  
  // Central state for form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dob: '',
    school: '',
    degree: '',
    year: '',
    phone: '',
    address: ''
  });

  // Handler to update state for text inputs
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handler to update state for select input
  const handleSelectChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handler to move to the next tab
  const handleNextTab = () => {
    switch (activeTab) {
      case 'personal':
        setActiveTab('academic');
        break;
      case 'academic':
        setActiveTab('contact');
        break;
      case 'contact':
        setActiveTab('review');
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50 p-6">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Register as Student</h1>

        {/* Tab Navigation */}
        <div className="mb-4">
          <ul className="flex border-b border-blue-300">
            <li
              className={`cursor-pointer px-6 py-2 text-center ${activeTab === 'personal' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('personal')}
            >
              Personal Info
            </li>
            <li
              className={`cursor-pointer px-6 py-2 text-center ${activeTab === 'academic' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('academic')}
            >
              Academic Info
            </li>
            <li
              className={`cursor-pointer px-6 py-2 text-center ${activeTab === 'contact' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('contact')}
            >
              Contact Info
            </li>
            <li
              className={`cursor-pointer px-6 py-2 text-center ${activeTab === 'review' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('review')}
            >
              Review
            </li>
          </ul>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'personal' && (
            <PersonalInfo formData={formData} handleInputChange={handleInputChange} handleSelectChange={handleSelectChange} />
          )}
          {activeTab === 'academic' && (
            <AcademicInfo formData={formData} handleInputChange={handleInputChange} handleSelectChange={handleSelectChange} />
          )}
          {activeTab === 'contact' && (
            <ContactInfo formData={formData} handleInputChange={handleInputChange} handleSelectChange={handleSelectChange} />
          )}
          {activeTab === 'review' && (
            <Review formData={formData} />
          )}
        </div>
        <div className="flex justify-between mt-6">
          {activeTab !== 'review' && (
            <button
              className="bg-blue-600 text-white px-6 py-3 w-full rounded-md shadow-md hover:bg-blue-700 transition-all"
              onClick={handleNextTab}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterStudent;
