
const ExecutionSection = () => {
  const testimonials = [
    {
      quote: "Hashed continues to play a pivotal role after four years. They've built precise smart contracts, engaging UIs, and provided invaluable guidance. We highly recommend them as development partners.",
      author: "CONNOR IRISH",
      avatar: "CI"
    },
    {
      quote: "Hashed is part of our origin story. Together we built an international application that touches over $3B in private capital.",
      author: "CONNOR IRISH", 
      avatar: "CI"
    },
    {
      quote: "Innovative solutions and excellent service. Hashed made a real difference for us. We'll continue working with them.",
      author: "JUN DAM",
      avatar: "JD"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 max-w-4xl">
          EXECUTION IS EVERYTHING
        </h2>
        
        <p className="text-lg text-gray-300 mb-16 max-w-6xl leading-relaxed">
          Executing an idea takes focus and craftsmanship. Our goal is to build long term relationships with highly successful 
          companies. At Hashed, we recognize we can't deliver the outcomes we want with a high volume of projects. That's why we 
          focus on a maximum of 10 active partners. Let's build together.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-dark p-8">
              <div className="text-[#1DD1A1] text-4xl mb-6">"</div>
              <p className="text-white mb-8 leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-medium text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <span className="text-white font-medium tracking-wide">
                  {testimonial.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutionSection;
