import { FaFacebookF, FaYoutube, FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E3A5F] text-gray-300 py-10">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section - Links */}
          <div>
            <ul className="space-y-2 text-lg">
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">➤</span> 
                <a href="#" className="hover:text-white">Courses Information </a>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">➤</span> 
                <a href="#" className="hover:text-white">Students Feedback</a>
              </li>
              
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">➤</span> 
                <a href="#" className="hover:text-white">Blog</a>
              </li>
            </ul>
          </div>

          {/* Right Section - Social Media & Contact */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Follow Us On</h2>
            <div className="flex space-x-4 mb-6">
              <a href="https://peakprosys.com/" className="bg-blue-600 p-2 rounded-full hover:bg-blue-800 text-white text-xl">
                <FaFacebookF />
              </a>
              <a href="http://www.youtube.com/@Peakprosyssolutions_official" className="bg-red-600 p-2 rounded-full hover:bg-red-800 text-white text-xl">
                <FaYoutube />
              </a>
              <a href="https://www.linkedin.com/company/peakprosys-solutions-pvt-ltd" className="bg-blue-500 p-2 rounded-full hover:bg-blue-700 text-white text-xl">
                <FaLinkedinIn />
              </a>
              <a href="#" className="bg-green-500 p-2 rounded-full hover:bg-green-700 text-white text-xl">
                <FaWhatsapp />
              </a>
              <a href="https://www.instagram.com/peakprosys_sols/reel/DECNEWpu86h/" className="bg-black p-2 rounded-full hover:bg-gray-700 text-white text-xl">
                <FaInstagram />
              </a>
            </div>

            <h2 className="text-xl font-semibold text-white mb-2">We are Located at</h2>
            <p className="text-sm">
              Peakprosys Solutions Pvt Ltd (Head Office), Office No 16, 3rd Floor, Sagar Arcade,  
              Fergusson College Road, Decan Gymkhana, Pune, Maharashtra - 411052  
            </p>
            <p className="text-sm mt-2">📞 +91 9309907928</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
          © {new Date().getFullYear()} All rights reserved | Peakprosys Solutions Pvt Ltd   
          <span className="mx-2">|</span>  
          <a href="#" className="hover:text-white">Privacy Policy</a>  
          <span className="mx-2">|</span>  
          <a href="#" className="hover:text-white">Disclaimer</a>  
          <span className="mx-2">|</span>  
          <a href="#" className="hover:text-white">FAQ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;