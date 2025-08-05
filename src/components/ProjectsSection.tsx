import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Brain, Activity, BarChart3 } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Powered Brain Tumor Detection using Hybrid Deep Learning Models",
      description:
        "AI-driven brain tumor detection system using a hybrid VGG16–ResNet-50–EfficientNetB2 model with Grad-CAM. It uses a dual-input approach to analyze MRI scans and symptoms, and includes symptom screening, treatment suggestions, and PDF report generation.",
      techStack: [
        "TensorFlow",
        "OpenCV",
        "VGG16",
        "ResNet-50",
        "EfficientNetB2",
        "Grad-CAM",
        "Streamlit",
      ],
      github: "https://github.com/Jahnavi-1999/AI-POWERED-BRAIN-TUMOR-DETECTION-AND-TREATMENT-RECOMMENDATION-SYSTEM",
      icon: Brain,
      iconColor: "text-yellow-300", // Bright yellow for emphasis
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Alzheimer's Disease Detection using Machine Learning",
      description:
        "AI-driven Alzheimer’s diagnosis tool using a custom CNN model. The system analyzes brain MRI scans to classify dementia stages, provides confidence scores, doctor-style recommendations, and generates downloadable reports—all through a privacy-compliant Streamlit interface.",
      techStack: [
        "TensorFlow",
        "Keras",
        "OpenCV",
        "Pillow",
        "NumPy",
        "Pandas",
        "Custom CNN",
        "Streamlit",
      ],
      github: "https://github.com/Jahnavi-1999/Alzheimer-s-Disease-Detection-using-ML",
      icon: Activity,
      iconColor: "text-green-300", // Green for medical/monitoring theme
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      title: "Performance Evaluation of Classifier Models Using R",
      description:
        "Developed and evaluated multiple machine learning classifier models in R, analyzing performance metrics to determine the most effective techniques for predictive tasks. Focused on data preprocessing, model training, and comparative evaluation.",
      techStack: ["R", "Caret", "RandomForest", "ggplot2", "Data Preprocessing"],
      github: "https://github.com/Jahnavi-1999/Performance-Evaluation-of-Classfier-Models-Using-R",
      icon: BarChart3,
      iconColor: "text-pink-300", // Pink for analytics & visualization
      gradient: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Featured Projects</h2>
          <div className="h-1 w-24 bg-white mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical skills and creative problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white text-black hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 border-0 overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <project.icon className={`w-8 h-8 ${project.iconColor}`} />
                </div>
                <CardTitle className="text-xl font-bold leading-tight group-hover:text-gray-700 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full font-medium hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      size="sm"
                      className="w-full bg-black text-white hover:bg-gray-800 flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
