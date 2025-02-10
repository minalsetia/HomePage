import React, { useState } from "react";

const faqs = [
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy! Simply choose a plan that fits your institution's needs and our team will guide you through the setup process. We provide comprehensive training and support to ensure a smooth transition.",
  },
  {
    question: "Is the platform secure?",
    answer:
      "Yes! Our platform follows industry-standard security measures to protect your data and ensure privacy.",
  },
  {
    question: "What payment methods are supported?",
    answer: "We support credit/debit cards, bank transfers, and online wallets.",
  },
  {
    question: "Can I customize the features?",
    answer:
      "Yes! Our platform allows customization to meet your institution's unique requirements.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold text-blue-600">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <p className="text-gray-600 mt-2">
        FIND ANSWERS TO COMMON QUESTIONS ABOUT OUR PLATFORM
      </p>
      <div className="max-w-3xl mx-auto mt-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg mb-4 overflow-hidden"
          >
            <button
              className="w-full p-4 text-left font-semibold flex justify-between items-center bg-white"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-100 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Box */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg max-w-md mx-auto">
        <h3 className="text-lg font-semibold">Do you have more questions?</h3>
        <p className="text-gray-600 mt-2">
          End-to-end payments and our management in a single solution. Meet the
          right platform to help realize.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
          Shoot a Direct Mail
        </button>
      </div>
    </section>
  );
};

export default FAQSection;
