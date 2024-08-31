// src/components/Login/EntitySelector.jsx

import React from 'react';
import { Person, School, Business } from '@mui/icons-material';

const EntitySelector = ({ selectedEntity, onEntityChange }) => {
  return (
    <div className="flex justify-around mb-6">
      <button
        className={`flex flex-col items-center px-6 py-4 rounded-lg transition-transform transform ${selectedEntity === 'student' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} hover:scale-105`}
        onClick={() => onEntityChange('student')}
      >
        <Person className="text-3xl mb-2" />
        <span className="font-medium">Student</span>
      </button>
      <button
        className={`flex flex-col items-center px-6 py-4 rounded-lg transition-transform transform ${selectedEntity === 'alumni' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} hover:scale-105`}
        onClick={() => onEntityChange('alumni')}
      >
        <School className="text-3xl mb-2" />
        <span className="font-medium">Alumni</span>
      </button>
      <button
        className={`flex flex-col items-center px-6 py-4 rounded-lg transition-transform transform ${selectedEntity === 'college' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} hover:scale-105`}
        onClick={() => onEntityChange('college')}
      >
        
        <Business className="text-3xl mb-2" />
        <span className="font-medium">College</span>
      </button>
    </div>
  );
};

export default EntitySelector;
