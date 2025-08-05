import { motion } from "framer-motion";

const experiences = [
  {
    company: "Aditas Solutions",
    role: "Junior Cloud Engineer",
    location: "Illinois, United States",
    duration: "Apr 2025 - Jul 2025",
    logo: "/logos/aditas.png", // file placed in public/logos
    achievements: [
  "Set up Azure cloud infrastructure, configuring Virtual Networks, Storage Accounts, and Compute services to support scalable application architectures.",
  "Contributed to backend development by building RESTful APIs and integrating Azure services, enhancing application performance and reliability.",
  "Designed and implemented scalable microservices from scratch using Azure Kubernetes Service and Azure Functions, supporting 1M+ API requests/month with 99.99% availability.",
  "Automated cloud environment provisioning using ARM templates and Azure DevOps pipelines, cutting setup time by 70%.",
  "Led CI/CD implementation with automated test, rollback, and release processes, improving deployment frequency by 25%.",
  "Developed real-time monitoring dashboards and observability solutions using Azure Monitor & Application Insights, reducing MTTR by 40%.",
  "Collaborated across teams to design fault-tolerant, cost-effective solutions—balancing scalability, security, and business impact."
  ],


  },
  {
    company: "Capgemini Technology Services",
    role: "Software Engineer",
    location: "Hyderabad, India",
    duration: "Dec 2021 - Aug 2023",
    logo: "/logos/capgemini.png", // file placed in public/logos
    achievements: [
    "Managed 250+ VMware and Azure virtual servers, ensuring 99.9% uptime, improving system performance by 30%, and supporting hybrid cloud initiatives.",
    "Upgraded Windows Server environments (2012 R2/2016 to 2019) across Production and Non-Production sectors, implementing comprehensive patching and security protocols to safeguard infrastructures in line with ITIL best practices.",
    "Executed vMotion and sVmotion for VMs across production and non-production environments in VMware, demonstrating strong systems administration and automation expertise.",
    "Utilized VMware PowerCLI, vSphere, vCenter, and vRealize Log Insight to automate virtualization tasks while integrating PowerShell scripting where applicable.",
    "Implemented and maintained robust cloud security measures to protect network integrity, aligning with best practices in Access Management and Cloud Security.",
    "Conducted quarterly Disaster Recovery (DR) and Site Recovery Manager (SRM) testing, achieving 100% failover success and ensuring compliance with enterprise backup, high availability, and DR requirements.",
    "Optimized ESXi hosts and VM performance using RVTools analysis, managing vCPU allocation and VM migration strategies to support enhanced cloud operations.",
    "Collaborated with cross-functional teams, including storage, network, and application departments, to streamline cloud deployments and hybrid environments, reducing project delays by 35%.",
    "Mentored junior engineers on VMware best practices, boosting team efficiency by 20% and developing SOPs that reduced onboarding time by 40%.",
    "Implemented server upgrades and enforced security best practices, achieving 99.9% infrastructure uptime while boosting cloud security compliance",
    "Delivered L3 support for cloud and on-premises infrastructures, resolving critical issues within 24 hours, reducing downtime by 20%, and supporting CI/CD and SDLC processes."
  ],

  },
];

const ProfExp = () => {
  return (
    <section className="py-28 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold">Professional Experience</h2>
          <div className="h-1 w-28 bg-white mx-auto mt-4 rounded-full" />
        </div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Logo and Company Info */}
              <div className="flex items-center mb-6">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-14 h-14 object-contain rounded-lg mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                  <p className="text-lg text-gray-300 italic">{exp.role}</p>
                </div>
              </div>

              {/* Location & Duration */}
              <div className="text-gray-400 text-sm mb-4">
                <p>{exp.location}</p>
                <p>{exp.duration}</p>
              </div>

              {/* Achievements */}
              <ul className="list-disc pl-5 space-y-3 text-gray-300">
                {exp.achievements.map((achievement, i) => (
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

export default ProfExp;
