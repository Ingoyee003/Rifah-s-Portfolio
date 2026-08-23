import { motion } from "motion/react";
import { Download, Award, Briefcase, GraduationCap } from "lucide-react";

export function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-3">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Resume
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6">
            My professional journey and qualifications
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => window.open('https://drive.google.com/drive/folders/1d7j8-N39rEvfDl1eoElHrgdRc9ds6OlG?usp=sharing', '_blank')}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm sm:text-base rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Download SQA Resume
            </button>
            <button
              onClick={() => window.open('https://drive.google.com/drive/folders/1d7j8-N39rEvfDl1eoElHrgdRc9ds6OlG?usp=sharing', '_blank')}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm sm:text-base rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Download Mobile Dev Resume
            </button>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.section
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
            {[
              {
                title: "Software Engineer & CEO",
                company: "Contradox (Startup)",
                period: "June 2025 - Present",
                description: [
                  "Founded and leading a tech startup focused on innovative software solutions",
                  "Developing and scaling SaaS product with modern technologies",
                  "Managing product development, team coordination, and client relationships",
                  "Building scalable solutions using modern tech stacks",
                ],
              },
              {
                title: "SQA Intern",
                company: "SQALOGY",
                period: "January 2026 - June 2026",
                description: [
                  "Performed manual and automation testing for various software applications",
                  "Created and executed test cases to ensure product quality",
                  "Identified and documented bugs, working closely with development team",
                  "Gained experience in quality assurance best practices and testing methodologies",
                ],
              },
              {
                title: "Mobile App Development Training",
                company: "Bangladesh Computer Council (EDGE PROJECT) — Government of Bangladesh(ICT Division)",
                period: "August 2024 - December 2024",
                description: [
                  "Completed comprehensive structured training in Android development using Java and Kotlin",
                  "Developed multiple Android applications implementing modern architecture components",
                  "Applied advanced patterns including ViewModel, LiveData, and Room database",
                  "Gained proficiency in debugging, unit testing, and technical documentation practices",
                ],
              },
              {
                title: "UI/UX Designer Intern",
                company: "Hexen",
                period: "May 2024 - July 2024 (3 months)",
                description: [
                  "Designed user interfaces and experiences for web and mobile applications",
                  "Created wireframes, prototypes, and high-fidelity designs in Figma",
                  "Collaborated with developers to ensure design implementation accuracy",
                  "Conducted user research and applied design thinking principles",
                ],
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-5 sm:p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-lg sm:text-xl text-gray-900 dark:text-white mb-1">{job.title}</h3>
                <p className="text-blue-600 dark:text-purple-400 text-sm sm:text-base mb-2">{job.company}</p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-4">{job.period}</p>
                <ul className="space-y-2">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-sm sm:text-base text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span className="text-blue-600 dark:text-purple-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white">Education</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                degree: "Bachelor of Science in Computer Science and Engineering",
                school: "International Islamic University Chittagong",
                period: "Jan 2022 - July 2026",
                //gpa: "N/A",
                highlights: [
                  "Specialization in Software Engineering and Mobile Application Development",
                  "Graphics and Design Secretary at IIUC Computer Club",
                  "Active member of university tech community",
                  "Focus on Quality Assurance and User Experience Design",
                ],
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-5 sm:p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-lg sm:text-xl text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                <p className="text-blue-600 dark:text-purple-400 text-sm sm:text-base mb-2">{edu.school}</p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-3 sm:mb-4">
                  {edu.period}
                </p>
                <ul className="space-y-1 sm:space-y-2">
                  {edu.highlights.map((item, i) => (
                    <li key={i} className="text-sm sm:text-base text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span className="text-blue-600 dark:text-purple-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-600 to-orange-600 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white">Key Achievements</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              "Completed 15+ personal projects",
              "Achieved many voluntary and skills certificates over the years",
              "Contributed to 3 open-source projects on GitHub",
              //"Completed Google UX Design Certificate",
              "Built full-stack applications using modern frameworks",
              "Mentored 5+ peers in web development fundamentals",
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-3 sm:p-4 rounded-lg border border-blue-200 dark:border-gray-700"
              >
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 flex items-start gap-2">
                  <span className="text-blue-600 dark:text-purple-400 text-lg sm:text-xl">✓</span>
                  <span>{achievement}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}