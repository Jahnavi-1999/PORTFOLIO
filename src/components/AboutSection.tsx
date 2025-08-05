import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-28 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-5xl mx-auto rounded-3xl bg-white text-black shadow-xl px-10 py-16">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold font-sans text-black">About Me</h2>
          <p className="mt-3 text-lg text-gray-600 max-w-xl mx-auto">
            Cloud Engineer and Software Developer passionate about building secure and scalable solutions.
          </p>
          <div className="h-1 w-24 bg-black mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid md:grid-cols-2 gap-14 items-stretch">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 leading-relaxed text-gray-700 font-sans text-justify">
              <p>
                Hi, I’m Jahnavi Sambaraju — a Microsoft Certified: Azure Administrator Associate with around 3 years 
                of professional experience in both cloud engineering and software development. I enjoy working at the 
                intersection of technology and problem-solving, designing solutions that are not only reliable but also impactful.
              </p>
              <p>
                Over the course of my career, I’ve contributed to modernizing cloud infrastructure, developing cloud-native 
                applications, and collaborating with teams to deliver secure and efficient systems. My approach blends technical 
                precision with a focus on scalability and long-term sustainability.
              </p>
              <p>
                I’m also curious about Artificial Intelligence and how it can be integrated into cloud platforms to create 
                smarter, more adaptive systems.
              </p>
              <p>
                When I’m not immersed in technology, I enjoy reading books and drawing activities that spark creativity 
                and help me maintain balance.
              </p>
            </div>
          </motion.div>

          {/* Profile Logo Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="bg-[#111827] p-10 rounded-3xl border border-[#1f2937] text-center shadow-md text-white h-full flex flex-col justify-center">
              <img
                src="/preview.png"
                alt="Jahnavi Sambaraju Logo"
                className="w-32 h-32 mx-auto mb-4 rounded-full object-contain border-4 border-white bg-white"
              />
              <h3 className="text-lg font-semibold text-white">
                Transforming ideas into impact, one solution at a time.
              </h3>
              <p className="text-sm text-gray-300 mt-3">
                Dedicated to cloud engineering, software development, and exploring AI to push the boundaries of technology.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
