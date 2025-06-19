import React from 'react';

const faqs = [
  {
    question: 'What is Keploy?',
    answer: 'Keploy is an open-source tool that generates tests by recording real API calls, making it easier to automate unit, integration, and API tests.',
  },
  {
    question: 'How do I integrate Keploy in my project?',
    answer: 'You can integrate Keploy via its SDK or CLI, depending on your preferred language. Quickstart guides are available in the docs.',
  },
  {
    question: 'Does Keploy support CI/CD pipelines?',
    answer: 'Yes, Keploy can be integrated into your CI/CD pipelines for automated testing workflows.',
  },
  {
    question: 'Can I contribute to Keploy?',
    answer: 'Absolutely! You can contribute via GitHub by picking an open issue or submitting improvements to docs, UI, or features.',
  },
];

const FAQSection = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4 border rounded-md shadow hover:shadow-md transition">
            <h3 className="font-semibold">{faq.question}</h3>
            <p className="text-sm mt-2 text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
