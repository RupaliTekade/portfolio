import React from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaFileExcel,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  LucideDatabase,
  LucideBarChart2,
  LucideFlaskConical,
  LucideBarChartBig,
  LucideBarChartHorizontal,
  LucideFileSpreadsheet,
  LucideBrainCircuit,
  LucideCode2,
  LucideSigma,
  LucideLayoutDashboard,
  LucideFileBarChart,
} from "lucide-react";

const Skills = () => {
  // All skills in a single array (no categories)
  const skills = [
    { name: "Python", icon: <FaPython />, color: "text-yellow-400" },
    { name: "C / C++", icon: <LucideCode2 />, color: "text-blue-400" },
    { name: "SQL", icon: <LucideDatabase />, color: "text-green-500" },
    {
      name: "Machine Learning",
      icon: <LucideBrainCircuit />,
      color: "text-amber-400",
    },
    {
      name: "Data Visualization",
      icon: <LucideBarChart2 />,
      color: "text-pink-400",
    },
    { name: "Pandas", icon: <LucideFileSpreadsheet />, color: "text-blue-300" },
    { name: "NumPy", icon: <LucideSigma />, color: "text-cyan-400" },
    {
      name: "Matplotlib",
      icon: <LucideBarChartBig />,
      color: "text-orange-400",
    },
    {
      name: "Seaborn",
      icon: <LucideBarChartHorizontal />,
      color: "text-teal-400",
    },
    {
      name: "Power BI",
      icon: <LucideLayoutDashboard />,
      color: "text-yellow-500",
    },
    { name: "Excel", icon: <FaFileExcel />, color: "text-green-400" },
    { name: "Streamlit", icon: <LucideFileBarChart />, color: "text-pink-500" },
    { name: "Flask", icon: <LucideFlaskConical />, color: "text-gray-300" },
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-500" },
    {
      name: "ReactJS",
      icon: <FaReact />,
      color: "text-blue-500",
    },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill />,
      color: "text-green-500",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="skills" className="bg-gray-900 py-20 px-4 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-white pb-4 mb-12 text-center relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="relative inline-block">
            Skills
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></span>
          </span>
        </motion.h1>

        {/* All skills in a single grid */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-10 md:gap-x-12 md:gap-y-12 mb-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.13,
                rotate: 3,
                boxShadow: "0 0 24px rgba(245, 158, 11, 0.25)",
              }}
              className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center 
                bg-gray-800 border-2 border-gray-700 cursor-default
                transition-all duration-300 hover:border-amber-400 ${skill.color}`}
            >
              <div className="text-3xl sm:text-4xl mb-2">{skill.icon}</div>
              <div className="text-xs sm:text-sm font-semibold text-white text-center px-1">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 max-w-md sm:max-w-2xl mx-auto text-base sm:text-lg">
            I work with these technologies daily to build modern, responsive,
            and scalable web applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
