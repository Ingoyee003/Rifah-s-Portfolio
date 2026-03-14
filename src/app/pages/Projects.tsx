import { motion } from "motion/react";
import {
  ExternalLink,
  Github,
  Star,
  Smartphone,
  Code,
  Palette,
  TestTube,
  X,
  Play,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import xetterLogo from "./asset/xetter.png";
import squidGameImage from "./asset/Squid.png";
import loveOMaticImage from "./asset/image.png";

export function Projects() {
  const projectCategories = [
    {
      category: "Mobile Development",
      icon: Smartphone,
      color: "from-green-600 to-teal-600",
      projects: [
        {
          title: "Xetter - Social Media App",
          description:
            "Full-featured social media application with real-time messaging, post sharing, user profiles, and interactive feed. Built with modern mobile development technologies for seamless user experience.",
          image: xetterLogo,
          tags: ["Android", "Java", "Firebase", "Social Media"],
          github: "https://github.com/Ingoyee003/CBI-Final.git",
          demo: "#",
          videoUrl:
            "https://drive.google.com/file/d/1H1OMfqRECevRtCfN7cyxlLo-klwBtkiC/view?usp=drive_link",
          //stars: 45,
        },
        {
          title: "RedLight GreenLight - Squid Game Inspired",
          description:
            "Interactive mobile game inspired by the iconic Squid Game scene. Features motion detection, real-time gameplay, score tracking, and challenging levels with immersive sound effects.",
          image: squidGameImage,
          tags: [
            "Android",
            "Kotlin",
            "Game Dev",
            "Motion Detection",
          ],
          github:
            "https://github.com/Ingoyee003/Squid-Games.git",
          demo: "#",
          videoUrl:
            "https://drive.google.com/file/d/1Ra_9tWOBYGuGmPv5noFGE9nCx1NNZ-Pq/view?usp=drive_link",
          //stars: 52,
        },
        {
          title: "Love-O-Matic",
          description:
            "Hilarious couple sarcasm app that brings humor to relationships. Features witty responses, fun challenges, and playful interactions designed to keep couples entertained and laughing together.",
          image: loveOMaticImage,
          tags: ["Android", "Kotlin", "Entertainment", "Humor"],
          github: "https://github.com/Ingoyee003/Convince.git",
          demo: "#",
          videoUrl:
            "https://drive.google.com/file/d/1JJbPgoXolqtHLSC03dm2NQc-rA8jaEYo/view?usp=drive_link",
          //stars: 28,
        },
        {
          title: "TaskMate - Todo & Productivity App",
          description:
            "Simple and elegant task management app for Android with local database storage, reminders, and task categorization.",
          image:
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudHxlbnwxfHx8fDE3NDA2ODgxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
          tags: [
            "Flutter",
            "Dart",
            "Local Storage",
            "Productivity",
          ],
          github: "https://github.com/Ingoyee003/TaskMate.git",
          demo: "#",
          videoUrl:
            "https://drive.google.com/file/d/1tew_UK_KOzE12OVvdJRLRrh5kTjY9YMs/view?usp=drive_link",
          //stars: 18,
        },
      ],
    },
    {
      category: "Web Development",
      icon: Code,
      color: "from-blue-600 to-cyan-600",
      projects: [
        {
          title: "Restaurant Website for Food Delivery",
          description:
            "Modern and responsive restaurant website featuring online food ordering, menu showcase, shopping cart, real-time order tracking, and seamless checkout experience for customers.",
          image:
            "https://images.unsplash.com/photo-1760888549280-4aef010720bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGRlbGl2ZXJ5JTIwYXBwJTIwbW9kZXJufGVufDF8fHx8MTc3MzIyNzEyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design",
          ],
          github:
            "https://github.com/Ingoyee003/Food-Delivery.git",
          demo: "https://ingoyee003.github.io/Food-Delivery/",
          //stars: 32,
        },
        {
          title: "Modern Portfolio with 3D Animation",
          description:
            "Cutting-edge portfolio website featuring stunning 3D animations, smooth scroll effects, interactive elements, and modern UI/UX design to showcase projects in an immersive experience.",
          image:
            "https://images.unsplash.com/photo-1720983590448-28b749bd403d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwb3J0Zm9saW8lMjAzZCUyMHdlYnNpdGUlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NzMyMjcxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          tags: ["React", "Three.js", "GSAP", "Tailwind CSS"],
          github:
            "https://github.com/Ingoyee003/Modern-Portfolio.git",
          demo: "https://ingoyee003.github.io/Modern-Portfolio/",
          //stars: 45,
        },
        {
          title: "Professional Portfolio",
          description:
            "Latest interactive portfolio website with dynamic animations, engaging user interactions, responsive design, and modern aesthetics to create a memorable browsing experience.",
          image:
            "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMHBvcnRmb2xpbyUyMHdlYnNpdGUlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzczMjI3MTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          tags: ["React", "Framer Motion", "TypeScript", "CSS"],
          github:
            "https://github.com/Ingoyee003/Rifah-s-Portfolio.git",
          demo: "https://rifah-portfolio.vercel.app/",
          //stars: 28,
        },
        {
          title: "CRM Platform - Industrial Project",
          description:
            "Comprehensive Customer Relationship Management platform for enterprise-level business operations. Industrial project with confidential details - proprietary solution for client management and business analytics.",
          image:
            "https://images.unsplash.com/photo-1586448354773-30706da80a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMENSTSUyMHNvZnR3YXJlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MzE5ODc0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          tags: [
            "React",
            "Node.js",
            "PostgreSQL",
            "Enterprise",
          ],
          //stars: 0,
          hideLinks: true,
        },
      ],
    },
    {
      category: "UI/UX Design",
      icon: Palette,
      color: "from-orange-600 to-yellow-600",
      projects: [
        {
          title: "Portfolio Design",
          description:
            "Complete UI/UX design for a personal portfolio website featuring modern aesthetics, smooth interactions, and intuitive navigation. Fully designed and prototyped in Figma with interactive elements.",
          image:
            "https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMHVpJTIwdXglMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzczMjI4MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          tags: [
            "Figma",
            "UI Design",
            "Prototyping",
            "Interactive Design",
          ],
          demo: "https://www.figma.com/proto/IlQKDgeRosqRTrJ32RjNhN/Rifah-s-Portfolio?node-id=16-6&p=f&t=uVk3nOxnZEnO5D5N-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=16%3A6",
          //stars: 52,
          hideGithub: true,
        },
        {
          title: "Interns Panel - Hexen",
          description:
            "Professional dashboard design for managing interns and internship programs. Features comprehensive analytics, task management, progress tracking, and intuitive user interface for administrators.",
          image:
            "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjBkZXNpZ24lMjBtb2Rlcm4lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzMyMjgxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          tags: [
            "Figma",
            "Dashboard Design",
            "Admin Panel",
            "UX Research",
          ],
          demo: "https://www.figma.com/proto/10BT2xhpM62xSADP1mfH2Z/glimpse-of-works?node-id=1-87&t=yseQQIqHDaAKPdJb-1&scaling=min-zoom&content-scaling=fixed&page-id=1%3A86",
          //stars: 38,
          hideGithub: true,
        },
        {
          title: "Relieved - Game Prototype",
          description:
            "Interactive game prototype design with engaging gameplay mechanics, immersive visuals, and user-friendly controls. Complete game flow and interface designed for optimal player experience.",
          image:
            "https://images.unsplash.com/photo-1763905180930-892ee8d37ea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwcHJvdG90eXBlJTIwZGVzaWduJTIwZ2FtaW5nJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MzIyNzg1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          tags: [
            "Figma",
            "Game Design",
            "Prototyping",
            "User Experience",
          ],
          demo: "https://www.figma.com/proto/7AhQo2lg4wULvbSLKCmpLM/Relieved-Game-Prototype?node-id=1-55&t=xPmrs8tQFXH3LRgR-1&scaling=min-zoom&content-scaling=fixed&page-id=1%3A2",
          //stars: 45,
          hideGithub: true,
        },
      ],
    },
    {
      category: "Testing & Automation",
      icon: TestTube,
      color: "from-red-600 to-pink-600",
      projects: [
        {
          title: "Odoo Purchase Module Functional Testing",
          description:
            "Comprehensive functional testing project for Odoo ERP Purchase Module. Includes test case documentation, manual testing scenarios, bug tracking, and detailed test reports for enterprise resource planning system.",
          image:
            "https://images.unsplash.com/photo-1621036579842-9080c7119f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlc3RpbmclMjBxdWFsaXR5JTIwYXNzdXJhbmNlJTIwY29kZXxlbnwxfHx8fDE3NzMxNTYzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          tags: [
            "Odoo",
            "Manual Testing",
            "Functional Testing",
            "ERP",
          ],
          github:
            "https://github.com/Ingoyee003/Odoo-Purchase-Module-Functional-Testing.git",
          //stars: 24,
        },
        {
  title: "Cross-Browser & Responsive Testing",
  description:
    "Conducted cross-browser and responsive testing to ensure consistent functionality and layout across Chrome, Firefox, and Edge browsers as well as different screen sizes. Identified UI misalignment, responsiveness issues, and layout inconsistencies.",
  image:
    "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1080&auto=format&fit=crop",
  tags: ["Cross Browser Testing", "Responsive Testing", "UI Testing"],
  github:
            "https://github.com/Ingoyee003/Cross-Browser-Responsive-Testing.git",
          //stars: 24,
}
        {
          title: "E-commerce Test Automation Suite",
          description:
            "Comprehensive test automation framework for e-commerce platform covering end-to-end testing, API testing, and regression testing using Selenium.",
          image:
            "https://images.unsplash.com/photo-1556155092-490a1ba16284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXN0aW5nJTIwY29kZXxlbnwxfHx8fDE3NDA2ODgxMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
          tags: ["Selenium", "Java", "TestNG", "Maven"],
          //stars: 19,
          hideLinks: true,
        },
        {
  title: "360 Pathshala Website Manual Testing",
  description:
    "Conducted manual testing on the 360 Pathshala website to evaluate functionality, usability, and responsiveness. Designed and executed test cases, identified UI inconsistencies, broken links, and validation issues, and documented findings through structured bug reports.",
  image:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1080&auto=format&fit=crop",
  tags: ["Manual Testing", "Test Case Design", "Bug Reporting", "UI Testing"],
  //stars: 19,
  hideLinks: true,
},
{
  title: "Web Application Manual Testing (OrangeHRM Demo)",
  description:
    "Performed end-to-end manual testing on the OrangeHRM demo web application. Created test cases for login, employee management, and leave modules. Identified UI issues, input validation errors, and functional bugs while documenting results in structured test reports.",
  image:
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1080&auto=format&fit=crop",
  tags: ["Manual Testing", "Test Case Writing", "Functional Testing", "Bug Reporting"],
  hideLinks: true,
},
{
  title: "REST API Testing with Postman",
  description:
    "Tested REST APIs using Postman by validating request methods, response codes, and JSON data structures. Designed API test scenarios, verified CRUD operations, and documented results to ensure API reliability and correctness.",
  image:
    "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1080&auto=format&fit=crop",
  tags: ["API Testing", "Postman", "REST API", "JSON Validation"],
  hideLinks: true,
},
        {
          title: "Mobile App Testing Framework",
          description:
            "Automated testing framework for Android apps using Appium with test case management and detailed reporting.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjB0ZXN0aW5nfGVufDF8fHx8MTc0MDY4ODE1NHww&ixlib=rb-4.1.0&q=80&w=1080",
          tags: ["Appium", "Android", "Python", "Pytest"],
          //stars: 16,
          hideLinks: true,
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<
    string | null
  >(null);
  const categories = [
    "All",
    ...projectCategories.map((cat) => cat.category),
  ];

  const filteredCategories =
    activeCategory === "All"
      ? projectCategories
      : projectCategories.filter(
          (cat) => cat.category === activeCategory,
        );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-12 sm:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 px-4">
            A collection of my work across mobile development,
            web development, UI/UX design, and testing
            automation
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects by Category */}
        {filteredCategories.map((categoryData, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
            className="mb-16"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${categoryData.color} rounded-xl flex items-center justify-center`}
              >
                <categoryData.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white">
                {categoryData.category}
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-300 dark:from-gray-700 to-transparent" />
            </div>

            {/* Projects Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {categoryData.projects.map(
                (project, projectIndex) => (
                  <motion.div
                    key={projectIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: projectIndex * 0.1 }}
                    className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    {/* Project Image */}
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      {typeof project.image === "string" ? (
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      )}
                      <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur px-2 py-1 rounded-full">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs sm:text-sm text-gray-900 dark:text-white">
                          {project.stars}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col">
                      <h3 className="text-lg sm:text-xl text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className={`px-2 sm:px-3 py-1 bg-gradient-to-r ${categoryData.color} bg-opacity-10 text-xs sm:text-sm rounded-full text-gray-700 dark:text-gray-300`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                        {!project.hideLinks &&
                          !project.hideGithub &&
                          project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-purple-400 transition-colors"
                            >
                              <Github className="w-4 h-4" />
                              Code
                            </a>
                          )}
                        {!project.hideLinks &&
                          project.videoUrl && (
                            <button
                              onClick={() =>
                                setSelectedVideo(
                                  project.videoUrl || null,
                                )
                              }
                              className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-purple-400 transition-colors"
                            >
                              <Play className="w-4 h-4" />
                              View Demo
                            </button>
                          )}
                        {!project.hideLinks &&
                          !project.videoUrl &&
                          project.demo &&
                          project.demo !== "#" && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-purple-400 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                              View
                            </a>
                          )}
                      </div>
                    </div>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        ))}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12"
        >
          {[
            { value: "15+", label: "Projects Completed" },
            { value: "4", label: "Specializations" },
            { value: "2", label: "Startups Founded" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 sm:p-6 rounded-xl text-center text-white"
            >
              <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm opacity-90">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full flex items-center justify-center transition-all duration-300"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Video Player */}
            <div className="relative aspect-video bg-black">
              <iframe
                src={selectedVideo.replace('/view?usp=drive_link', '/preview')}
                className="w-full h-full"
                allow="autoplay"
                allowFullScreen
              />
            </div>

            {/* Info */}
            <div className="p-4 bg-gray-800">
              <p className="text-white text-sm">
                <span className="text-gray-400">Tip:</span>{" "}
                Click outside or press the close button to exit
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
