import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, CheckCircle } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "VISWAM AI (IIIT-H X Swecha)",
      role: "AI Developer Intern",
      duration: "May 2025 - Present",
      logo: "/logos/viswam_logo.png",
      contributions: [
        "Contributing to open-source AI projects addressing real-world challenges in the Global South",
        "Hands-on experience with Python, collaborative development, and DevOps practices",
        "Deploying community-driven AI solutions for social impact"
      ]
    },
    {
      company: "NextGen Edunet Foundation X EY",
      role: "MERN Stack Intern",
      duration: "March 2025 - April 2025",
      logo: "/logos/ey_logo.png",
      contributions: [
        "Built a dynamic e-commerce web application using the MERN stack",
        "Implemented user authentication and efficient product management",
        "Focused on delivering a seamless and responsive user experience"
      ]
    },
    {
      company: "International Institute of Information Technology (IIIT-H) X Swecha",
      role: "AI Developer Intern",
      duration: "May 2024 - June 2024",
      logo: "/logos/swecha_logo.png",
      contributions: [
        "Participated in a 5-day workshop at IIIT-Hyderabad as part of the internship program",
        "Developed AI-driven solutions for cultural preservation",
        "Explored deep learning and generative AI with transformer models"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Professional Experience</h2>
          <div className="h-1 w-24 bg-white mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Building expertise through hands-on industry experience
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-white text-black hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 overflow-hidden"
            >
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-9 h-9 object-contain"
                      />
                    ) : null}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold mb-2">{exp.role}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-gray-700 mb-2">
                      {exp.company}
                    </CardDescription>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {exp.contributions.map((contribution, contribIndex) => (
                    <div key={contribIndex} className="flex items-start gap-4 group">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-gray-700 leading-relaxed">{contribution}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
