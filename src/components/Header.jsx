import React, { useState } from 'react';

const Header = () => {
  // State for showing the auth modal and which tab is active
  const [showAuth, setShowAuth] = useState(false);
  const [authTab, setAuthTab] = useState('login'); // 'login' or 'register'
  const [showContact, setShowContact] = useState(false);

  // Open the auth modal with the selected tab
  const openAuth = (tab) => {
    setAuthTab(tab);
    setShowAuth(true);
    setShowContact(false);
  };

  // Open the Contact modal
  const openContact = () => {
    setShowContact(true);
    setShowAuth(false);
  };

  // Close all modals
  const closeModals = () => {
    setShowAuth(false);
    setShowContact(false);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-500 to-blue-500 shadow-md">
      {/* Header Left */}
      <div className="flex items-center">
        <div className="mr-6">
          {/* Place your logo in public/images and reference it relatively */}
          <a href="/">
            <img src="/images/lms-logo.png" alt="LMS Logo" className="h-12" />
          </a>
        </div>
        <nav className="space-x-6">
          <a href="/" className="text-white hover:text-yellow-300">Home</a>
          <a href="/about" className="text-white hover:text-yellow-300">About</a>
          <a href="/courses" className="text-white hover:text-yellow-300">Courses</a>
          <a href="/blogs" className="text-white hover:text-yellow-300">Blogs</a>
          <button onClick={openContact} className="text-white hover:text-yellow-300 focus:outline-none">Contact</button>
        </nav>
      </div>

      {/* Header Right */}
      <div>
        <button 
          onClick={() => openAuth('login')} 
          className="px-4 py-2 bg-white text-blue-700 font-bold rounded-full hover:bg-gray-100 focus:outline-none"
        >
          Login / Register
        </button>
      </div>

      {/* Authentication Modal (Combined Login/Register) as a right sidebar */}
      {showAuth && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50" 
          onClick={closeModals}
        >
          <div 
            className="absolute top-20 right-4 bg-white text-gray-800 p-6 rounded shadow-md w-80"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center mb-4">
              <button 
                onClick={() => setAuthTab('login')}
                className={`px-4 py-2 rounded-l ${authTab === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} focus:outline-none`}
              >
                Login
              </button>
              <button 
                onClick={() => setAuthTab('register')}
                className={`px-4 py-2 rounded-r ${authTab === 'register' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} focus:outline-none`}
              >
                Register
              </button>
            </div>
            {authTab === 'login' && (
              <>
                <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium">Email:</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      required 
                      className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Password:</label>
                    <input 
                      type="password" 
                      placeholder="Enter your password" 
                      required 
                      className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500" 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none"
                  >
                    Login
                  </button>
                </form>
              </>
            )}
            {authTab === 'register' && (
              <>
                <h2 className="text-xl font-bold mb-4 text-center">Register</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium">Name:</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      required 
                      className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Email:</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      required 
                      className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Password:</label>
                    <input 
                      type="password" 
                      placeholder="Enter your password" 
                      required 
                      className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500" 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none"
                  >
                    Register
                  </button>
                </form>
              </>
            )}
            <button 
              onClick={closeModals} 
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              X
            </button>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContact && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" 
          onClick={closeModals}
        >
          <div 
            className="bg-white text-gray-800 p-6 rounded shadow-md w-80 relative" 
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4 text-center">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name:</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  required 
                  className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email:</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  required 
                  className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Message:</label>
                <textarea 
                  placeholder="Enter your message" 
                  required 
                  className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none"
              >
                Send
              </button>
            </form>
            <button 
              onClick={closeModals} 
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              X
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
