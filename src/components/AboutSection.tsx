const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="neural-heading text-4xl md:text-5xl mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neural-primary to-neural-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="glass-card p-8" data-aos="fade-right">
            <h3 className="neural-subheading text-2xl mb-6">Passionate Explorer</h3>
            <div className="neural-text space-y-4">
              <p>
                I'm a dedicated Computer Science student at Ho Chi Minh City University of Technology, 
                driven by an insatiable curiosity for artificial intelligence and modern software infrastructure.
              </p>
              <p>
                My journey spans across cutting-edge domains including 
                <span className="text-neural-primary font-semibold"> Natural Language Processing (NLP)</span>, 
                <span className="text-neural-primary font-semibold"> Large Language Models (LLM)</span>, 
                <span className="text-neural-primary font-semibold"> Computer Vision (CV)</span>, and 
                <span className="text-neural-primary font-semibold"> Generative AI</span>.
              </p>
              <p>
                Beyond AI, I'm passionate about building robust, scalable systems through 
                <span className="text-neural-secondary font-semibold"> DevOps practices</span> and 
                <span className="text-neural-secondary font-semibold"> Cloud Computing</span>, 
                bridging the gap between innovative algorithms and production-ready solutions.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="mt-8">
              <h4 className="neural-subheading text-lg mb-4">Core Interests</h4>
              <div className="flex flex-wrap">
                {[
                  'Neural Networks', 'Deep Learning', 'NLP', 'Computer Vision',
                  'GenAI', 'Docker', 'Kubernetes', 'AWS', 'System Design', 
                  'Python', 'TensorFlow', 'PyTorch', 'CI/CD'
                ].map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="glass-card p-8" data-aos="fade-left">
            <h3 className="neural-subheading text-2xl mb-8">Education Journey</h3>
            
            <div className="space-y-8">
              {/* Current Education */}
              <div className="timeline-item pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className="neural-subheading text-lg">Computer Science Student</h4>
                  <span className="text-neural-primary font-semibold text-sm">2023 - Present</span>
                </div>
                <p className="text-neural-primary font-medium mb-2">
                  Ho Chi Minh City University of Technology
                </p>
                <p className="neural-text text-sm">
                  Specializing in Artificial Intelligence and Software Engineering. 
                  Active in research projects involving deep learning applications 
                  and modern software development practices.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-neural-primary/20 text-neural-primary rounded">
                    AI Research
                  </span>
                  <span className="text-xs px-2 py-1 bg-neural-primary/20 text-neural-primary rounded">
                    Machine Learning
                  </span>
                  <span className="text-xs px-2 py-1 bg-neural-primary/20 text-neural-primary rounded">
                    Software Engineering
                  </span>
                </div>
              </div>

              {/* High School */}
              <div className="timeline-item">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className="neural-subheading text-lg">High School Graduate</h4>
                  <span className="text-neural-secondary font-semibold text-sm">2020 - 2023</span>
                </div>
                <p className="text-neural-secondary font-medium mb-2">
                  Gia Dinh High School - Mathematics Major
                </p>
                <p className="neural-text text-sm">
                  Graduated with honors in Mathematics major, developing strong 
                  analytical and problem-solving skills that now fuel my passion 
                  for algorithmic thinking and mathematical modeling in AI.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-neural-secondary/20 text-neural-secondary rounded">
                    Mathematics
                  </span>
                  <span className="text-xs px-2 py-1 bg-neural-secondary/20 text-neural-secondary rounded">
                    Logic & Analysis
                  </span>
                  <span className="text-xs px-2 py-1 bg-neural-secondary/20 text-neural-secondary rounded">
                    Problem Solving
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;