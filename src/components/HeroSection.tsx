const HeroSection = () => {
  return (
    <section  className="text-center py-20 bg-gray-50">
      
      <div className="flex flex-col items-center justify-around text-center">
        <h2 className="text-6xl font-bold text-blue-600">REVOLUTION EDUCATION</h2>
        <p className="text-gray-600 mt-4 max-w-2xl">
          STREAMLINE ACADEMICS, ADMINISTRATION, AND COMMUNICATION WITH OUR SMART SCHOOL MANAGEMENT SOLUTIONS</p>
          </div>

      <div className="mt-6 space-x-15">
        <button className="bg-blue-500 text-white px-15 py-3 rounded-2xl shadow-2xl transition-all duration-300 transform hover:bg-blue-600 hover:shadow-xl hover:scale-105">Get Started</button>
        <button className="bg-gray-200 px-15 py-3 rounded-2xl inset-shadow-black transition-all duration-300 transform hover:bg-gray-300 hover:shadow-lg hover:scale-105">Explore Features</button>
      </div>

      <div className="flex justify-center mt-10 space-x-6">
        <div className="h-24 w-24 bg-blue-100 flex flex-col justify-center items-center rounded-md shadow">
          <div className="text-lg font-bold">500+</div>
          <div className="text-sm text-gray-600">School Managed</div>
        </div>
        <div className="h-24 w-24 bg-blue-100 flex flex-col justify-center items-center rounded-md shadow">
          <div className="text-lg font-bold">10K+</div>
          <div className="text-sm text-gray-600">Active User</div>
        </div>
        <div className="h-24 w-24 bg-blue-100 flex flex-col justify-center items-center rounded-md shadow">
          <div className="text-lg font-bold">98%</div>
          <div className="text-sm text-gray-600">Success Rate</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;