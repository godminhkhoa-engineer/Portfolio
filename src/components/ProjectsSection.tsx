import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

const ProjectsSection = () => {
  // Real projects from khoalearningcode GitHub profile
  const projects: Project[] = [
    // {
    //   id: 1,
    //   title: "Deep Residual Learning Implementation",
    //   description: "Implementation of Deep Residual Networks (ResNet) for image classification tasks. Exploring the power of skip connections and deep architectures in computer vision applications.",
    //   technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib", "Jupyter"],
    //   githubUrl: "https://github.com/khoalearningcode/Deep_residual_Learning",
    //   featured: true
    // },
    // {
    //   id: 2,
    //   title: "LLM Twin Course - Production Ready System",
    //   description: "Learn to build an end-to-end production-ready LLM & RAG system using LLMOps best practices. Complete with source code and 12 hands-on lessons for building intelligent applications.",
    //   technologies: ["Python", "LLM", "RAG", "LLMOps", "MLOps", "Production"],
    //   githubUrl: "https://github.com/khoalearningcode/llm-twin-course",
    //   featured: true
    // },
    {
      id: 1,
      title: "Traffic Sign Recognition System",
      description: "Deep Learning-based Traffic Sign Recognition system using CNN architecture. Built with TensorFlow and Keras for accurate classification of traffic signs with real-world applications.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN", "Computer Vision"],
      githubUrl: "https://github.com/khoalearningcode/traffic_sign_recognition",
      liveUrl: "https://github.com/khoalearningcode/traffic_sign_recognition"
    },
    {
      id: 2,
      title: "Spring Boot Non-JWT Application",
      description: "Full-stack web application built with Spring Boot framework, implementing secure authentication without JWT tokens. Features modern backend architecture and RESTful API design.",
      technologies: ["Java", "Spring Boot", "Spring Security", "Maven", "REST API", "Backend"],
      githubUrl: "https://github.com/khoalearningcode/spring-boot-non-jwt-vscode"
    },
    // {
    //   id: 5,
    //   title: "YOLO Darknet Object Detection",
    //   description: "Implementation of YOLOv4/Scaled-YOLOv4 neural networks for real-time object detection. Supports both Windows and Linux environments with high-performance detection capabilities.",
    //   technologies: ["C", "YOLO", "Computer Vision", "Object Detection", "Neural Networks", "OpenCV"],
    //   githubUrl: "https://github.com/khoalearningcode/darknet",
    //   liveUrl: "https://github.com/khoalearningcode/darknet"
    // },
    {
      id: 3,
      title: "Pacman AI Game",
      description: "Classic Pacman game implementation with AI algorithms. Exploring game theory, pathfinding algorithms, and intelligent agent behavior in a fun, interactive environment.",
      technologies: ["Python", "AI Algorithms", "Game Development", "Pathfinding", "Pygame", "Logic"],
      githubUrl: "https://github.com/khoalearningcode/pacman"
    },
    {
      id: 4,
      title: "Final IEE Project",
      description: "Comprehensive final project for Industrial & Electrical Engineering course. Implementing advanced engineering concepts with practical applications and real-world problem solving.",
      technologies: ["Jupyter Notebook", "Engineering", "Data Analysis", "Research", "Mathematics", "Simulation"],
      githubUrl: "https://github.com/khoalearningcode/Final_Project_IEE"
    }
    // {
    //   id: 8,
    //   title: "Transformers Vision Models",
    //   description: "Collection of inference and fine-tuning examples for vision models from Hugging Face Transformers. Exploring state-of-the-art transformer architectures for computer vision tasks.",
    //   technologies: ["Python", "Transformers", "Hugging Face", "Computer Vision", "PyTorch", "Fine-tuning"],
    //   githubUrl: "https://github.com/khoalearningcode/transformers-notebooks"
    // }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-neural-dark/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="neural-heading text-4xl md:text-5xl mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="neural-text text-xl max-w-3xl mx-auto mb-8">
            Explore my journey through AI research, DevOps automation, and full-stack development. 
            Each project represents a step forward in building intelligent, scalable solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neural-primary to-neural-secondary mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`glass-card p-6 h-full flex flex-col ${
                project.featured ? 'lg:col-span-1 md:col-span-1' : ''
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Project Header */}
              <div className="mb-4">
                {project.featured && (
                  <span className="inline-block px-3 py-1 text-xs font-bold bg-gradient-to-r from-neural-primary to-neural-secondary text-neural-dark rounded-full mb-3">
                    FEATURED
                  </span>
                )}
                <h3 className="neural-subheading text-xl mb-3 line-clamp-2">
                  {project.title}
                </h3>
              </div>

              {/* Project Description */}
              <p className="neural-text text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs px-2 py-1 bg-neural-primary/10 border border-neural-primary/30 text-neural-primary rounded-md hover:bg-neural-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex gap-4 mt-auto">
                <a 
                  href={project.githubUrl}
                  className="flex items-center gap-2 neural-link text-sm font-medium hover:scale-105 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} />
                  Code
                </a>
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    className="flex items-center gap-2 neural-link text-sm font-medium hover:scale-105 transition-transform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16" data-aos="fade-up">
          <p className="neural-text mb-6">
            Want to see more? Check out my complete project portfolio on GitHub with 20+ repositories covering AI, Machine Learning, and DevOps.
          </p>
          <a 
            href="https://github.com/khoalearningcode"
            target="_blank"
            rel="noopener noreferrer"
            className="neural-button inline-flex items-center gap-3"
          >
            <Github size={20} />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;