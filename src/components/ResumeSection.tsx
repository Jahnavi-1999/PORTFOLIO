import { Button } from "@/components/ui/button";
import { Download, FileText, Award, User } from "lucide-react";

const ResumeSection = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/ASHRITH%20SAMBARAJU.pdf"; // URL-safe file name
    link.download = "Ashrith_Sambaraju_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Resume</h2>
            <div className="h-1 w-24 bg-white mx-auto rounded-full mb-6"></div>
          </div>

          <div className="bg-white text-black p-12 rounded-3xl shadow-xl mb-12">
            <div className="w-24 h-24 bg-black rounded-2xl flex items-center justify-center mx-auto mb-8">
              <FileText className="w-12 h-12 text-white" />
            </div>

            <h3 className="text-3xl font-bold mb-4 text-center">Complete Professional Profile</h3>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Download my comprehensive resume to explore my complete background, education, 
              detailed project descriptions, and professional achievements.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10 text-gray-800">
              <div className="flex items-center gap-3 justify-center">
                <User className="w-6 h-6 text-gray-700" />
                <span className="font-medium">Complete Background</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Award className="w-6 h-6 text-gray-700" />
                <span className="font-medium">Achievements</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <FileText className="w-6 h-6 text-gray-700" />
                <span className="font-medium">Project Details</span>
              </div>
            </div>

            <Button
              onClick={handleDownloadResume}
              className="bg-black text-white hover:bg-gray-800 px-12 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <Download className="w-6 h-6" />
              Download Resume (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
