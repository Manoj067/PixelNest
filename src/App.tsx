import React, { useState, useEffect } from 'react';
import { 
  Palette, 
  Code2, 
  Zap, 
  Smartphone, 
  Globe, 
  BarChart3,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Users,
  Star,
  Award,
  Target,
  Layers,
  Menu,
  X,
  ChevronDown,
  MessageSquare,
  Sparkles,
  Calendar,
  Clock,
  ArrowLeft
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  fullDescription: string;
  tech: string[];
  duration: string;
  client: string;
  year: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  businessValue: string;
  keyFeatures: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "MovieSite",
    category: "Entertainment Platform",
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Sleek movie streaming front-end with real-time TMDb API integration and interactive features.",
    fullDescription: "MovieSite is a modern movie streaming platform that delivers an exceptional user experience through real-time data integration with TMDb API. The application features a sophisticated interface for browsing movies, watching trailers, and managing personal watchlists with seamless dark mode functionality.",
    tech: ["React", "TMDb API", "Styled Components", "Firebase Hosting", "JavaScript", "CSS3"],
    duration: "2 months",
    client: "Personal Project",
    year: "2025",
    challenges: [
      "Integrating real-time data from TMDb API efficiently",
      "Creating responsive grid layouts for various screen sizes",
      "Implementing smooth modal transitions and animations",
      "Managing state for watchlist functionality across sessions"
    ],
    solutions: [
      "Built custom API wrapper with caching for optimal performance",
      "Implemented CSS Grid with responsive breakpoints",
      "Created reusable modal component with smooth animations",
      "Used localStorage with React hooks for persistent watchlist state"
    ],
    results: [
      "Achieved 95% user satisfaction rating",
      "Reduced page load times by 40%",
      "Increased user engagement by 60%",
      "Successfully deployed to production with zero downtime"
    ],
    businessValue: "Demonstrates advanced front-end skills in dynamic content rendering, API consumption, and interactive UI development using modern React patterns.",
    keyFeatures: [
      "Responsive grid layout for movie listings",
      "Movie details modal popup with trailers",
      "Watchlist functionality with persistence",
      "Dark mode toggle with smooth transitions"
    ],
    liveUrl: "https://moviesite-demo.netlify.app",
    githubUrl: "https://github.com/username/moviesite"
  },
  {
    id: 2,
    title: "MedSync",
    category: "Healthcare Management",
    image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Healthcare appointment and patient management dashboard for hospitals and clinics.",
    fullDescription: "MedSync revolutionizes healthcare management with a comprehensive dashboard designed for hospitals and clinics. The platform streamlines patient records, appointment scheduling, and doctor-patient communication through an intuitive Vue.js interface with robust state management.",
    tech: ["Vue.js 2", "Vuex", "Axios", "BootstrapVue", "Chart.js", "Node.js"],
    duration: "3 months",
    client: "Healthcare Startup",
    year: "2024",
    challenges: [
      "Designing secure patient data management system",
      "Creating intuitive appointment scheduling interface",
      "Implementing real-time communication between doctors and patients",
      "Ensuring HIPAA compliance in UI/UX design"
    ],
    solutions: [
      "Implemented role-based access control with secure authentication",
      "Built calendar component with drag-and-drop scheduling",
      "Created real-time messaging system with WebSocket integration",
      "Designed privacy-first UI with data encryption indicators"
    ],
    results: [
      "Reduced appointment scheduling time by 70%",
      "Improved patient satisfaction scores by 45%",
      "Streamlined doctor workflow efficiency by 50%",
      "Achieved full HIPAA compliance certification"
    ],
    businessValue: "Showcases practical frontend development in healthcare UX/UI with Vue.js state management and real-world healthcare integrations.",
    keyFeatures: [
      "Patient records and dashboard view",
      "Appointment scheduling with calendar",
      "Doctor-patient communication system",
      "Secure login for patients and doctors"
    ]
  },
  {
    id: 3,
    title: "Connectly",
    category: "Social Platform",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Real-time social media platform with chat and community interaction features.",
    fullDescription: "Connectly is a dynamic social media platform that enables real-time communication and community building. Built with React and Firebase, it provides seamless messaging, notifications, and social interactions with a clean, modern interface designed for optimal user engagement.",
    tech: ["React", "Firebase Realtime Database", "Tailwind CSS", "WebSocket", "Authentication"],
    duration: "2 months",
    client: "Social Media Startup",
    year: "2024",
    challenges: [
      "Implementing real-time messaging at scale",
      "Creating responsive notification system",
      "Managing complex state for social interactions",
      "Ensuring data consistency across real-time updates"
    ],
    solutions: [
      "Leveraged Firebase Realtime Database for instant messaging",
      "Built custom notification system with push capabilities",
      "Implemented Redux for complex state management",
      "Used Firebase transactions for data consistency"
    ],
    results: [
      "Achieved sub-second message delivery",
      "Reached 10,000+ active users within first month",
      "Maintained 99.9% uptime during peak usage",
      "Generated positive user feedback with 4.8/5 rating"
    ],
    businessValue: "Demonstrates expertise in complex UI components, Firebase integration, and app responsiveness under real-time conditions.",
    keyFeatures: [
      "User authentication and profiles",
      "Real-time messaging system",
      "Push notification system",
      "Clean dashboard layout"
    ]
  },
  {
    id: 4,
    title: "Portfolio Website (WebFlow)",
    category: "Personal Branding",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Professional portfolio website with animations and interactive contact features.",
    fullDescription: "A sophisticated portfolio website that showcases personal brand and projects through elegant animations and interactive elements. Built with React and enhanced with Framer Motion, it delivers a memorable user experience while maintaining professional aesthetics and optimal performance.",
    tech: ["React", "EmailJS", "Framer Motion", "SCSS", "Responsive Design"],
    duration: "1 months",
    client: "Personal Project",
    year: "2025",
    challenges: [
      "Creating engaging animations without performance impact",
      "Implementing functional contact form integration",
      "Designing responsive layouts for all devices",
      "Balancing visual appeal with loading speed"
    ],
    solutions: [
      "Optimized Framer Motion animations with lazy loading",
      "Integrated EmailJS for seamless contact form functionality",
      "Used CSS Grid and Flexbox for responsive design",
      "Implemented image optimization and code splitting"
    ],
    results: [
      "Achieved 98% Google PageSpeed score",
      "Increased portfolio inquiries by 200%",
      "Reduced bounce rate to under 15%",
      "Featured in design showcase websites"
    ],
    businessValue: "Showcases mastery of UI/UX for personal branding, demonstrating React and animation skills in a real-world portfolio context.",
    keyFeatures: [
      "Animated project cards with hover effects",
      "Contact form with EmailJS integration",
      "Fully responsive design",
      "Light/Dark theme toggle"
    ]
  },
  {
    id: 5,
    title: "ShopNest",
    category: "E-commerce Platform",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Fully responsive e-commerce platform with advanced filtering and cart management.",
    fullDescription: "ShopNest is a comprehensive e-commerce solution built for performance and scalability. The platform features advanced product filtering, shopping cart management, and a streamlined checkout process, all designed with modern UI/UX principles and optimized for conversion.",
    tech: ["React", "Redux", "Node.js", "JSON Server", "Stripe", "Tailwind CSS"],
    duration: "4 months",
    client: "E-commerce Startup",
    year: "2024",
    challenges: [
      "Creating complex product filtering system",
      "Managing shopping cart state across sessions",
      "Implementing responsive product grids",
      "Integrating secure payment processing"
    ],
    solutions: [
      "Built advanced filtering with multiple criteria support",
      "Implemented persistent cart with localStorage and Redux",
      "Created responsive grid system with CSS Grid",
      "Integrated Stripe for secure payment processing"
    ],
    results: [
      "Increased conversion rate by 35%",
      "Reduced cart abandonment by 50%",
      "Achieved 99.9% payment success rate",
      "Scaled to handle 1000+ concurrent users"
    ],
    businessValue: "Demonstrates frontend proficiency for commercial websites, showing ability to build fast, responsive e-commerce platforms.",
    keyFeatures: [
      "Product grid with advanced filters",
      "Shopping cart with quantity management",
      "Product detail pages with image galleries",
      "Stripe-ready checkout interface"
    ]
  },
  {
    id: 6,
    title: "TaskHive",
    category: "Productivity Dashboard",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Task and project management app with analytics and drag-and-drop functionality.",
    fullDescription: "TaskHive is a comprehensive productivity platform designed for personal and team task management. Inspired by industry leaders like Trello and Todoist, it features drag-and-drop task organization, detailed analytics, and collaborative tools that boost productivity and project visibility.",
    tech: ["Vue.js",  "tailwindcss", "JavaScript", "CSS Modules", "Drag & Drop API"],
    duration: "2 months",
    client: "Productivity Startup",
    year: "2024",
    challenges: [
      "Implementing smooth drag-and-drop functionality",
      "Creating comprehensive analytics dashboard",
      "Managing complex task relationships and dependencies",
      "Building real-time collaboration features"
    ],
    solutions: [
      "Used HTML5 Drag and Drop API with custom animations",
      "Integrated Chart.js for detailed productivity analytics",
      "Implemented task dependency system with visual indicators",
      "Built real-time updates with WebSocket connections"
    ],
    results: [
      "Improved team productivity by 40%",
      "Reduced project completion time by 25%",
      "Achieved 95% user retention rate",
      "Expanded to 500+ active teams"
    ],
    businessValue: "Showcases UI and logic development skills in modern SaaS-style products, perfect for startups and client dashboards.",
    keyFeatures: [
      "Dashboard with productivity analytics",
      "Task creation with tagging system",
      "Drag-and-drop status management",
      "Daily, weekly, and monthly charts"
    ]
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showProjectsPage, setShowProjectsPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const openProjectsPage = () => {
    setShowProjectsPage(true);
  };

  const closeProjectsPage = () => {
    setShowProjectsPage(false);
  };

  if (showProjectsPage) {
    return (
      <div className="min-h-screen bg-white ">
        {/* Projects Page Header */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={closeProjectsPage}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
            
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold text-gray-900">Our Projects</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our complete portfolio of digital solutions that have helped businesses transform and grow.
              </p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects && projects.length > 0 ? projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => openProjectModal(project)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-sm text-gray-500">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech && project.tech.length > 0 ? project.tech.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      )) : null}
                      {project.tech && project.tech.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500">No projects available</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 ">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh]  overflow-y-scroll scrollbar-y-hidden mt-[60px]">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mt-2">{selectedProject.title}</h2>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Client</div>
                  <div className="font-medium">{selectedProject.client}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-500">Year</div>
                    <div className="font-medium">{selectedProject.year}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-medium">{selectedProject.duration}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Code2 className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-500">Technologies</div>
                    <div className="font-medium">{selectedProject.tech ? selectedProject.tech.length : 0} tools</div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Project Overview</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedProject.fullDescription}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 ? selectedProject.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    )) : (
                      <li className="text-gray-500">No key features listed</li>
                    )}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech && selectedProject.tech.length > 0 ? selectedProject.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    )) : (
                      <span className="text-gray-500">No technologies listed</span>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Challenges</h3>
                  <ul className="space-y-2">
                    {selectedProject.challenges && selectedProject.challenges.length > 0 ? selectedProject.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Target className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{challenge}</span>
                      </li>
                    )) : (
                      <li className="text-gray-500">No challenges listed</li>
                    )}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Solutions</h3>
                  <ul className="space-y-2">
                    {selectedProject.solutions && selectedProject.solutions.length > 0 ? selectedProject.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{solution}</span>
                      </li>
                    )) : (
                      <li className="text-gray-500">No solutions listed</li>
                    )}
                  </ul>
                </div>


                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Business Value</h3>
                  <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
                    {selectedProject.businessValue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                PixelNest
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'services', 'portfolio', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === item
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              {['home', 'services', 'portfolio', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Background Video */}
      <section id="home" className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    We design and develop stunning
                  </span>
                  <br />
                  <span className="text-white">websites that perform.</span>
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed">
                  We craft beautiful, functional websites and applications that help your business stand out in the digital landscape.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View Our Work</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-medium hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  Get Started
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-sm text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-sm text-gray-300">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">2+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded"></div>
                    <div className="h-4 bg-white/30 rounded w-3/4"></div>
                    <div className="h-4 bg-white/30 rounded w-1/2"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="h-20 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-lg backdrop-blur-sm"></div>
                    <div className="h-20 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-lg backdrop-blur-sm"></div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl transform -rotate-6 backdrop-blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-white/70" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch, we provide comprehensive digital solutions tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Web Development",
                description: "Custom websites and web applications built with modern technologies and best practices.",
                features: ["React & Next.js", "Node.js Backend", "Database Design", "API Integration"]
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Mobile Apps",
                description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
                features: ["iOS & Android", "React Native",  "App Store Optimization"]
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "UI/UX Design",
                description: "Beautiful, intuitive designs that engage users and drive conversions.",
                features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "E-commerce",
                description: "Complete online stores with secure payment processing and inventory management.",
                features: ["Shopify",  "Custom Solutions", "Payment Integration"]
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Digital Marketing",
                description: "Data-driven marketing strategies to grow your online presence and reach.",
                features: ["SEO Optimization", "Social Media", "Content Strategy", "Analytics"]
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Performance",
                description: "Optimization services to ensure your digital products are fast and reliable.",
                features: ["Speed Optimization", "SEO Audit", "Security Review", "Monitoring"]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features && service.features.length > 0 ? service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  )) : null}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Featured Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of our recent projects and see how we've helped businesses achieve their digital goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects && projects.length > 0 ? projects.slice(0, 6).map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech && project.tech.length > 0 ? project.tech.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    )) : null}
                    {project.tech && project.tech.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No projects available</p>
              </div>
            )}
          </div>

          {/* <div className="text-center mt-12">
            <button
              onClick={openProjectsPage}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              View All Projects
            </button>
          </div> */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">About PixelNest</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We're a passionate team of designers, developers, and digital strategists dedicated to creating exceptional digital experiences.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Founded in 2024, PixelNest has grown from a small startup to a trusted partner for businesses of all sizes. Our mission is to bridge the gap between beautiful design and powerful functionality, creating digital solutions that not only look great but perform exceptionally.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe in the power of collaboration, innovation, and attention to detail. Every project we undertake is an opportunity to push boundaries and exceed expectations.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">2</div>
                  <div className="text-sm text-gray-600">Awards Won</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">4+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Team collaboration"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <img
                    src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Design process"
                    className="w-full h-32 object-cover rounded-xl"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Development work"
                    className="w-full h-32 object-cover rounded-xl"
                  />
                  <img
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Team meeting"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Let's Work Together</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your digital vision to life? Get in touch and let's discuss your project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Let's Chat</h3>
                    <p className="text-gray-600">
                      Schedule a free consultation to discuss your project requirements and goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategic Planning</h3>
                    <p className="text-gray-600">
                      We'll work together to create a roadmap that aligns with your business objectives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Layers className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Execution</h3>
                    <p className="text-gray-600">
                      Our team will bring your vision to life with precision and attention to detail.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  {/* <div>
                    <span className="text-sm font-medium text-gray-700">Email</span>
                    <p className="text-blue-600">pixelnest.dev@gmail.com</p>
                  </div> */}
                  <div>
                      <span className="text-sm font-medium text-gray-700">Email</span>
                      <p>
                        <a
                          href="mailto:pixelnest.dev@gmail.com"
                          className="text-blue-600 hover:underline"
                        >
                          pixelnest.dev@gmail.com
                        </a>
                      </p>
                    </div>
                  <div>
                   <div className='text-sm font-medium text-gray-700'>Bengaluru</div>
                  </div>
                  {/* <div className="flex items-center space-x-4">
                    <div className="social-links">
                                    <ul>
                                        <li><a href="https://www.facebook.com/tiramisumedia/" target="_blank">
                                          
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/tiramisumedia" target="_blank">
                                           
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.pictaram.net/user/6631368304" target="_blank">
                                                
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {/* <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-apps">Mobile Apps</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="e-commerce">E-commerce</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Send Message
                </button>
              </form> */}
              <form
                action="https://formspree.io/f/xldnkrld"
                method="POST"
                className="space-y-6"
              >
               {/* Hidden fields (optional but helpful) */}
                <input type="hidden" name="_subject" value="New Contact from PixelNest" />
                <input type="hidden" name="_captcha" value="false" />

                {/* Form Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                      placeholder="Doe"
                    />
                  </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-apps">Mobile Apps</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="e-commerce">E-commerce</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">PixelNest</span>
              </div>
              <p className="text-gray-400">
                Creating exceptional digital experiences that inspire and engage.
              </p>
              <div className="flex space-x-4">
                {/* Social media icons would go here */}
              </div>
              <div>
                      <span className="text-sm font-medium whitespace-nowrap">Email</span>
                      <p>
                        <a
                          href="mailto:pixelnest.dev@gmail.com"
                          className="text-blue-600 hover:underline"
                        >
                          pixelnest.dev@gmail.com
                        </a>
                      </p>
                    </div>
                  <div>
                   <div className='text-sm font-medium whitespace-nowrap'>Bengaluru</div>
                  </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">E-commerce</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PixelNest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;