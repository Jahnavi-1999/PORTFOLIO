import { Code, Database, MonitorSmartphone, Smile, Layers, Cloud, Shield, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming & Scripting",
    skills: ["C", "Python", "R", "HTML", "CSS", "JavaScript", "SQL", "PowerShell", "Bash"],
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Cloud Platforms & Infrastructure",
    skills: [
      "Azure (AD, VMs, LoadBalancer, VNet)",
      "AWS (EC2, S3, Lambda)",
      "VMware (vSphere, ESXi, vCenter)",
      ,
    ],
    icon: Cloud,
    color: "from-indigo-500 to-blue-700",
  },
  {
    title: "Operating Systems",
    skills: ["Linux", "Windows"],
    icon: Terminal,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "AI & ML",
    skills: [
      "Decision Tree",
      "Random Forest",
      "Confusion Matrix",
      "Kappa Statistic",
      "ANN",
      "TensorFlow",
      "Keras",
    ],
    icon: Layers,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Methodologies",
    skills: ["SDLC", "CI/CD", "Agile Methodologies", "ITIL Framework"],
    icon: Smile,
    color: "from-gray-500 to-gray-800",
  },
  {
    title: "IDEs & Tools",
    skills: ["R Studio", "Visual Studio Code"],
    icon: MonitorSmartphone,
    color: "from-teal-500 to-green-600",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const SkillsSection = () => {
  return (
    <section className="py-28 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Technical Skills
          </h2>
          <div className="h-1 w-24 bg-white mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical expertise and practical toolset.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-md`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mt-4">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="bg-white text-black text-sm px-4 py-1.5 rounded-full font-medium shadow hover:bg-gray-100 transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
