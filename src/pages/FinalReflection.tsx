import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Lightbulb, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalReflection: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-6">
              Reflexión <span className="text-blue-600 dark:text-blue-400">Final</span>
            </h1>
            <p className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
              Un análisis metacognitivo de mi viaje de aprendizaje, explorando lo que aprendí, cómo lo aprendí y cómo este conocimiento dará forma a mis futuros proyectos.
            </p>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <BookOpen className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Lo Que Aprendí
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600 dark:text-slate-300">
                  A lo largo de este curso, he adquirido una comprensión completa de los fundamentos del desarrollo web, desde HTML y CSS básicos hasta conceptos más avanzados como diseño responsivo, programación en JavaScript y frameworks modernos como React.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  La Semana 1 estableció los bloques esenciales con estructura HTML, estilización CSS y fundamentos de JavaScript. Estos fundamentos resultaron cruciales para todo lo que siguió, proporcionando la sintaxis y los modelos mentales necesarios para el desarrollo web.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  La Semana 2 expandió mi conocimiento con principios de diseño responsivo y conceptos más profundos de JavaScript. Aprender sobre media queries transformó mi comprensión de cómo los sitios web modernos se adaptan a diferentes dispositivos, mientras que explorar funciones de JavaScript mejoró mis capacidades de programación.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  La Semana 3 me introdujo a React y la integración de APIs, lo que representó un salto significativo en complejidad pero también en capacidad. Entender la arquitectura basada en componentes y la gestión de estado abrió nuevas posibilidades para construir aplicaciones web interactivas.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Más allá de tecnologías específicas, aprendí conceptos más amplios como:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300 ml-4">
                  <li>La importancia de la experiencia de usuario y la accesibilidad en el diseño web</li>
                  <li>Cómo abordar la resolución de problemas metódicamente en programación</li>
                  <li>Mejores prácticas para escribir código limpio y mantenible</li>
                  <li>El valor de la documentación y el aprendizaje continuo en un campo que evoluciona rápidamente</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Lightbulb className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Cómo Aprendí
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600 dark:text-slate-300">
                  Mi viaje de aprendizaje combinó múltiples enfoques, cada uno contribuyendo de manera única a mi comprensión y desarrollo de habilidades:
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Aprendizaje Estructurado</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Seguir el plan de estudios del curso proporcionó una progresión lógica de conceptos, con cada semana construyendo sobre la anterior. Este enfoque escalonado me ayudó a construir un modelo mental coherente del desarrollo web.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Práctica Práctica</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Los ejercicios de laboratorio fueron cruciales para cimentar mi comprensión. Construir componentes y aplicaciones reales me obligó a aplicar conocimientos teóricos y desarrollar habilidades de resolución de problemas. Descubrí que aprendía más efectivamente cuando abordaba desafíos reales de programación.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Aprendizaje Basado en Errores</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Algunos de mis momentos de aprendizaje más valiosos vinieron de depurar código que no funcionaba como se esperaba. Estos desafíos requirieron una investigación más profunda de los conceptos y a menudo llevaron a momentos de "¡ajá!" que solidificaron mi comprensión.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Práctica Reflexiva</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Tomar tiempo para reflexionar sobre mi aprendizaje semanalmente me ayudó a identificar patrones en mi comprensión y áreas que necesitaban mejorar. Este enfoque metacognitivo me permitió ajustar mis estrategias de aprendizaje y enfocarme en conceptos desafiantes.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Utilización de Recursos</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Aproveché varios recursos más allá del material del curso, incluyendo documentación, tutoriales y foros comunitarios. Aprender a encontrar y evaluar recursos de forma independiente es una habilidad que me servirá en el aprendizaje continuo.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Mirando Hacia Adelante
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600 dark:text-slate-300">
                  Este viaje de aprendizaje ha establecido una base sólida para mi continuo crecimiento como desarrollador web. Mirando hacia adelante, planeo:
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Profundizar en Conocimientos Técnicos</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Quiero explorar más a fondo conceptos avanzados de React, aprender sobre bibliotecas de gestión de estado como Redux, y sumergirme en renderizado del lado del servidor y Next.js. También estoy interesado en explorar TypeScript para desarrollo JavaScript con tipos seguros.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Construir Proyectos Más Complejos</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Para solidificar mis habilidades, planeo desarrollar aplicaciones más sofisticadas que integren múltiples tecnologías y aborden problemas del mundo real. El aprendizaje basado en proyectos seguirá siendo central para mi crecimiento.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Contribuir al Código Abierto</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Participar en proyectos de código abierto me expondrá a diferentes bases de código y prácticas de desarrollo colaborativo. Esto mejorará tanto mis habilidades técnicas como mi capacidad para trabajar con otros.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Mantenerme al Día con Tendencias de la Industria</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  El desarrollo web evoluciona rápidamente, por lo que necesitaré mantenerme informado sobre tecnologías emergentes y mejores prácticas. El aprendizaje continuo será esencial a lo largo de mi carrera.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Reflexiones Finales</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Este curso no solo me ha enseñado habilidades técnicas sino también cómo aprender efectivamente en un campo técnico. La capacidad de abordar nuevos conceptos metódicamente, practicar deliberadamente y reflexionar sobre mi aprendizaje será invaluable mientras continúo creciendo como desarrollador.
                </p>
                
                <div className="mt-8 text-center">
                  <Link
                    to="/bibliography"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Ver Bibliografía
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FinalReflection;