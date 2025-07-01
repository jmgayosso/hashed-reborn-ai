
const ClientsSection = () => {
  const clients = [
    { name: "BitCash", logo: "$" },
    { name: "PRXY", logo: "PRXY" },
    { name: "Citi", logo: "citi" },
    { name: "SPS Commerce", logo: "SPS" },
    { name: "Hypho", logo: "Hypho" },
    { name: "Credit Suisse", logo: "CS" },
    { name: "Diamond Standard", logo: "◊" },
    { name: "Snowflake", logo: "❄" }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-[#32e4b6] mb-16">
          Clients.
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="text-white/60 hover:text-white/80 transition-colors font-medium text-lg">
                {client.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
