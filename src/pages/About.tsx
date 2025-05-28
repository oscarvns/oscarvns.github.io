import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  const experienceItems = [
    {
      title: 'Software Developer',
      company: 'Tech Company',
      period: '2023 - Present',
      description: 'Working on full-stack web applications using modern technologies.',
      icon: <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />,
    },
    {
      title: 'Web Development Intern',
      company: 'Digital Agency',
      period: '2022 - 2023',
      description: 'Developed responsive websites and assisted with UX/UI design.',
      icon: <Briefcase className="text-blue-600 dark:text-blue-400\" size={24} />,
    },
  ];

  const educationItems = [
    {
      degree: 'BSc in Computer Science',
      institution: 'University Name',
      period: '2020 - 2024',
      description: 'Focusing on web development, algorithms, and data structures.',
      icon: <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />,
    },
    {
      degree: 'Web Development Bootcamp',
      institution: 'Coding Academy',
      period: '2022',
      description: 'Intensive 12-week program covering front-end and back-end technologies.',
      icon: <GraduationCap className="text-blue-600 dark:text-blue-400\" size={24} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen pt-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-12">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h1>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-6xl text-blue-600 dark:text-blue-400 font-bold">
                  AB
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                  Hello, I'm [Your Name]
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  I'm a passionate learner and developer focused on creating beautiful, functional web
                  applications. This portfolio documents my learning journey and showcases the projects
                  I've completed along the way.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  My background combines formal education in computer science with practical experience
                  in web development. I'm constantly seeking to expand my knowledge and improve my skills.
                </p>
                <div className="flex items-center text-slate-600 dark:text-slate-300">
                  <Heart className="text-red-500 mr-2" size={18} />
                  <span>Passionate about clean code, user experience, and continuous learning</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
                <Briefcase className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
                Experience
              </h2>
              <div className="space-y-6">
                {experienceItems.map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="relative pl-10">
                    <div className="absolute left-0 top-1">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                      {item.company} | {item.period}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
                <GraduationCap className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
                Education
              </h2>
              <div className="space-y-6">
                {educationItems.map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="relative pl-10">
                    <div className="absolute left-0 top-1">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{item.degree}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                      {item.institution} | {item.period}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
              <Award className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'TypeScript', 'Git', 'UI/UX Design', 'Responsive Design'].map(
                (skill, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3 text-center text-slate-700 dark:text-slate-200"
                  >
                    {skill}
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;