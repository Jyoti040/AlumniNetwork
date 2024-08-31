import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';

const RegisterBlock = () => {
  const navigate = useNavigate();
    const [role,setRole] = useState('');
    useEffect(()=>{
        if(role == 'student') navigate('/register/student');
        if(role == 'alumni') navigate('/register/alumni');
        if(role == 'college') navigate('/register/college');
    },[role])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-12 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Register As</h2>
        
        <button
          className="flex items-center justify-center w-full bg-red-500 text-white py-3 px-6 rounded-lg mb-6 hover:bg-red-600 transition-colors text-lg"
          style={{ width: '300px' }} // Adjust width here
          onClick={() => setRole('student')}
        >
          <SchoolIcon className="mr-3" />
          Student
        </button>
        
        <button
          className="flex items-center justify-center w-full bg-blue-500 text-white py-3 px-6 rounded-lg mb-6 hover:bg-blue-600 transition-colors text-lg"
          style={{ width: '300px' }} // Adjust width here
          onClick={() => setRole('alumni')}
        >
          <AccountCircleIcon className="mr-3" />
          Alumni
        </button>
        
        <button
          className="flex items-center justify-center w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors text-lg"
          style={{ width: '300px' }} // Adjust width here
          onClick={() => setRole('college')}
        >
          <BusinessIcon className="mr-3" />
          College
        </button>
      </div>
    </div>
  );
}

export default RegisterBlock;
