import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';

interface WeekEntry {
  id: string;
  week: number;
  title: string;
  description: string;
  topics: string[];
  path: string;
}

const Notebook: React.FC = () => {
  const weekEntries: WeekEntry[] = [
    {
      id: 'week1',
      week: 1,
      title: 'Introducción al Desarrollo Web',
      description: 'Aprendiendo los fundamentos de HTML, CSS y conceptos básicos de JavaScript.',
      topics: ['Estructura HTML', 'Estilos CSS', 'Fundamentos JavaScript'],
      path: '/notebook/week-1',
    },
    {
      id: 'week2',
      week: 2,
      title: 'Diseño Responsivo y JavaScript',
      description: 'Explorando principios de diseño responsivo y avanzando en habilidades de JavaScript.',
      topics: ['Diseño Responsivo', 'Media Queries', 'Funciones JavaScript'],
      path: '/notebook/week-2',
    },
    {
      id: 'week3',
      week: 3,
      title: 'Frameworks Frontend y APIs',
      description: 'Introducción a React y trabajo con APIs para contenido dinámico.',
      topics: ['Fundamentos de React', 'Componentes', 'Integración API'],
      path: '/notebook/week-3',
    },
    {
      id: 'week4',
      week: 4,
      title: 'JavaScript, TypeScript y Canvas',
      description: 'Exploración de los fundamentos de JavaScript y TypeScript con animaciones Canvas',
      topics: ['Fundamentos JS/TS', 'Manipulación DOM', 'Animación Canvas'],
      path: '/notebook/week-4',
    },
    {
      id: 'week5',
      week: 5,
      title: 'Desarrollo Frontend con Frameworks JavaScript',
      description: 'Explorando React, arquitectura basada en componentes y enfoques de estilización.',
      topics: ['Fundamentos de React', 'Props y Children', 'Estilos en React'],
      path: '/notebook/week-5',
    },    
    {
      id: 'week6',
      week: 6,
      title: 'Eventos, Renderizado y Consumo de APIs',
      description: 'Explorando eventos, renderizado condicional e iterativo, y consumo de APIs con React.',
      topics: ['Eventos en React', 'Renderizado Condicional', 'Consumo de APIs'],
      path: '/notebook/week-6',
    },
    {
      id: 'week7',
      week: 7,
      title: 'Uso de Hooks en React',
      description: 'Explorando los diferentes hooks de React y sus aplicaciones prácticas.',
      topics: ['useState/useEffect', 'useContext/useReducer', 'Hooks Personalizados'],
      path: '/notebook/week-7',
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
          <h1 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-4">
            Cuaderno de <span className="text-blue-600 dark:text-blue-400">Aprendizaje</span>
          </h1>
          <p className="text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12">
            Un registro semanal de mi aprendizaje, incluidos los temas estudiados, los ejercicios realizados y las reflexiones personales.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {weekEntries.map((entry) => (
            <motion.div
              key={entry.id}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3 mr-4">
                    <BookOpen className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                      Semana {entry.week}: {entry.title}
                    </h3>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{entry.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                    Temas tratados:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {entry.topics.map((topic, index) => (
                      <span
                        key={index}
                        className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to={entry.path}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Ver notas detalladas
                  <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            to="/final-reflection"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            Ver Reflexión Final
            <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notebook;