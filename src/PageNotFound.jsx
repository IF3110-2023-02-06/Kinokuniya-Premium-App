import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold animate-pulse">404</h1>
          <p className="text-2xl mt-4">Page Not Found</p>
          <p className='mt-4 mb-4'>Sorry, the page you are looking for does not exist.</p>
          <Link to="/" className="text-blue-500 font-semibold hover:text-blue-700 transition-colors duration-300">
            Go Back to Home
          </Link>
        </div>
      </div>
    );
  };

export default PageNotFound