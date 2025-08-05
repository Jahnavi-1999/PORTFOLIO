import { motion } from "framer-motion";

const PublicationsCertifications = () => {
  const certifications = [
    {
<<<<<<< HEAD
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      link: "https://learn.microsoft.com/en-us/users/jahnavisambaraju-5538/credentials/af46088cc4fe456?ref=https%3A%2F%2Fwww.linkedin.com%2F",
=======
    title: "AWS Essentials: A Complete Beginner's Guide",
    issuer: "Udemy",
    file: "AWS - UDEMY.pdf",
    },
    {
      title: "IRJAEH Publication",
      issuer: "International Research Journal of Advanced Engineering Hub",
      file: "IRJAEH PUBLICATION.pdf",
>>>>>>> 87994b4241503303bc618d1d9aaa3890b76dcf85
    },
    {
      title: "ITIL 4 Exam Preparation",
      issuer: "Coursera",
      link: "https://www.coursera.org/verify/NHHT3FJQMBD6",
    },
     {
    title: "Introduction to CyberSecurity",
    issuer: "Cisco",
    file: "CISCO.pdf",
  },
  ];

  return (
    <section
      id="certifications"
      className="py-28 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold">Certifications</h2>
          <div className="h-1 w-28 bg-white mx-auto mt-4 rounded-full" />
        </div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white text-black p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-3">{cert.title}</h3>
                <p className="text-sm text-gray-600 italic">
                  Issued by {cert.issuer}
                </p>
              </div>
              <div className="mt-6 text-center">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 text-sm font-medium bg-black text-white rounded-full hover:bg-gray-800 transition"
                >
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsCertifications;
