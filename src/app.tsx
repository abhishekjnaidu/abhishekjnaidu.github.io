import React, { useState, useEffect, useRef } from 'react';

// ========================================
// INTERFACES / TYPES
// ========================================

interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Cloud & DevOps' | 'Tools';
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

interface SocialLink {
  platform: string;
  url: string;
}

interface PortfolioData {
  hero: { name: string; role: string; tagline: string };
  about: { bio: string };
  skills: Skill[];
  projects: Project[];
  experience: ExperienceEntry[];
  contact: { heading: string; subtext: string; links: SocialLink[] };
  meta: { title: string; description: string; url: string };
}

// ========================================
// PORTFOLIO DATA
// ========================================

const portfolioData: PortfolioData = {
  hero: {
    name: 'Abhishek Naidu',
    role: 'Software Engineer',
    tagline:
      'Building modern software, cloud solutions, and digital products with a focus on performance, scalability, and exceptional user experience.',
  },

  about: {
    bio: "I'm Abhishek Naidu, a software engineer passionate about building modern applications, cloud solutions, and automation tools. With 5+ years at ICS Mobile, I specialize in database design, enterprise software solutions, and creating tools that deliver real-world impact. I enjoy learning new technologies, solving complex problems, and crafting products that make a difference.",
  },

  skills: [
    { name: 'React', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'HTML/CSS', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'SQL Server', category: 'Backend' },
    { name: 'REST APIs', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'Azure', category: 'Cloud & DevOps' },
    { name: 'Docker', category: 'Cloud & DevOps' },
    { name: 'Git', category: 'Cloud & DevOps' },
    { name: 'GitHub Actions', category: 'Cloud & DevOps' },
    { name: 'Vite', category: 'Tools' },
    { name: 'VS Code', category: 'Tools' },
    { name: 'Excel (Data)', category: 'Tools' },
    { name: 'SQL Import/Export', category: 'Tools' },
  ],

  projects: [
    {
      title: 'Personal Portfolio',
      description:
        'A premium personal portfolio built with React, TypeScript, Vite, and deployed via GitHub Pages with Apple-inspired dark design.',
      technologies: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
      link: 'https://abhishekjnaidu.github.io',
      github: 'https://github.com/abhishekjnaidu/abhishekjnaidu.github.io',
    },
    {
      title: 'Solar ROI Calculator',
      description:
        'Interactive tool to estimate residential solar panel savings, ROI, and payback period based on location and energy usage.',
      technologies: ['React', 'JavaScript', 'Vite'],
      github: 'https://github.com/abhishekjnaidu',
    },
    {
      title: 'Mail Template Generator',
      description:
        'Enterprise tool for generating SQL-based email notification templates from Word documents with live HTML preview.',
      technologies: ['React', 'TypeScript', 'Vite', 'SQL'],
    },
  ],

  experience: [
    {
      role: 'Software Engineer',
      company: 'ICS Mobile Pvt Ltd',
      location: 'Bengaluru',
      period: 'Aug 2021 – Present',
      description: [
        'Database design and maintenance of customer information systems for enterprise clients',
        'Built internal automation tools using React and TypeScript for data processing workflows',
        'Designed and optimized SQL queries for marketing campaigns targeting segmented audiences',
        'Managed bulk data import/export operations using SQL Server and custom tooling',
        'Developed cloud-based solutions on Azure for data pipeline automation',
      ],
    },
  ],

  contact: {
    heading: "Let's Connect",
    subtext:
      'Open to collaborations, interesting projects, and technology discussions.',
    links: [
      { platform: 'GitHub', url: 'https://github.com/abhishekjnaidu' },
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/abhishekjnaidu' },
      { platform: 'Email', url: 'mailto:abhishekjnaidu@gmail.com' },
    ],
  },

  meta: {
    title: 'Abhishek Naidu | Software Engineer',
    description:
      'Personal portfolio of Abhishek Naidu — Software Engineer specializing in modern web applications, cloud solutions, and enterprise software.',
    url: 'https://abhishekjnaidu.github.io',
  },
};

// ========================================
// HOOK: useScrollAnimation
// ========================================

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

function useScrollAnimation(options?: UseScrollAnimationOptions) {
  const { threshold = 0.1, rootMargin = '0px' } = options || {};
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}

// ========================================
// ICON COMPONENTS
// ========================================

function GithubIcon({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 7L2 7" />
    </svg>
  );
}

function MenuIcon({ className, isOpen }: { className?: string; isOpen: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3"
        y={isOpen ? '11' : '5'}
        width="18"
        height="2"
        rx="1"
        fill="currentColor"
        style={{
          transition: 'transform 0.3s ease, y 0.3s ease',
          transformOrigin: 'center',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
        }}
      />
      <rect
        x="3"
        y="11"
        width="18"
        height="2"
        rx="1"
        fill="currentColor"
        style={{
          transition: 'opacity 0.3s ease',
          opacity: isOpen ? 0 : 1,
        }}
      />
      <rect
        x="3"
        y={isOpen ? '11' : '17'}
        width="18"
        height="2"
        rx="1"
        fill="currentColor"
        style={{
          transition: 'transform 0.3s ease, y 0.3s ease',
          transformOrigin: 'center',
          transform: isOpen ? 'rotate(-45deg)' : 'rotate(0deg)',
        }}
      />
    </svg>
  );
}

