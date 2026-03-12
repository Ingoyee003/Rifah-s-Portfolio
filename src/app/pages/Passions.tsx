import { motion } from "motion/react";
import { Heart, Users, Lightbulb, Globe, Code, Sparkles } from "lucide-react";

export function Passions() {
  const passions = [
    {
      icon: Code,
      title: "Software Development",
      description: "Building beautiful, functional web and mobile applications that solve real problems. I love bringing designs to life with code and creating great user experiences across all platforms.",
      color: "from-blue-600 to-cyan-600",
      impact: "15+ projects",
      details: [
        "Creating responsive web and mobile apps",
        "Learning modern frameworks (React, Flutter, Android)",
        "Exploring cross-platform development",
      ],
    },
    {
      icon: Users,
      title: "Learning & Growth",
      description: "Constantly expanding my knowledge through courses, tutorials, and hands-on practice. Every day is an opportunity to learn something new.",
      color: "from-purple-600 to-pink-600",
      impact: "10+ courses",
      details: [
        "Completing online certifications",
        "Following tech blogs and podcasts",
        "Practicing coding challenges",
      ],
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "I love the challenge of breaking down complex problems and finding elegant solutions. Debugging and optimization excite me.",
      color: "from-orange-600 to-yellow-600",
      impact: "100+ challenges",
      details: [
        "Solving algorithmic problems",
        "Optimizing code performance",
        "Thinking creatively about solutions",
      ],
    },
    {
      icon: Globe,
      title: "Technology for Good",
      description: "Using technology to make a positive impact. I'm passionate about building tools that help people and make their lives easier.",
      color: "from-green-600 to-teal-600",
      impact: "Community projects",
      details: [
        "Building accessible applications",
        "Contributing to helpful tools",
        "Focusing on user-centered design",
      ],
    },
    {
      icon: Sparkles,
      title: "UI/UX Design",
      description: "Creating intuitive, beautiful interfaces that users love. I enjoy the intersection of design and functionality.",
      color: "from-pink-600 to-purple-600",
      impact: "Design enthusiast",
      details: [
        "Studying design principles",
        "Creating prototypes in Figma",
        "Learning about user experience",
      ],
    },
    {
      icon: Heart,
      title: "Community & Collaboration",
      description: "Connecting with other developers, sharing knowledge, and learning from the community. Together we grow stronger.",
      color: "from-red-600 to-orange-600",
      impact: "Active member",
      details: [
        "Participating in online forums",
        "Attending tech meetups",
        "Sharing my learning journey",
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
              My Passions
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 px-4">
            What drives me and inspires my journey in tech
          </p>
        </motion.div>

        {/* Passions Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {passions.map((passion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${passion.color} p-5 sm:p-6`}>
                <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                    <passion.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl text-white">{passion.title}</h3>
                    <p className="text-white/80 text-xs sm:text-sm">{passion.impact}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  {passion.description}
                </p>

                {/* Details */}
                <div className="space-y-2">
                  {passion.details.map((detail, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <span className={`text-transparent bg-gradient-to-r ${passion.color} bg-clip-text mt-1`}>
                        ✓
                      </span>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl text-white text-center"
        >
          <h3 className="text-2xl sm:text-3xl mb-4 sm:mb-6">My Mission</h3>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8">
            To create meaningful web and mobile applications that improve people's lives, continuously learn and grow as a developer, and contribute positively to the tech community.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {["Learning", "Creating", "Growing", "Contributing"].map((value, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-4 sm:px-6 py-2 bg-white/20 backdrop-blur rounded-full text-sm sm:text-base md:text-lg"
              >
                {value}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center px-4"
        >
          <blockquote className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 italic mb-3 sm:mb-4">
            "The only way to do great work is to love what you do."
          </blockquote>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">- Steve Jobs</p>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { value: "15+", label: "Projects Built" },
            { value: "10+", label: "Courses Completed" },
            { value: "100+", label: "Problems Solved" },
            { value: "3", label: "Hackathons" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg text-center"
            >
              <div className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}