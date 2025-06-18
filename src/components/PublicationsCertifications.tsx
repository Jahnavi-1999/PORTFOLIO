import { motion } from "framer-motion";
import CertificateCard from "./CertificateCard";

const PublicationsCertifications = () => {
  const certificates = [
    {
      title: "IRJAEH Publication",
      issuer: "International Research Journal of Advanced Engineering Hub",
      file: "IRJAEH PUBLICATION.pdf",
    },
    {
      title: "ICSEM Conference",
      issuer: "International Conference on Advancement in Science, Engineering and Management",
      file: "ICSEM CONFERENCE.pdf",
    },
    {
      title: "MERN Internship",
      issuer: "EY X Edunet Foundation",
      file: "NEXTGEN x EY.pdf",
    },
    {
      title: "AI Developer Internship",
      issuer: "IIITH x Swecha",
      file: "IIITH X SWECHA.pdf",
    },
    {
      title: "AI Bootcamp",
      issuer: "IIITH x Swecha",
      file: "SWECHA BOOTCAMP.pdf",
    },
    {
      title: "Forage Developer Job Simulation",
      issuer: "Accenture",
      file: "FORAGE ACCENTURE.pdf",
    },
    {
      title: "Natural Language Processing",
      issuer: "Great Learning",
      file: "NLP.pdf",
    },
    {
      title: "Robo Code Hackathon",
      issuer: "College Hackathon",
      file: "ROBO CODE HACKATHON.pdf",
    },
    {
      title: "ANN Workshop",
      issuer: "College Workshop",
      file: "ANN WORKSHOP.pdf",
    },
  ];

  return (
    <section
      id="publications"
      className="py-28 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold">Publications & Certifications</h2>
          <div className="h-1 w-28 bg-white mx-auto mt-4 rounded-full" />
        </div>

        {/* Publication Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-white text-black p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-3">PUBLICATIONS</h3>
            <p className="mb-2 text-lg">
              <strong>Lead Author</strong> - “Automated Brain Tumor Classification Using Hybrid Deep Learning Models”
            </p>
            <p className="text-sm text-gray-600 italic mb-4">
              Published in IRJAEH (International Research Journal of Advanced Engineering Hub)
            </p>
            <a
              href="https://doi.org/10.47392/IRJAEH.2025.0318"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 text-sm font-medium bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
              View Publication
            </a>
          </div>
        </motion.div>

        {/* Certificate Grid Container */}
      {/* Certificate Grid Container */}
<div className="bg-gradient-to-br from-black via-gray-900 to-black text-white p-4 sm:p-6 lg:p-8 rounded-3xl border border-white/10">
  <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center">CERTIFICATES</h3>
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {certificates.map((cert, idx) => (
      <CertificateCard
        key={idx}
        title={cert.title}
        issuer={cert.issuer}
        file={cert.file}
      />
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default PublicationsCertifications;
