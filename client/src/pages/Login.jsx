// src/pages/Login.jsx

import React, { useState } from 'react';
import { EntitySelector, StudentLogin, AlumniLogin, CollegeLogin } from '../components/Login';

const Login = () => {
  const [selectedEntity, setSelectedEntity] = useState('student');

  const handleEntityChange = (entity) => {
    setSelectedEntity(entity);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h1>
        
        <EntitySelector selectedEntity={selectedEntity} onEntityChange={handleEntityChange} />

        <div className="mt-6">
          {selectedEntity === 'student' && <StudentLogin />}
          {selectedEntity === 'alumni' && <AlumniLogin />}
          {selectedEntity === 'college' && <CollegeLogin />}
        </div>
      </div>
    </div>
  );
};

export default Login;
