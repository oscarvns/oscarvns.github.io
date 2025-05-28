import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, BookOpen, Code, BookMarked } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-900 dark:to-blue-950 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-30 dark:opacity-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-blue-400 dark:bg-blue-600"
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="container mx-auto text-center z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
              Bienvenido a mi{' '}
              <span className="text-blue-600 dark:text-blue-400">viaje de aprendizaje</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
              Documentar mi crecimiento, mis proyectos y mis reflexiones a medida que exploro nuevas tecnologías y conceptos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                Sobre mi 
              </Link>
              <Link
                to="/projects"
                className="px-8 py-3 rounded-lg bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-medium border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors shadow-md hover:shadow-lg"
              >
                Ver proyectos
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-600 dark:text-slate-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Quick Navigation Section */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
            Explora mi portafolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-50 dark:bg-slate-700 rounded-xl shadow-md p-8 flex flex-col items-center text-center transition-all hover:shadow-lg"
            >
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full mb-6">
                <BookOpen className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                Cuaderno de aprendizaje
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Explora mi cuaderno de aprendizaje semanal, que incluye temas, ejercicios y reflexiones.
              </p>
              <Link
                to="/notebook"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Ver cuaderno
              </Link>
            </motion.div>

            {/* <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-50 dark:bg-slate-700 rounded-xl shadow-md p-8 flex flex-col items-center text-center transition-all hover:shadow-lg"
            >
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full mb-6">
                <Code className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                Proyectos completados
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Navega a través de mi portafolio de proyectos completados y estudios de caso.
              </p>
              <Link
                to="/projects"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Ver proyectos
              </Link>
            </motion.div> */}

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-50 dark:bg-slate-700 rounded-xl shadow-md p-8 flex flex-col items-center text-center transition-all hover:shadow-lg"
            >
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full mb-6">
                <BookMarked className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                Reflexiones finales
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Lee mi reflexión metacognitiva sobre lo que aprendí y cómo lo hice.
              </p>
              <Link
                to="/final-reflection"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Ver reflexiones
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;