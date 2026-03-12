import { motion } from "motion/react";
import { Building, Calendar, MapPin, TrendingUp, Briefcase } from "lucide-react";

export function Experience() {
  const startups = [
    {
      company: "Contradox",
      logo: "CD",
      position: "Software Engineer & CEO",
      type: "Own Startup",
      location: "Remote",
      period: "June 2025 - Present",
      duration: "Present",
      description: "Founded and leading a tech startup focused on innovative software solutions.",
      responsibilities: [
        "Founded and leading a tech startup focused on innovative software solutions",
        "Developing and scaling SaaS product with modern technologies",
        "Managing product development, team coordination, and client relationships",
        "Building scalable solutions using modern tech stacks",
      ],
      achievements: [
        "Successfully establishing a software development company",
        "Building innovative products with cutting-edge technologies",
        "Growing startup with strategic vision and leadership",
      ],
      technologies: [
        "Java",
        "Kotlin",
        "TypeScript",
        "JavaScript",
        "Python",
        "Dart",
        "Android",
        "Flutter",
        "React",
        "Vite",
        "HTML/CSS",
        "Tailwind CSS",
        "Firebase",
        "PostgreSQL",
        "MongoDB",
        "REST APIs",
        "Node.js",
        "Git & GitHub",
        "Android Studio",
        "VS Code",
        "Figma",
        "Selenium",
        "Postman",
        "Jira",
      ],
    },
  ];

  const experiences = [
    {
      company: "SQALOGY",
      logo: "SQ",
      position: "SQA Intern",
      type: "Internship",
      location: "Remote",
      period: "January 2026 - Present",
      duration: "Present",
      description: "Gaining hands-on experience in software quality assurance, manual and automation testing.",
      responsibilities: [
        "Performed manual and automation testing for various software applications",
        "Created and executed test cases to ensure product quality",
        "Identified and documented bugs, working closely with development team",
        "Gained experience in quality assurance best practices and testing methodologies",
      ],
      achievements: [
        "Improving software quality through comprehensive testing",
        "Contributing to team's QA processes and standards",
        "Developing expertise in test automation",
      ],
      technologies: [
        "Selenium",
        "Playwright",
        "Java",
        "Python",
        "Manual Testing",
        "Automation Testing",
        "Test Case Design",
        "Bug Tracking",
        "Regression Testing",
        "API Testing",
        "Test Planning",
        "Jira",
        "Postman",
        "TestNG",
        "Git & GitHub",
      ],
    },
    {
      company: "EDGE Project (ICT Division) — Government of Bangladesh",
      logo: "GP",
      position: "Mobile App Development Training",
      type: "Training",
      location: "Bangladesh",
      period: "August 2024 - December 2024",
      duration: "5 months",
      description: "Completed comprehensive structured training in Android development using Java and Kotlin.",
      responsibilities: [
        "Completed comprehensive structured training in Android development using Java and Kotlin",
        "Developed multiple Android applications implementing modern architecture components",
        "Applied advanced patterns including ViewModel, LiveData, and Room database",
        "Gained proficiency in debugging, unit testing, and technical documentation practices",
      ],
      achievements: [
        "Successfully completed government-backed Android development program",
        "Built multiple functional Android applications",
        "Mastered modern Android architecture patterns",
      ],
      technologies: [
        "Android",
        "Java",
        "Kotlin",
        "Android Studio",
        "Jetpack",
        "ViewModel",
        "LiveData",
        "Room Database",
        "SQLite",
        "MVVM Architecture",
        "Retrofit",
        "Material Design",
        "XML Layouts",
        "Gradle",
        "Git & GitHub",
        "Unit Testing",
        "Debugging",
        "Firebase",
      ],
    },
    {
      company: "Hexen",
      logo: "HX",
      position: "UI/UX Designer Intern",
      type: "Internship",
      location: "Remote",
      period: "May 2024 - July 2024",
      duration: "3 months",
      description: "Internship focused on UI/UX design for web and mobile applications.",
      responsibilities: [
        "Designed user interfaces and experiences for web and mobile applications",
        "Created wireframes, prototypes, and high-fidelity designs in Figma",
        "Collaborated with developers to ensure design implementation accuracy",
        "Conducted user research and applied design thinking principles",
      ],
      achievements: [
        "Designed multiple user interfaces for client projects",
        "Created comprehensive design systems",
        "Improved user experience through research-driven design",
      ],
      technologies: [
        "Figma",
        "Wireframing",
        "Prototyping",
        "User Research",
        "Design Systems",
        "Design Thinking",
        "User Testing",
        "Adobe XD",
        "Mobile UI/UX",
        "Web Design",
        "Interaction Design",
        "Visual Design",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-12 sm:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 px-4">
            My journey as an entrepreneur, developer, and learner
          </p>
        </motion.div>

        {/* Entrepreneurship Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white">Entrepreneurship</h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {startups.map((startup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-900/10 dark:to-pink-900/10 border-2 border-orange-200 dark:border-orange-800 p-5 sm:p-6 rounded-xl shadow-lg"
              >
                {/* Founder Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-orange-600 to-pink-600 text-white text-xs rounded-full">
                  Founder
                </div>

                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-600 to-pink-600 rounded-xl flex items-center justify-center text-lg sm:text-2xl text-white shrink-0">
                    {startup.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl text-gray-900 dark:text-white mb-1">{startup.position}</h3>
                    <p className="text-base sm:text-lg text-orange-600 dark:text-orange-400 mb-2">{startup.company}</p>
                    <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {startup.period}
                      </span>
                      <span>•</span>
                      <span>{startup.duration}</span>
                      <span>•</span>
                      <span>{startup.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">{startup.description}</p>

                <div className="mb-4">
                  <h4 className="text-base sm:text-lg text-gray-900 dark:text-white mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {startup.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm sm:text-base text-gray-600 dark:text-gray-400 flex items-start gap-2">
                        <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-base sm:text-lg text-gray-900 dark:text-white mb-3">Achievements</h4>
                  <div className="space-y-2">
                    {startup.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                        <span className="text-green-600 dark:text-green-400">✓</span>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {startup.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-1 bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 text-orange-600 dark:text-orange-400 text-xs sm:text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white">Work Experience</h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-5 sm:p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-lg sm:text-2xl text-white shrink-0">
                    {exp.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl text-gray-900 dark:text-white mb-1">{exp.position}</h3>
                    <p className="text-base sm:text-lg text-blue-600 dark:text-purple-400 mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span>•</span>
                      <span>{exp.duration}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                      <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full">{exp.type}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>

                <div className="mb-4">
                  <h4 className="text-base sm:text-lg text-gray-900 dark:text-white mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm sm:text-base text-gray-600 dark:text-gray-400 flex items-start gap-2">
                        <span className="text-blue-600 dark:text-purple-400 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-base sm:text-lg text-gray-900 dark:text-white mb-3">Achievements</h4>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                        <span className="text-green-600 dark:text-green-400">✓</span>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs sm:text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { value: "1", label: "Companies Founded" },
            { value: "3", label: "Internships" },
            { value: "20+", label: "Projects Delivered" },
            { value: "1.5 Years", label: "Total Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 sm:p-6 rounded-xl text-center text-white"
            >
              <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-xs sm:text-sm opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}