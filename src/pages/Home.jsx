import React from 'react';
import { Link } from 'react-router-dom';
 
const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700 animate-gradient">
      <div className="space-x-6">
       <Link to="/form"> <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
          Form
        </button></Link>
        <Link to={'/panel'}><button className="px-6 py-3 bg-yellow-400 text-white font-bold rounded-2xl shadow-lg hover:bg-yellow-500 transition duration-300 ease-in-out">
          Admin Panel
        </button></Link>
      </div>
    </div>
  );
};

export default Home;
