import React from "react";

const SmartSchool: React.FC = () => {
  return (
    <section className="bg-blue-100 py-12 text-center">
      <h2 className="text-2xl font-bold text-blue-600">EXPERIENCE THE POWER OF SMART SCHOOL MANAGEMENT!</h2>
      <p className="text-gray-600 mt-2">SEE HOW OUR PLATFORM TRANSFORMS EDUCATIONAL INSTITUTIONS</p>
      <div className="mt-6 flex justify-center">
        <div className="w-3/4 md:w-2/3 lg:w-1/2 bg-black h-64 flex items-center justify-center">
          <span className="text-purple-500 text-4xl">▶</span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-blue-600 mt-12">BENEFITS FOR EVERYONE</h3>
      <p className="text-gray-600">TAILORED SOLUTIONS FOR EVERY STAKEHOLDER IN THE EDUCATIONAL ECOSYSTEM</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 mx-4">
        {[
          { title: "FOR STUDENTS", benefits: ["Personalized Learning Paths", "Engaging Activities", "Real-Time Updates", "Progress Tracking"] },
          { title: "FOR TEACHERS", benefits: ["Automated Grading", "Efficient Scheduling", "Communication Tools", "Resource Management"] },
          { title: "FOR PARENTS", benefits: ["Progress Transparency", "Online Fee Payments", "Direct Teacher Contact", "Event Notifications"] },
          { title: "FOR ADMINS", benefits: ["Reduced Paperwork", "Data-Driven Decisions", "Cost Efficiency", "Automated Reporting"] },
        ].map((item, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg">
            <h4 className="font-bold text-gray-800">{item.title}</h4>
            <ul className="mt-2 text-gray-600 text-sm">
              {item.benefits.map((benefit, idx) => (
                <li key={idx}>• {benefit}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SmartSchool;
