
import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Where are you based?",
      answer: "In Mexico and USA. Being a short flight away and in the same time zone greatly improves collaboration."
    },
    {
      question: "What's your QA process?",
      answer: "We automate testing and have a dedicated QA team."
    },
    {
      question: "How do you keep my IP safe?",
      answer: "We prioritize confidentiality and security using secure channels, NDAs, and best practice cybersecurity measures."
    },
    {
      question: "Can you adapt to my workflows?",
      answer: "Yes, we're flexible and can integrate into your existing workflows and tools."
    },
    {
      question: "My requirements are evolving",
      answer: "We use agile methodology to adapt to changing project requirements and business needs."
    },
    {
      question: "How do I start?",
      answer: "To start a project, contact us to assess your needs."
    },
    {
      question: "What's the cost?",
      answer: "We offer high value and high quality work, leveraging lower living costs without time zone issues."
    },
    {
      question: "How quickly can we start?",
      answer: "Projects typically start between 1-2 weeks after contract signing."
    },
    {
      question: "Can I talk to your customers?",
      answer: "Absolutely, we are happy to provide references."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="mb-4"
          style={{
            color: "#fff",
            fontFamily: "Inter, sans-serif",
            fontSize: "52px",
            fontWeight: 600,
            lineHeight: "52px",
            textTransform: "uppercase"
          }}
        >
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <p
          className="mb-12"
          style={{
            color: "#b3b3b3",
            fontFamily: "Inter, sans-serif",
            fontSize: "17px",
            fontWeight: 300,
            lineHeight: "24px"
          }}
        >
          If you have anything else you want to ask, reach out to us.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-4">
              <h3
                style={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: "20px"
                }}
              >
                {faq.question}
              </h3>
              <p
                className="mt-4"
                style={{
                  color: "#b3b3b3",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  lineHeight: "24px",
                  margin: "16px 0px 0px"
                }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
