const FeaturesSection = () => {
  return (
    <section id="features" className="bg-blue-100 py-10 text-center">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="h-20 text-5xl font-bold text-blue-700">POWERFUL FEATURES</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mb-20">
            Comprehensive tools designed for every stakeholder in the educational ecosystem
        </p>
      </div>

      <div className="h-60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 px-5 text-left mb-30 ">
        <div className="bg-white p-10 rounded shadow ">
          <h3 className="font-bold">FOR STUDENTS</h3>
          <ul className="text-gray-600 mt-2 text-sm list-disc ">
            <li>Attendance Tracking</li>
            <li>Grade Management</li>
            <li>Learning Paths</li>
            <li>Gamification</li>
          </ul>
        </div>
        <div className="bg-white p-10 rounded shadow">
          <h3 className="font-bold">FOR TEACHERS</h3>
          <ul className="text-gray-600 mt-2 text-sm list-disc">
            <li>Lesson Planning</li>
            <li>Grading System</li>
            <li>Performance Analytics</li>
            <li>Resource Library</li>
          </ul>
        </div>
        <div className="bg-white p-10 rounded shadow">
          <h3 className="font-bold">FOR PARENTS</h3>
          <ul className="text-gray-600 mt-2 text-sm list-disc">
            <li>Real-Time Updates</li>
            <li>Fee Payment</li>
            <li>Teacher Communication</li>
            <li>Progress Tracking</li>
          </ul>
        </div>
        <div className="bg-white p-10 rounded shadow">
          <h3 className="font-bold">FOR ADMINS</h3>
          <ul className="text-gray-600 mt-2 text-sm list-disc">
            <li>Fee Management</li>
            <li>Transport System</li>
            <li>Hostel Management</li>
            <li>Reporting Tools</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;