import React from 'react'
 import LMS from'../assets/download.jpeg';
 const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-left justify-center">
  <h1 className="text-4xl font-bold text-blue-600">Welcome to Our LMS</h1>
  <br></br>
  {/* <img src="c:\Users\SAI\Pictures\Camera Roll\download.jpeg" alt="LMS Banner" className="w-full max-w-lg mt-6" /> */}
  <img src={LMS} alt="Example" />
  <br></br>
</div>

      );
    };
    const About = () => {
        return (
          <div className="min-h-screen bg-white p-10">
            <h2 className="text-3xl font-semibold text-gray-800">About Our Services</h2>
            <p className="mt-4 text-gray-600">
              Our Learning Management System (LMS) provides high-quality courses and interactive learning experiences.
            </p>
          </div>
        );
      };
      
      const App = () => {
        return (
          <div>
            <Home />
            <About />
          </div>
        );
      };
      
 
 export default Home