import { motion } from "motion/react";
import { Code, Scissors, Camera, Plane, PenTool, Music, Youtube } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Interests() {
  const interests = [
    {
      icon: Code,
      title: "Building Systems & Continuous Learning",
      description: "Passionate about building new systems and applications while constantly learning emerging technologies and best practices. Always exploring innovative solutions and expanding my technical horizons.",
      image: "https://images.unsplash.com/photo-1763905180930-892ee8d37ea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwY29kaW5nJTIwY29tcHV0ZXIlMjBzY3JlZW4lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzczMTUzNzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: Scissors,
      title: "Crocheting",
      description: "Enjoy creating beautiful handmade items through crocheting. It's a relaxing creative outlet that helps me unwind while making unique pieces.",
      image: "https://images.unsplash.com/photo-1749103736516-fecf975e50fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGNyb2NoZXRpbmclMjBjb2xvcmZ1bCUyMHByb2plY3QlMjBob29rfGVufDF8fHx8MTc3MzE1Mzc2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-green-600 to-teal-600",
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Amateur photographer capturing everyday moments and landscapes. Love experimenting with composition and lighting.",
      image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMGhvYmJ5fGVufDF8fHx8MTc0MDY4OTI0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: PenTool,
      title: "Writing & Audiobook Creation",
      description: "Love writing novels and stories, and bringing them to life through audiobook creation. Check out my audiobook channel for creative storytelling!",
      image: "https://images.unsplash.com/photo-1582201942930-53fea460eeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdyaXRpbmclMjBzdG9yeSUyMG5vdGVib29rfGVufDF8fHx8MTc3MzE1MzM0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-yellow-600 to-orange-600",
      youtubeLink: "http://www.youtube.com/@NoisySilence_003",
    },
    {
      icon: Music,
      title: "Music & Podcasts",
      description: "Love listening to music while coding and enjoy tech podcasts during commutes. Always discovering new artists.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHBvZGNhc3R8ZW58MXx8fHwxNzQwNjg5Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-pink-600 to-purple-600",
    },
    {
      icon: Plane,
      title: "Travel & Exploration",
      description: "Excited to explore new places and experience different cultures. Dream of visiting tech hubs around the world.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBleHBsb3JlfGVufDF8fHx8MTc0MDY4OTMyMHww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-orange-600 to-red-600",
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
              Interests & Hobbies
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 px-4">
            What I enjoy doing when I'm not coding
          </p>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <ImageWithFallback
                  src={interest.image}
                  alt={interest.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className={`absolute top-3 left-3 sm:top-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${interest.color} rounded-xl flex items-center justify-center`}>
                  <interest.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900 dark:text-white">{interest.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3">{interest.description}</p>
                {interest.youtubeLink && (
                  <a
                    href={interest.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm transition-colors duration-200"
                  >
                    <Youtube className="w-4 h-4" />
                    <span>Visit My Audiobook Channel</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-600 to-purple-600 p-6 sm:p-8 rounded-2xl shadow-xl text-white"
        >
          <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6">Fun Facts About Me</h3>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              "📚 Currently reading 'Clean Code' by Robert Martin",
              "💻 Completed 10+ online courses this year",
              "🎯 Solved 100+ coding challenges on LeetCode",
              "☕ Coffee enthusiast - can't code without it!",
              "🌱 Learning something new every day",
              "🎨 Design and UX enthusiast",
            ].map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur rounded-lg p-3 sm:p-4"
              >
                <p className="text-sm sm:text-base md:text-lg">{fact}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center px-4"
        >
          <blockquote className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 italic mb-3 sm:mb-4">
            "The best way to predict the future is to create it."
          </blockquote>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">- A quote I live by</p>
        </motion.div>
      </div>
    </motion.div>
  );
}