

const testimonials = [
  {
    name: "Rajneesh Rana",
    role: "School Principal",
    feedback:
      "This platform has revolutionized how we manage our school. The efficiency gains are remarkable!",
    rating: 5,
    stat: "IMPROVED ATTENDANCE BY 20%",
  },
  {
    name: "Mihir Jain",
    role: "Teacher",
    feedback:
      "The grading and attendance features save me hours every week. Highly recommended!",
    rating: 5,
    stat: "95% PARENT ENGAGEMENT RATE",
  },
  {
    name: "Rohit Kumar",
    role: "School Principal",
    feedback:
      "The grading and attendance features save me hours every week. Highly recommended!",
    rating: 5,
    stat: "REDUCED ADMINISTRATIVE TIME BY 40%",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="text-center py-16 bg-white">
      <h2 className="text-5xl font-bold text-blue-600 mb-10">WHAT OUR HAPPY USER SAYS</h2>
      <p className="text-gray-600 mt-2 text-sm mb-10">
        REAL FEEDBACK FROM EDUCATORS, PARENTS, AND ADMINISTRATORS
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-8 px-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md max-w-sm border border-gray-200"
          >
            <div className="flex justify-center text-yellow-500">
              {"★".repeat(testimonial.rating)}
            </div>
            <p className="text-gray-700 mt-4">{testimonial.feedback}</p>
            <div className="mt-4 text-gray-600">
              <strong>{testimonial.name}</strong>
              <p className="text-sm">{testimonial.role}</p>
            </div>
            <p className="text-blue-600 font-semibold mt-4">
              {testimonial.stat}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
