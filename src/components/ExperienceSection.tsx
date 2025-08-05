import { motion } from "framer-motion";

const internships = [
  {
    company: "Bharat Dynamics Limited (BDL)",
    role: "Application Developer Intern",
    location: "India",
    duration: "2019",
    logo: "/logos/bdl.png", // Place logo in public/logos
    achievements: [
    "Simplified public access to government scheme information, reducing manual work and increasing usability.",
    "Developed a system enabling users and faculty to effortlessly view their profiles and access relevant information.",
    "Implemented profile-based access so individuals can easily retrieve their own details when needed.",
    "Streamlined the process for confused or first-time users, ensuring they could readily benefit from the system without manual intervention."
  ],

  },
  {
    company: "Electronics Corporation of India Limited (ECIL)",
    role: "Application Developer Intern",
    location: "India",
    duration: "2019",
    logo: "/logos/ecil.png", // Place logo in public/logos
    achievements: [
      "Built a travel bill tracking system with receipt capture and offline access, enabling reliability in low-connectivity environments.",
      "Conducted comprehensive testing and validation to ensure functionality and reduce bugs in deployment.",
      "Designed a modular database schema to support multiple user roles and permission levels, improving security and maintainability.",
    ],
  },
];

const InternshipSection = () => {
  return (
    <section className="py-28 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold">Internships</h2>
          <div className="h-1 w-28 bg-white mx-auto mt-4 rounded-full" />
        </div>

        {/* Internship Cards */}
        <div className="space-y-12">
          {internships.map((intern, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Logo & Company Info */}
              <div className="flex items-center mb-6">
                {intern.logo && (
                  <img
                    src={intern.logo}
                    alt={`${intern.company} logo`}
                    className="w-14 h-14 object-contain rounded-lg mr-4"
                  />
                )}
                <div>
                  <h3 className="text-2xl font-bold text-white">{intern.company}</h3>
                  <p className="text-lg text-gray-300 italic">{intern.role}</p>
                </div>
              </div>

              {/* Location & Duration */}
              <div className="text-gray-400 text-sm mb-4">
                <p>{intern.location}</p>
                <p>{intern.duration}</p>
              </div>

              {/* Achievements */}
              <ul className="list-disc pl-5 space-y-3 text-gray-300">
                {intern.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
