import { 
  Mail, 
  Phone, 
  Linkedin, 
  Instagram, 
  Facebook, 
  Github,
  University,
  Send
} from 'lucide-react';

const ContactSection = () => {
  const socialLinks = [
    {
      name: 'University Email',
      icon: University,
      url: 'mailto:khoa.caoleminh@hcmut.edu.vn',
      color: 'text-neural-primary'
    },
    {
      name: 'Personal Email', 
      icon: Mail,
      url: 'mailto:godminhkhoa@gmail.com',
      color: 'text-neural-primary'
    },
    {
      name: 'Phone',
      icon: Phone,
      url: 'tel:+84123456789',
      color: 'text-neural-secondary'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/cao-khoa-1b09141b8',
      color: 'text-neural-primary'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/khoalearningcode', 
      color: 'text-neural-glow'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/caokhoa298',
      color: 'text-neural-secondary'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/caokhoa.140',
      color: 'text-neural-primary'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="neural-heading text-4xl md:text-5xl mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="neural-text text-xl max-w-2xl mx-auto mb-8">
            Ready to collaborate on cutting-edge AI projects or discuss the latest in DevOps? 
            I'm always excited to connect with fellow tech enthusiasts and innovators.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neural-primary to-neural-secondary mx-auto rounded-full"></div>
        </div>

        {/* Contact Grid */}
        <div className="glass-card p-8 mb-12" data-aos="fade-up" data-aos-delay="200">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : '_self'}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="group flex flex-row items-center gap-4 p-4"
                  data-aos="zoom-in"
                  data-aos-delay={300 + index * 100}
                >
                  {/* Icon trong hình tròn to */}
                  <div className="w-14 h-14 rounded-full border border-neural-primary flex items-center justify-center">
                    <IconComponent 
                      size={28} 
                      className={`${link.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>

                  {/* Text bên cạnh */}
                  <div>
                    <span className="neural-text text-base font-medium group-hover:text-neural-glow transition-colors block">
                      {link.name}
                    </span>
                    {link.url.startsWith("mailto:") && (
                      <p className="text-sm text-gray-400">
                        {link.url.replace("mailto:", "")}
                      </p>
                    )}
                    {link.url.startsWith("tel:") && (
                      <p className="text-sm text-gray-400">
                        {link.url.replace("tel:", "")}
                      </p>
                    )}
                    {link.url.startsWith("http") && (
                      <p className="text-sm text-gray-400 truncate max-w-xs">
                        {link.url}
                      </p>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Contact Message */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <div className="glass-card p-8">
            <div className="flex items-center justify-center mb-4">
              <Send size={24} className="text-neural-primary mr-3" />
              <h3 className="neural-subheading text-xl">Quick Message</h3>
            </div>
            <p className="neural-text mb-6 max-w-2xl mx-auto">
              Have a specific project in mind or want to discuss collaboration opportunities? 
              Feel free to reach out directly via email or connect with me on social media.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:godminhkhoa@gmail.com?subject=Collaboration Opportunity&body=Hi Khoa,%0D%0A%0D%0AI'd like to discuss a potential collaboration opportunity with you."
                className="neural-button inline-flex items-center gap-3"
              >
                <Mail size={18} />
                Send Email
              </a>
              <a 
                href="https://linkedin.com/in/cao-khoa-1b09141b8"
                target="_blank"
                rel="noopener noreferrer"
                className="neural-button bg-transparent border-2 border-neural-primary text-neural-primary hover:bg-neural-primary hover:text-neural-dark inline-flex items-center gap-3"
              >
                <Linkedin size={18} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Professional Note */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="600">
          <p className="neural-text text-sm max-w-2xl mx-auto opacity-80">
            <strong>Currently seeking:</strong> Internship opportunities in AI Research, 
            Machine Learning Engineering, or DevOps roles where I can contribute to 
            innovative projects while continuing to learn and grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