// ========================================
// SECTION COMPONENTS
// ========================================

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileOpen(false);
  };

  return (
    <nav
      className={`navbar ${isVisible ? 'navbar-visible' : ''}`}
      aria-label="Main navigation"
    >
      <div className="navbar-container">
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className="nav-link"
                onClick={() => handleLinkClick(link.id)}
                type="button"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="hamburger"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
          type="button"
        >
          <MenuIcon isOpen={isMobileOpen} />
        </button>
      </div>

      {isMobileOpen && (
        <div className="overlay">
          <ul className="overlay-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  className="overlay-link"
                  onClick={() => handleLinkClick(link.id)}
                  type="button"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { name, role, tagline } = portfolioData.hero;

  const handleCTAClick = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={ref as React.RefObject<HTMLElement>}
      className={`hero ${isVisible ? 'animate-visible' : 'animate-hidden'}`}
    >
      <p className="hero-role stagger-1">{role}</p>
      <h1 className="hero-name stagger-2">{name}</h1>
      <p className="hero-tagline stagger-3">{tagline}</p>
      <button className="hero-cta stagger-4" onClick={handleCTAClick}>
        View Projects
      </button>
    </section>
  );
}

function About() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className={`about ${isVisible ? 'animate-visible' : 'animate-hidden'}`}
    >
      <h2 className="about-heading">About Me</h2>
      <p className="about-bio">{portfolioData.about.bio}</p>
    </section>
  );
}

function SkillCard({ name, index }: { name: string; index: number }) {
  return (
    <div className={`skill-card stagger-${index}`}>
      {name}
    </div>
  );
}

function groupByCategory(skills: Skill[]): Record<string, Skill[]> {
  return skills.reduce<Record<string, Skill[]>>((groups, skill) => {
    const group = groups[skill.category] || [];
    group.push(skill);
    groups[skill.category] = group;
    return groups;
  }, {});
}

function Skills() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const grouped = groupByCategory(portfolioData.skills);

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className={`skills ${isVisible ? 'animate-visible' : 'animate-hidden'}`}
    >
      <div className="skills-container">
        <h2 className="skills-heading">Skills</h2>
        {Object.entries(grouped).map(([category, skills]) => (
          <div key={category} className="category-group">
            <h3 className="category-heading">{category}</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <SkillCard key={skill.name} name={skill.name} index={index + 1} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className={`project-card stagger-${index}`}>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-tags">
        {project.technologies.map((tech) => (
          <span key={tech} className="project-tag">
            {tech}
          </span>
        ))}
      </div>
      {(project.link || project.github) && (
        <div className="project-links">
          {project.link && (
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function Projects() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className={`projects ${isVisible ? 'animate-visible' : 'animate-hidden'}`}
    >
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {portfolioData.projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index + 1} />
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className={`experience ${isVisible ? 'animate-visible' : 'animate-hidden'}`}
    >
      <div className="experience-container">
        <h2 className="experience-heading">Experience</h2>
        {portfolioData.experience.map((entry, index) => (
          <div
            key={`${entry.company}-${entry.period}`}
            className={`experience-entry ${isVisible ? 'animate-visible' : 'animate-hidden'} stagger-${index + 1}`}
          >
            <h3 className="experience-role">{entry.role}</h3>
            <div className="experience-meta">
              <p className="experience-company">
                {entry.company} · {entry.location}
              </p>
              <span className="experience-period">{entry.period}</span>
            </div>
            <ul className="experience-description">
              {entry.description.map((bullet) => (
                <li key={bullet} className="experience-item">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function getIcon(platform: string) {
  switch (platform) {
    case 'GitHub':
      return <GithubIcon size={20} />;
    case 'LinkedIn':
      return <LinkedinIcon size={20} />;
    case 'Email':
      return <EmailIcon size={20} />;
    default:
      return null;
  }
}

function Contact() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className={`contact ${isVisible ? 'animate-visible' : 'animate-hidden'}`}
    >
      <div className="contact-container">
        <h2 className="contact-heading">{portfolioData.contact.heading}</h2>
        <p className="contact-subtext">{portfolioData.contact.subtext}</p>
        <div className="contact-links">
          {portfolioData.contact.links.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              className="contact-link"
              {...(link.url.startsWith('mailto:')
                ? {}
                : { target: '_blank', rel: 'noopener noreferrer' })}
            >
              {getIcon(link.platform)}
              <span>{link.platform}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Abhishek Naidu. Built with React.</p>
    </footer>
  );
}

// ========================================
// MAIN APP COMPONENT
// ========================================

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


