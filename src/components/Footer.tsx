import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div>
            <h2 className="text-lg font-bold flex items-center">
              <span className="text-green-500 text-2xl mr-2">▲</span> academicsPro
            </h2>
          </div>

          {/* Service & Company Section */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold">Service</h3>
              <ul className="mt-2 space-y-1 text-gray-400 text-sm">
                <li>sdaaas</li>
                <li>adadwadwa</li>
                <li>asvavavadv</li>
                <li>ascascadas</li>
                <li>acscasxasc</li>
                <li>acecaffa</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="mt-2 space-y-1 text-gray-400 text-sm">
                <li>wfdsfda</li>
                <li>afaefojvbvc</li>
                <li>aedfaefasf</li>
                <li>vsfdetdasf</li>
                <li>awfefafef</li>
                <li>aefafgogog</li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold">Join a Newsletter</h3>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-2 rounded-l-md text-black w-full"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-md">Subscribe</button>
            </div>
            <div className="flex space-x-3 mt-3">
              <FaFacebookF className="cursor-pointer" />
              <FaLinkedinIn className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <p>Copyright AcademicsPro</p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <FaMapMarkerAlt />
              <span>Samalkha Panipat, Haryana</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaEnvelope />
              <span>xyz123@gmail.com</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaPhoneAlt />
              <span>+91 0123456789</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;