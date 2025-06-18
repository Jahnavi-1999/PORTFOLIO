import { motion } from "framer-motion";

type CertificateCardProps = {
  title: string;
  issuer: string;
  file: string;
};

const CertificateCard = ({ title, issuer, file }: CertificateCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white text-black p-6 rounded-2xl shadow-md hover:shadow-[0_4px_30px_rgba(0,0,0,0.15)] transform transition duration-300 flex flex-col justify-between"
    >
      <div>
        <h4 className="text-lg font-semibold mb-1">{title}</h4>
        <p className="text-sm text-gray-600 mb-4">{issuer}</p>
      </div>
      <div className="mt-auto flex justify-center">
        <a
          href={`/certificates/${file}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 text-sm font-medium bg-black text-white rounded-full hover:bg-gray-800 transition"
        >
          View Certificate
        </a>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
