import { motion } from "motion/react";
import { Code, Database, Cloud, Palette, Wrench, Users, Smartphone, TestTube, Bug, FileCode } from "lucide-react";
import { GSAP3DCard } from "../components/GSAP3DCard";
import { GSAP3DText } from "../components/GSAP3DText";

export function Skills() {
  const skillCategories = [
    {
      icon: FileCode,
      title: "Programming Languages",
      color: "from-indigo-600 to-blue-600",
      skills: [
        { name: "Java", level: 88 },
        { name: "Kotlin", level: 85 },
        { name: "TypeScript", level: 82 },
        { name: "HTML/CSS", level: 90 },
        { name: "Python", level: 78 },
        { name: "C/C++", level: 90 },
        { name: "C#", level: 68 },
        { name: "GDScript", level: 75 },
      ],
    },
    {
      icon: TestTube,
      title: "Quality Assurance & Testing",
      color: "from-red-600 to-pink-600",
      skills: [
        { name: "Manual Testing", level: 90 },
        { name: "Test Case Design", level: 90 },
        { name: "Bug Tracking & Reporting", level: 90 },
        { name: "Playwright", level: 80 },
        { name: "Selenium", level: 80 },
        { name: "Test Planning & Strategy", level: 85 },
        { name: "Regression Testing", level: 88 },
        { name: "API Testing", level: 82 },
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      color: "from-green-600 to-teal-600",
      skills: [
        { name: "Android (Java/Kotlin)", level: 80 },
        { name: "Flutter (Dart)", level: 80 },
        { name: "Android Studio", level: 90 },
        { name: "Mobile UI/UX", level: 90 },
        { name: "Firebase Integration", level: 80 },
      ],
    },
    {
      icon: Code,
      title: "Frontend Development",
      color: "from-blue-600 to-cyan-600",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "TypeScript", level: 78 },
        { name: "Tailwind CSS", level: 75 },
        { name: "Responsive Design", level: 82 },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "from-purple-600 to-pink-600",
      skills: [
        { name: "Firebase", level: 80 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 70 },
        { name: "REST APIs", level: 72 },
        { name: "Node.js (Basic)", level: 60 },
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      color: "from-orange-600 to-yellow-600",
      skills: [
        { name: "Figma", level: 90 },
        { name: "User Research", level: 90 },
        { name: "Wireframing", level: 90 },
        { name: "Prototyping", level: 90 },
        { name: "Design Systems", level: 70 },
      ],
    },
    {
      icon: Cloud,
      title: "Tools & Platforms",
      color: "from-pink-600 to-red-600",
      skills: [
        { name: "Git & GitHub", level: 82 },
        { name: "Android Studio", level: 90 },
        { name: "VS Code", level: 85 },
        { name: "Godot (Game Development)", level: 78 },
        { name: "Postman", level: 75 },
        { name: "Jira", level: 70 },
      ],
    },
    {
      icon: Wrench,
      title: "Technical Skills",
      color: "from-teal-600 to-green-600",
      skills: [
        { name: "Data Structures", level: 75 },
        { name: "Algorithms", level: 70 },
        { name: "Object-Oriented Programming", level: 80 },
        { name: "Debugging", level: 85 },
        { name: "Version Control", level: 78 },
      ],
    },
    {
      icon: Users,
      title: "Soft Skills",
      color: "from-blue-600 to-purple-600",
      skills: [
        { name: "Team Leadership", level: 90 },
        { name: "Communication", level: 90 },
        { name: "Problem Solving", level: 90 },
        { name: "Project Management", level: 90 },
        { name: "Time Management", level: 90 },
        { name: "Adaptability", level: 90 },
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
              Skills & Expertise
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            My growing technical skill set and areas of expertise developed through coursework, internships, and personal projects
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <GSAP3DCard
              key={categoryIndex}
              delay={categoryIndex * 0.1}
              className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl text-gray-900 dark:text-white">{category.title}</h2>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </GSAP3DCard>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-600 to-purple-600 p-6 sm:p-8 rounded-2xl shadow-xl text-white"
        >
          <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4">Continuous Learning</h3>
          <p className="text-sm sm:text-base md:text-lg opacity-90 mb-4 sm:mb-6">
            I'm committed to continuous learning and staying current with industry trends through online courses, documentation, and hands-on practice.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">10+</div>
              <div className="text-xs sm:text-sm opacity-90">Online Courses</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">8+</div>
              <div className="text-xs sm:text-sm opacity-90">Technologies</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-3 sm:p-4 col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">15+</div>
              <div className="text-xs sm:text-sm opacity-90">Projects Built</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}