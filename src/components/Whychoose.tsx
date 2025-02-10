

const WhyChooseUs = () => {
  return (
    <section id="about" className="text-center py-16 bg-white">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="mt-20 mb-5 text-5xl font-bold text-blue-600">WHY CHOOSE US?</h2>
        <p className="text-gray-600 mt-2 uppercase tracking-wide text-sm mb-10">
          EMPOWERING SCHOOLS TO FOCUS ON EDUCATION WHILE WE HANDLE EVERYTHING ELSE
        </p>
      </div>
      <div className="h-80 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-6 mb-20">
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">Simplified School Operations</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Streamline administrative tasks and focus on what matters most - education.
          </p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">Advanced Technology Integration</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Leverage cutting-edge technology to enhance the learning experience.
          </p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">Trusted Worldwide</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Join thousands of institutions already benefiting from our platform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
