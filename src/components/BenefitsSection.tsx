

const BenefitsSection = () => {
  return (
    <section className="text-center py-16 bg-white">
        <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-5xl font-bold text-blue-600 mb-10">BENEFITS FOR EVERYONE</h2>
        <p className="text-gray-600 mt-2 text-s mb-20">
          TAILORED SOLUTIONS FOR EVERY STAKEHOLDER IN THE EDUCATIONAL ECOSYSTEM
        </p>
      </div>
      <div className="h-60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 px-5 text-left mb-30 ">
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg">FOR STUDENTS</h3>
          <ul className="text-gray-600 mt-2 text-sm list-disc">
            <li>Personalized Learning Paths</li>
            <li>Engaging Activities</li>
            <li>Real-Time Updates</li>
            <li>Progress Tracking</li>
          </ul>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg">FOR TEACHERS</h3>
          <ul className="text-gray-600 mt-2 text-sm list-disc">
            <li>Automated Grading</li>
            <li>Efficient Scheduling</li>
            <li>Communication Tools</li>
            <li>Resource Management</li>
          </ul>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg">FOR PARENTS</h3>
          <ul className="text-gray-600 mt-2 text-sm">
            <li>Progress Transparency</li>
            <li>Online Fee Payments</li>
            <li>Direct Teacher Contact</li>
            <li>Event Notifications</li>
          </ul>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg">FOR ADMINS</h3>
          <ul className="text-gray-600 mt-2 text-sm">
            <li>Reduced Paperwork</li>
            <li>Data-Driven Decisions</li>
            <li>Cost Efficiency</li>
            <li>Automated Reporting</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
