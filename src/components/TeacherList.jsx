import React, { useEffect, useState } from "react";

const categories = [
  { title: "All" },
  { title: "Mathematics" },
  { title: "Science" },
  { title: "English" },
];

const teachers = [
  {
    name: "Steven McHail",
    role: "Mathematics Teacher",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    additionalInfo: "Specializes in personalized teaching methods and engaging students in interactive learning."

  },
  {
    name: "Jaquelin Issac",
    role: "Science Teacher",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    additionalInfo: "Specializes in personalized teaching methods and engaging students in interactive learning."

  },
  {
    name: "Steven McHail",
    role: "Mathematics Teacher",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    additionalInfo: "Specializes in personalized teaching methods and engaging students in interactive learning."

  },
  {
    name: "Jaquelin Issac",
    role: "Science Teacher",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    additionalInfo: "Specializes in personalized teaching methods and engaging students in interactive learning."
  },
  {
    name: "Steven McHail",
    role: "Mathematics Teacher",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    additionalInfo: "Specializes in personalized teaching methods and engaging students in interactive learning."

  },
  {
    name: "Steven McHail",
    role: "Mathematics Teacher",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    additionalInfo: "Specializes in personalized teaching methods and engaging students in interactive learning."

  },
  {
    name: "Jaquelin Issac",
    role: "Science Teacher",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    additionalInfo: "Specializes in personalized teaching methods and engaging students in interactive learning."

  },
  {
    name: "Steven McHail",
    role: "Mathematics Teacher",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    additionalInfo: "Specializes in personalized teaching methods and engaging students in interactive learning."

  },
  {
    name: "Jaquelin Issac",
    role: "Science Teacher",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    additionalInfo: "Specializes in personalized teaching methods and engaging students in interactive learning."
  },
  {
    name: "Steven McHail",
    role: "Mathematics Teacher",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    additionalInfo: "Specializes in personalized teaching methods and engaging students in interactive learning."

  },
];

const TeacherList = () => {

  const [visibleTeachers, setVisibleTeachers] = useState(6);

  useEffect(() => {
    const updateVisibleTeachers = () => {
      if (window.innerWidth <= 640) { // Mobile view
        setVisibleTeachers(3);
      } else { // Desktop and larger
        setVisibleTeachers(6);
      }
    };

    // Initial check
    updateVisibleTeachers();

    // Add resize event listener
    window.addEventListener('resize', updateVisibleTeachers);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', updateVisibleTeachers);
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-50">

      <div className="max-w-8xl py-7 items-start my-8 bg-gradient-to-r from-teal-200 via-blue-200 to-purple-400 shadow-lg rounded-lg border border-gray-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 underline">Our Teachers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-8xl my-8 place-items-center p-[10px]">
        {teachers.slice(0, visibleTeachers).map((teacher, index) => (
            <div key={index} className="max-w-[350px] bg-white shadow-lg rounded-tl-[80px] rounded-br-[80px] border border-gray-300 py-[40px] px-[20px] flex items-center space-x-4  bg-gradient-to-r from-teal-300 via-blue-300 to-purple-500">
              {/* Left Side: Teacher Info */}
              <div className="flex-1 ">
                <h3 className="text-xl font-bold text-gray-800">{teacher.name}</h3>
                <p className="text-gray-600">{teacher.subject}</p>
                <p className="text-gray-500 text-sm">{teacher.experience} years of experience</p>
                <p className="text-gray-500 text-sm mt-2">{teacher.additionalInfo}</p>
              </div>

              {/* Right Side: Teacher Photo */}
              <div className="w-24 h-36 md:w-28 md:h-40">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full rounded-xl rounded-br-[30px] object-cover shadow-md"
                />
              </div>

            </div>

          ))}
        </div>
        {/* View All Button */}
        <div className="text-center mt-6">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-600 transition duration-300">
            View All
          </button>
        </div>
      </div>
      

    </div>
  );
};

export default TeacherList;
