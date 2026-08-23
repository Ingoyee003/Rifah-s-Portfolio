import { motion } from "motion/react";
import { Award, CheckCircle, ExternalLink, Calendar, BookOpen } from "lucide-react";

import cert1 from "./asset/ICRCS.png";
import cert2 from "./asset/DL_BIP.jpeg";
import cert3 from "./asset/ET_CTF.jpeg";
import cert4 from "./asset/Flutter.jpg";
import cert5 from "./asset/Flutter Dart.jpg";
import cert6 from "./asset/ICISET.png";
import cert7 from "./asset/Python.png";
import cert8 from "./asset/react_Native.jpg";
import cert9 from "./asset/roverx.jpg";
import cert10 from "./asset/Volunteer.png";
import cert11 from "./asset/edge.jpg";
import cert12 from "./asset/P_Hero.jpg";
import cert13 from "./asset/QPAIN2026.jpg";
import acceptanceLetter from "./asset/paper_1.jpg";

export function Certifications() {
  const certifications = [
    {
      name: "4th International Congress on Recent Trends in Computer Science-2025 (ICRCS-2025)",
      issuer: "IEEE Computer Society Bangladesh Chapter & ICIRCS",
      date: "April 17-18, 2025",
      credentialId: "ICRCS-2025",
      color: "from-blue-600 to-indigo-600",
      skills: ["Computer Science", "Research Trends", "Academic Networking", "Technology Innovation"],
      description: "Successfully participated in the 4th International Congress on Recent Trends in Computer Science from 17th to 18th April 2025.",
      image: cert1,
    },
    {
  name: "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence and Networking (QPAIN 2026) - Paper Presentation",
  issuer: "IEEE Photonics Society Bangladesh Chapter",
  date: "16-18 April 2026",
  credentialId: "4493",
  color: "from-indigo-600 to-purple-600",
  skills: [
    "Machine Learning",
    "Neural Networks",
    "Artificial Intelligence",
    "Research Presentation",
    "IEEE Conference",
    "Paper Presentation"
  ],
  description: "Successfully presented the research paper titled \"Multi-Class Road Traffic Accident Severity Prediction Using Machine Learning and Neural Networks: A Comprehensive Study with Imbalance-Aware Techniques\" (Paper ID: 4493) at the 2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence and Networking (QPAIN 2026), held on 16-18 April 2026 at the IT Business Incubator, Chittagong University of Engineering and Technology (CUET), Chattogram, Bangladesh. Organized by the IEEE Photonics Society Bangladesh Chapter.",
  image: cert13,
},
    {
      name: "IIUC Tech Fest 2025 - Deep Learning in Biomedical Image Analysis Seminar",
      issuer: "IEEE Computer Society IIUC Student Branch Chapter",
      date: "November 22, 2025",
      credentialId: "C213235",
      color: "from-purple-600 to-pink-600",
      skills: ["Deep Learning", "Biomedical Imaging", "AI/ML", "Medical Technology"],
      description: "Active participation in the seminar titled 'The Role of Deep Learning in Biomedical Image Analysis' at the IIUC Central Auditorium, organized by IIUC Tech Fest 2025.",
      image: cert2,
    },
    {
      name: "Seminar on Ethical Hacking and Capture the Flag (CTF)",
      issuer: "IIUC Computer Club - Female Chapter",
      date: "November 15, 2025",
      credentialId: "IIUC-CTF-2025",
      color: "from-cyan-600 to-blue-600",
      skills: ["Ethical Hacking", "Cybersecurity", "CTF", "Information Security"],
      description: "Active participation in the Seminar on Ethical Hacking and Capture the Flag (CTF) conducted on 15 November 2025 organized by the IIUC Computer Club - Female Chapter.",
      image: cert3,
    },
    {
      name: "12 Hours Long App Development Crash Course",
      issuer: "IEEE Computer Society IIUC Student Branch Chapter",
      date: "2024",
      credentialId: "C213235",
      color: "from-yellow-600 to-orange-600",
      skills: ["Mobile App Development", "Flutter", "Android Development", "Rapid Prototyping"],
      description: "Participated in 12 Hours Long App Development Crash Course organized by IEEE Computer Society IIUC Student Branch Chapter.",
      image: cert4,
    },
    {
      name: "3rd International Conference on Innovations in Science, Engineering and Technology (ICISET 2022)",
      issuer: "ICISET 2022 - International Islamic University Chittagong",
      date: "February 25-28, 2022",
      credentialId: "CDN22250 / C213235",
      color: "from-green-600 to-teal-600",
      skills: ["Engineering Innovation", "Science & Technology", "Technical Events", "Academic Conference"],
      description: "Actively participating in the technical events organized during the 3rd International Conference on Innovations in Science, Engineering and Technology held on 25th - 28th February 2022 at International Islamic University Chittagong.",
      image: cert6,
    },
    {
      name: "Programming with Python: Hands-on for Beginners",
      issuer: "IEEE IIUC SB & IEEE PES IIUC SBC",
      date: "May 14-15, 2022",
      credentialId: "Sr. No: 136",
      color: "from-indigo-600 to-purple-600",
      skills: ["Python Programming", "Hands-on Training", "Beginner Programming", "IEEE Workshop"],
      description: "Actively participated in the two-day long workshop titled 'Programming with Python: Hands-on for Beginners' on 14th & 15th May 2022. Organized by IEEE IIUC SB, IEEE PES IIUC SBC in collaboration with IEEE IIUC Student Branch WIE Affinity Group.",
      image: cert7,
    },
    {
      name: "React Native for Beginners by The Net Ninja",
      issuer: "Cursa",
      date: "October 8-16, 2025",
      credentialId: "u7111720",
      color: "from-pink-600 to-rose-600",
      skills: ["React Native", "Mobile Development", "Cross-Platform Apps", "JavaScript"],
      description: "Completed the React Native for beginners course by The Net Ninja on Cursa learning platform. Course duration: 05 hours 26 minutes, completed from 10/08/2025 to 10/16/2025.",
      image: cert8,
    },
    {
      name: "Seminar with Mars Rover Challenge Experts on RoverX",
      issuer: "IEEE IIUC Student Branch",
      date: "June 16, 2025",
      credentialId: "IEEIIUCSB25S1-183 / C213235",
      color: "from-orange-600 to-red-600",
      skills: ["Robotics", "Mars Rover", "Engineering Challenge", "Team Project"],
      description: "Participated in A Seminar with Mars Rover Challenge Experts on 'RoverX' with the Team Project Altair from IUT, organized by IEEE IIUC Student Branch held on 16th June, 2025 at Central Auditorium, International Islamic University Chittagong.",
      image: cert9,
    },
    {
      name: "Certificate of Appreciation - Student Volunteer",
      issuer: "International Islamic University Chittagong",
      date: "July 7, 2024",
      credentialId: "C213235",
      color: "from-teal-600 to-cyan-600",
      skills: ["Volunteer Service", "Leadership", "Organization", "Community Service"],
      description: "Received Certificate of Appreciation in recognition of commendable service as a student volunteer during the Orientation Program - Autumn'24 held on 7th July, 2024 at the International Islamic University Chittagong.",
      image: cert10,
    },
    {
      name: "Workshop on Flutter Launchpad with Dart Programming",
      issuer: "Ostad",
      date: "2024",
      credentialId: "C34612",
      color: "from-amber-600 to-yellow-600",
      skills: ["Flutter", "Dart Programming", "Mobile Development", "Launchpad Workshop"],
      description: "Successfully completed the course of Workshop on Flutter Launchpad with Dart Programming. Instructed by Md Morsedul Islam (Ostad The Coach) and Abdullah Al Musabbir (CEO, Ostad).",
      image: cert5,
    },
    {
      name: "Mobile App Development (Android/Flutter/iOS) Training - EDGE Project",
      issuer: "Bangladesh Computer Council, ICT Division & CUET",
      date: "August 2024 - December 2024",
      credentialId: "EDGE-DSTS-104-1635-00013",
      color: "from-blue-600 to-sky-600",
      skills: ["Android Development", "Flutter", "iOS Development", "Mobile Apps", "80 Hours Training"],
      description: "Successfully completed a training on Mobile App Development (Android/Flutter/iOS) conducted by the Department of Computer Science and Engineering (CSE), Chittagong University of Engineering & Technology from Aug 2024 to Dec 2024 (80 hours), under Enhancing Digital Government and Economy (EDGE) Project of Bangladesh Computer Council, ICT Division. Date of issue: 27-Mar-2025.",
      image: cert11,
    },
    {
  name: "21 Days of Code – A Web Development Bootcamp",
  issuer: "Programming Hero",
  date: "2024",
  credentialId: "21DaysOfCode-Bootcamp",
  color: "from-purple-600 to-pink-600",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Web Development",
    "Frontend Development"
  ],
  description:
    "Successfully completed the '21 Days of Code – A Web Development Bootcamp' organized by Programming Hero, demonstrating dedication and active participation in learning essential web development skills.",
  image: cert12,
}
  ];

  const publications = [
    {
      type: "Research Paper",
      title: "Multi-Class Road Traffic Accident Severity Prediction Using Machine Learning and Neural Networks: A Comprehensive Study with Imbalance-Aware Techniques",
      venue: "IEEE QPAIN 2026",
      date: "Accepted - February 15, 2026",
      status: "Accepted",
      paperId: "4493",
      link: "#",
      authors: "Mahmuda Islam Rifah, Sadia Ismat, Mosammet Rabeka Sultana, Jannatul Mawya Mitu, Saiful Islam, Zinnia Sultana",
      description: "Accepted for IEEE QPAIN 2026 with Minor Revision. Paper focuses on comprehensive machine learning and neural network approaches for predicting multi-class road traffic accident severity using imbalance-aware techniques. Will be included in IEEE Xplore Digital Library and indexed by Scopus.",
      image: acceptanceLetter,
    },
    {
      type: "Research Paper",
      title: "Suicide Risk Prediction and Prevention",
      venue: "In Progress",
      date: "Ongoing Research",
      status: "In Progress",
      link: "#",
      authors: "Mahmuda Islam Rifah, Mosammet Rabaka Sultana, Sadia Isnat",
      description: "Currently conducting research on suicide risk prediction and prevention using machine learning and data analysis techniques. This research aims to develop predictive models and prevention strategies.",
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
              Certifications & Publications
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 px-4">
            Professional credentials, learning achievements, and technical writing
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {[
            { icon: Award, value: "13", label: "Certifications" },
            { icon: CheckCircle, value: "30+", label: "Skills Validated" },
            { icon: BookOpen, value: "2", label: "Publications" },
            { icon: Calendar, value: "2026", label: "Latest" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg text-center"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6 sm:mb-8">Certifications</h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${cert.color} p-5 sm:p-6 relative`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-xl text-white mb-2">{cert.name}</h3>
                      <p className="text-white/80 text-xs sm:text-sm">{cert.issuer}</p>
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Date and Credential */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{cert.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm">Verified</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-xs sm:text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Certificate Image */}
                  <div className="mb-4 rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                    <img 
                      src={cert.image} 
                      alt={cert.name}
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-2">Skills Validated:</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className={`px-2 sm:px-3 py-1 bg-gradient-to-r ${cert.color} bg-opacity-10 text-xs sm:text-sm rounded-full text-gray-700 dark:text-gray-300`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Credential ID and Link */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between gap-2">
                      <code className="text-xs text-gray-500 dark:text-gray-500 truncate">
                        ID: {cert.credentialId}
                      </code>
                      <a
                        href="#"
                        className="flex items-center gap-1 text-xs sm:text-sm text-blue-600 dark:text-purple-400 hover:underline shrink-0"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                        Verify
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Publications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6 sm:mb-8">Publications & Writing</h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3 gap-2">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs rounded-full">
                      {pub.type}
                    </span>
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      pub.status === "Published" 
                        ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                        : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"
                    }`}>
                      {pub.status}
                    </span>
                  </div>
                  {pub.reactions > 0 && (
                    <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{pub.reactions} reactions</span>
                    </div>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl text-gray-900 dark:text-white mb-2">
                  {pub.title}
                </h3>

                <p className="text-xs sm:text-sm text-blue-600 dark:text-purple-400 mb-3">
                  {pub.venue} • {pub.date}
                </p>

                {pub.authors && (
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-3">
                    <span className="font-semibold">Authors:</span> {pub.authors}
                  </p>
                )}

                {pub.paperId && (
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-3">
                    <span className="font-semibold">Paper ID:</span> {pub.paperId}
                  </p>
                )}

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {pub.description}
                </p>

                {pub.image && (
                  <div className="mb-4 rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                    <img 
                      src={pub.image} 
                      alt={pub.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                )}

                {pub.status === "Published" && (
                  <div className="flex items-center justify-end">
                    <a
                      href={pub.link}
                      className="flex items-center gap-2 text-xs sm:text-sm text-blue-600 dark:text-purple-400 hover:underline"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      Read Article
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}