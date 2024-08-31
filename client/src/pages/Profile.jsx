// src/pages/Profile.jsx

import React from 'react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Profile Header */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 text-white py-12">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white mb-4 shadow-lg"
          />
          <h1 className="text-4xl font-bold mb-2">John Doe</h1>
          <p className="text-xl mb-4">Software Engineer at Tech Company</p>
          <div className="flex gap-4">
            <a href="mailto:john.doe@example.com" className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-full shadow-md transition">
              Email
            </a>
            <a href="https://linkedin.com/in/johndoe" className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-full shadow-md transition">
              LinkedIn
            </a>
            <a href="https://github.com/johndoe" className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-full shadow-md transition">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I am a passionate software engineer with over 10 years of experience in building web applications. 
            I specialize in front-end development and have a strong background in JavaScript, React, and modern web technologies.
            I enjoy collaborating with teams to solve complex problems and create user-centric solutions.
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Achievements</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>Developed a widely-used e-commerce platform with over 1 million users.</li>
            <li>Received the 'Best Developer' award at the Tech Conference 2022.</li>
            <li>Contributed to several open-source projects on GitHub.</li>
          </ul>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Information</h2>
          <p className="text-gray-700">
            Feel free to reach out to me via email or connect with me on LinkedIn and GitHub.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Alumni Network. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-4">
            <a href="/privacy" className="text-gray-400 hover:text-gray-300">Privacy Policy</a>
            <span>|</span>
            <a href="/terms" className="text-gray-400 hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
