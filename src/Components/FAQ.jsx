
import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

// Main App component to hold the FAQ section
export  function FAQSection() {
  const faqItems = [
    {
      question: "What services do you offer as a Chartered Accountant firm?",
      answer: "We offer a wide range of services including financial audit, tax planning and compliance, GST filing, business advisory, and company formation services tailored to meet your specific needs."
    },
    {
      question: "How do I know which services I need for my business?",
      answer: "We recommend a consultation to assess your business requirements. Our experts can analyze your financial situation and provide a personalized plan to help you achieve your goals efficiently."
    },
    {
      question: "Do you provide GST filing and compliance services?",
      answer: "Yes, we provide comprehensive GST filing and compliance services, ensuring your business stays compliant with all regulatory requirements and avoids penalties."
    },
    {
      question: "How do I file my income tax returns through your firm?",
      answer: "You can file your income tax returns with us by providing the necessary documents. We will handle the entire process from start to finish, ensuring accuracy and timely submission."
    },
    {
      question: "What documents are required for income tax filing?",
      answer: "Common documents required for income tax filing include Form 16/16A, bank statements, investment proofs, and any other relevant financial documents. We will provide a detailed checklist based on your specific case."
    },
  ];

   return (
    <div className="app-container">

           <div className="faq-section">
        <h1 className="faq-title">
          Frequently Asked Questions
        </h1>
        <div className="faq-container">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isLast={index === faqItems.length - 1}
            />
          ))}
        </div>
        <div className="know-more-button-container">
          <button className="know-more-button">
            Know More
          </button>
        </div>
      </div>
    </div>

    
    
  );
}

// FAQItem component to handle individual question/answer rows
function FAQItem({ question, answer, isLast }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isLast ? 'last-item' : ''}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="faq-button"
      >
        <span className="faq-question">
          <span className="bold-first-word">{question.split(" ")[0]}</span> {question.substring(question.indexOf(" ") + 1)}
        </span>
        <div className={`icon-container ${isOpen ? 'open' : ''}`}>
          <Plus size={16} strokeWidth={2.5} />
        </div>
      </button>
      <div className={`faq-answer-container ${isOpen ? 'open' : ''}`}>
        <p className="faq-answer">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default FAQSection