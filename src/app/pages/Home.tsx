import { motion } from "motion/react";
import { ArrowRight, Code, Palette, TestTube, Smartphone, Briefcase, GraduationCap, MapPin, Mail, Phone, Target, Linkedin, Github } from "lucide-react";
import { Link } from "react-router";
import { useRef, useEffect } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { GSAP3DCard } from "../components/GSAP3DCard";
import { GSAP3DText } from "../components/GSAP3DText";
import profileImage from "./asset/dp.jpg";

export function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
    }> = [];

    // Create particles - reduced for better performance
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    let animationId: number;

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z -= 1;

        if (particle.z < 1) particle.z = 1000;
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        const scale = 1000 / particle.z;
        const x2d = (particle.x - canvas.width / 2) * scale + canvas.width / 2;
        const y2d = (particle.y - canvas.height / 2) * scale + canvas.height / 2;
        const size = scale * 2;

        const opacity = (1000 - particle.z) / 1000;
        ctx.fillStyle = `rgba(99, 102, 241, ${opacity * 0.4})`;
        ctx.fillRect(x2d, y2d, size, size);
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 3D Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10"
      />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Hi, I'm Mahmuda Islam Rifah
                </span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-3 sm:mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                SQA Engineer | Mobile & Web Developer | UI/UX Designer
              </motion.p>

              <motion.p
                className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Passionate tech professional with expertise in quality assurance, mobile app development (Android & Flutter), and crafting intuitive user experiences. As founder of Contradox, I blend technical skills with entrepreneurial vision to build innovative digital solutions.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link
                  to="/projects"
                  className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-center"
                >
                  View Projects
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="px-6 sm:px-8 py-3 border-2 border-blue-600 dark:border-purple-600 text-blue-600 dark:text-purple-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 text-center"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              className="relative order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <ImageWithFallback
                  src={profileImage}
                  alt="Professional Portrait"
                  className="relative rounded-full shadow-xl w-full h-full object-cover border-4 border-white dark:border-gray-800"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="relative z-10 py-12 sm:py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {/* Mission */}
            <motion.div
              className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl mb-3 text-gray-900 dark:text-white">Mission</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                To continuously learn and apply modern technologies to create intuitive, accessible applications that provide value to users and businesses.
              </p>
            </motion.div>

            {/* Education */}
            <motion.div
              className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl mb-3 text-gray-900 dark:text-white">Education</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2">
                <span className="font-medium">BSc in Computer Science and Engineering</span>
              </p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                International Islamic University Chittagong
              </p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-1">
                Expected Graduation: 2026
              </p>
            </motion.div>

            {/* Career Summary */}
            <motion.div
              className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-pink-600 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl mb-3 text-gray-900 dark:text-white">Founder & Developer</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Founder of Contradox, building innovative mobile and web solutions. Combining technical expertise in QA, mobile development, and UI/UX design with entrepreneurial leadership.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-12 sm:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">
              I'm always open to discussing new projects, creative ideas, or opportunities
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl"
          >
            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <motion.a
                href="mailto:mahmudaislamrifa@gmail.com"
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur p-4 sm:p-5 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center gap-3 sm:gap-4"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/80 text-xs sm:text-sm">Email</p>
                  <p className="text-white text-sm sm:text-base truncate">mahmudaislamrifa@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/mahmuda-islam-rifah-134363280/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur p-4 sm:p-5 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center gap-3 sm:gap-4"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/80 text-xs sm:text-sm">LinkedIn</p>
                  <p className="text-white text-sm sm:text-base truncate">mahmuda-islam-rifah</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/Ingoyee003"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur p-4 sm:p-5 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center gap-3 sm:gap-4 sm:col-span-2 lg:col-span-1"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/80 text-xs sm:text-sm">GitHub</p>
                  <p className="text-white text-sm sm:text-base truncate">Ingoyee003</p>
                </div>
              </motion.a>
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-lg hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Send Me a Message
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12"
          >
            {[
              { value: "15+", label: "Projects" },
              { value: "2", label: "Startups" },
              { value: "1.5 Years", label: "Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-xl text-center"
              >
                <div className="text-2xl sm:text-3xl text-blue-600 dark:text-purple-400 mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}