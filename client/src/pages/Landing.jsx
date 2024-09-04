import React from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white h-screen flex flex-col justify-center items-center text-center p-6">
        <h1 className="text-5xl font-bold mb-6">Welcome to Alumni Network</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Connect with fellow alumni, explore career opportunities, and stay updated with the latest news. Join a vibrant community and enhance your professional journey.</p>
        <div>
          <Link to="/register" className="bg-yellow-500 text-blue-800 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-400 transition-transform transform hover:scale-105">
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Networking</h3>
              <p className="text-gray-700">Connect with your fellow alumni, share experiences, and expand your professional network. Engage in meaningful conversations and build lasting relationships.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-teal-600">Career Opportunities</h3>
              <p className="text-gray-700">Explore job openings, internships, and career advice tailored to your field. Access resources and opportunities to advance your career.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Events & Updates</h3>
              <p className="text-gray-700">Stay updated with the latest news and upcoming events in your alumni community. Participate in webinars, meetups, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-teal-500 to-green-500 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us Today!</h2>
        <p className="text-lg mb-6 max-w-lg mx-auto">Sign up now to start connecting with fellow alumni and unlock a world of opportunities. Don’t miss out on being part of a dynamic and supportive community.</p>
        <Link to="/register" className="bg-yellow-500 text-blue-800 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-400 transition-transform transform hover:scale-105">
          Register Now
        </Link>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Users Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs">
              <p className="text-gray-700 mb-4">"The Alumni Network has been an invaluable resource for my career development. I’ve made connections that have opened new doors for me."</p>
              <p className="font-semibold text-gray-800">John Doe</p>
              <p className="text-gray-600">Software Engineer</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs">
              <p className="text-gray-700 mb-4">"I love the community events and networking opportunities. It’s great to connect with fellow alumni and stay engaged."</p>
              <p className="font-semibold text-gray-800">Jane Smith</p>
              <p className="text-gray-600">Marketing Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Alumni Network. All rights reserved.</p>
        <div className="mt-4">
          <Link to="/privacy" className="text-gray-400 hover:text-gray-300">Privacy Policy</Link> | 
          <Link to="/terms" className="text-gray-400 hover:text-gray-300"> Terms of Service</Link>
        </div>
      </footer>
    </div>
  )
}

export default Landing
