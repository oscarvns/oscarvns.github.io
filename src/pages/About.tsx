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
            Sobre <span className="text-blue-600 dark:text-blue-400">mi</span>
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
                  JJ
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                  Hola soy José Joao Surichaqui Barra
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Soy un aprendiz apasionado y desarrollador enfocado en crear aplicaciones web
                  hermosas y funcionales. Este portafolio documenta mi viaje de aprendizaje y muestra los
                  proyectos que he completado en el camino.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Mi objetivo es crear aplicaciones que no solo sean funcionales, sino que también ofrezcan una
                  experiencia de usuario excepcional. Estoy comprometido con la mejora continua y la adopción de las mejores prácticas en el desarrollo de software.
                </p>

              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
              <Award className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
              Habilidades
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