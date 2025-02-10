

const enhancements = [
  "Feature like Zoom: Where Teacher Schedule Extra classes on this.",
  "Feature like Exile Draw & Build-in Notes and Assignments: Advanced collaboration tools and efficient academic integration.",
  "Feature to Build PRQ with Solutions & Student Grade Cards: Seamless educational resource generation and performance tracking.",
  "Integration of advanced analytics for tracking and decision-making.",
  "Custom workflows to adapt to specific organizational needs.",
  "Multi-device support for consistent user experience across devices.",
  "Offline functionality for uninterrupted usage in low-connectivity areas.",
  "Voice-controlled commands for accessibility and enhanced usability.",
  "Enhanced AI-based recommendations for personalized experiences.",
];

const FutureEnhancements = () => {
  return (
    <section className="py-16 bg-blue-50 text-white flex justify-center">
      <div className="bg-blue-500 p-6 rounded-lg max-w-3xl w-full">
        <h2 className="text-xl font-bold mb-4">Future Enhancements</h2>
        <ul className="list-decimal list-inside space-y-2">
          {enhancements.map((enhancement, index) => (
            <li key={index} className="text-sm">{enhancement}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FutureEnhancements;
