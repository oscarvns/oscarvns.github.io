import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Lightbulb, GraduationCap, ArrowRight, Code, Database, Globe } from 'lucide-react';
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
              Un análisis metacognitivo de mi viaje completo de aprendizaje en desarrollo web, desde fundamentos frontend hasta arquitecturas de microservicios con Django.
            </p>

            {/* Lo Que Aprendí */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <BookOpen className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Lo Que Aprendí
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-slate-600 dark:text-slate-300">
                  Este curso me llevó en un viaje transformador desde los fundamentos del desarrollo web hasta 
                  arquitecturas empresariales complejas, proporcionándome una comprensión holística del ecosistema 
                  de desarrollo moderno.
                </p>

                {/* Fase Frontend */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Code className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                      Fundamentos Frontend (Semanas 1-7)
                    </h3>
                  </div>
                  <div className="space-y-3 text-slate-600 dark:text-slate-300">
                    <p>
                      <strong>Semanas 1-2:</strong> Establecí las bases sólidas con HTML semántico, CSS moderno 
                      y JavaScript fundamental. El diseño responsivo y media queries transformaron mi comprensión 
                      de cómo crear experiencias adaptables.
                    </p>
                    <p>
                      <strong>Semanas 3-4:</strong> La introducción a React marcó un punto de inflexión. Comprender 
                      componentes, props, y la manipulación del DOM virtual cambió completamente mi perspectiva sobre 
                      el desarrollo frontend. TypeScript y Canvas añadieron dimensiones de tipado seguro y gráficos interactivos.
                    </p>
                    <p>
                      <strong>Semanas 5-7:</strong> Profundicé en React con hooks, gestión de estado, y consumo de APIs. 
                      Los hooks personalizados y el patrón de renderizado condicional me dieron herramientas poderosas 
                      para crear interfaces dinámicas y reutilizables.
                    </p>
                  </div>
                </div>

                {/* Fase Backend */}
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Database className="text-green-600 dark:text-green-400 mr-2" size={20} />
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                      Desarrollo Backend (Semanas 9-12)
                    </h3>
                  </div>
                  <div className="space-y-3 text-slate-600 dark:text-slate-300">
                    <p>
                      <strong>Semana 9:</strong> La transición al backend me expuso a arquitecturas server-side, 
                      servidores web, y diferentes lenguajes como PHP y JSP. Comprender la separación frontend/backend 
                      fue fundamental.
                    </p>
                    <p>
                      <strong>Semana 10:</strong> Python se convirtió en mi lenguaje backend preferido. La sintaxis 
                      elegante, POO robusta, y el ecosistema de librerías me impresionaron profundamente.
                    </p>
                    <p>
                      <strong>Semanas 11-12:</strong> Django transformó mi comprensión del desarrollo web. El patrón MTV, 
                      ORM, sistema de autenticación, y panel de administración me mostraron cómo crear aplicaciones 
                      web completas y seguras de manera eficiente.
                    </p>
                  </div>
                </div>

                {/* Fase Avanzada */}
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="text-purple-600 dark:text-purple-400 mr-2" size={20} />
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                      Arquitecturas Avanzadas (Semanas 13-14)
                    </h3>
                  </div>
                  <div className="space-y-3 text-slate-600 dark:text-slate-300">
                    <p>
                      <strong>Semana 13:</strong> Django REST Framework me introdujo al diseño de APIs RESTful modernas. 
                      HATEOAS, serialización avanzada, filtrado, paginación y seguridad API me prepararon para el 
                      desarrollo de servicios escalables.
                    </p>
                    <p>
                      <strong>Semana 14:</strong> Los microservicios representaron el pináculo de complejidad arquitectural. 
                      Docker, Kubernetes, comunicación entre servicios, y monitoreo distribuido me expusieron a 
                      tecnologías de nivel empresarial.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Conceptos Transversales Aprendidos:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-600 dark:text-slate-300">
                    <li>• Principios de diseño UX/UI</li>
                    <li>• Patrones de arquitectura de software</li>
                    <li>• Seguridad web y mejores prácticas</li>
                    <li>• Testing y debugging metodológico</li>
                    <li>• Versionado con Git y colaboración</li>
                    <li>• Optimización de rendimiento</li>
                    <li>• Containerización y orquestación</li>
                    <li>• Monitoreo y observabilidad</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cómo Aprendí */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Lightbulb className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Cómo Aprendí
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600 dark:text-slate-300">
                  Mi metodología de aprendizaje evolucionó a medida que progresaba, adaptándose a la creciente 
                  complejidad de los conceptos:
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Aprendizaje Progresivo y Estructurado</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  La progresión cuidadosamente diseñada del curso, desde HTML básico hasta microservicios, 
                  me permitió construir conocimiento de manera incremental. Cada semana proporcionó las 
                  bases necesarias para la siguiente, creando una escalera de aprendizaje sólida.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Laboratorios Prácticos Intensivos</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Los laboratorios semanales fueron cruciales para mi desarrollo. Desde crear componentes React 
                  hasta implementar APIs RESTful completas y arquitecturas de microservicios, la práctica 
                  constante solidificó mi comprensión teórica.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Debugging Como Herramienta de Aprendizaje</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Los errores se convirtieron en mis mejores maestros. Desde bugs de CSS hasta problemas de 
                  comunicación entre microservicios, cada error resuelto profundizó mi comprensión de los 
                  sistemas subyacentes.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Documentación Reflexiva</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Mantener este cuaderno digital no solo organizó mi conocimiento, sino que me obligó a 
                  articular conceptos complejos, identificar patrones, y reflexionar sobre mi progreso 
                  metacognitivo semanalmente.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Exploración Autónoma</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Complementé el material del curso con documentación oficial, tutoriales avanzados, y 
                  experimentación personal. Esta curiosidad autodidacta me preparó para el aprendizaje 
                  continuo post-curso.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Integración de Tecnologías</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  A medida que avanzaba, aprendí a conectar conceptos entre diferentes tecnologías. 
                  Ver cómo React consume APIs Django, o cómo los microservicios se comunican, me dio una 
                  perspectiva sistémica del desarrollo full-stack.
                </p>
              </div>
            </div>

            {/* Mirando Hacia Adelante */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Mirando Hacia Adelante
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600 dark:text-slate-300">
                  Este viaje de aprendizaje ha establecido una base sólida y versátil para mi carrera en 
                  desarrollo web. Con conocimientos que abarcan desde interfaces de usuario hasta 
                  arquitecturas distribuidas, estoy preparado para abordar desafíos complejos del mundo real.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Especializaciones Técnicas Futuras</h3>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• <strong>Frontend Avanzado:</strong> Next.js, Svelte, WebAssembly, Progressive Web Apps</li>
                    <li>• <strong>Backend Especializado:</strong> GraphQL, Event Sourcing, CQRS, Serverless</li>
                    <li>• <strong>DevOps y Cloud:</strong> AWS/Azure, Terraform, CI/CD avanzado, Service Mesh</li>
                    <li>• <strong>Emerging Tech:</strong> Web3, AI/ML integrations, Edge Computing</li>
                  </ul>
                </div>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Proyectos de Portafolio Ambiciosos</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Planeo desarrollar aplicaciones full-stack complejas que integren múltiples tecnologías 
                  aprendidas: SPAs con React, backends con Django/FastAPI, bases de datos distribuidas, 
                  y despliegue en arquitecturas cloud-native.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Contribución a la Comunidad</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Mi objetivo es contribuir a proyectos open source, especialmente en el ecosistema Django 
                  y React. También quiero compartir conocimiento a través de blogs técnicos y mentoring 
                  a futuros desarrolladores.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Aprendizaje Continuo Estructurado</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  El desarrollo web evoluciona constantemente. Mantendré un régimen de aprendizaje que incluye 
                  seguir blogs técnicos, participar en conferencias, experimentar con tecnologías emergentes, 
                  y mantener certificaciones relevantes.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Impacto Profesional</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Busco oportunidades donde pueda aplicar tanto mis habilidades frontend como backend, 
                  contribuir a decisiones arquitecturales, y eventualmente liderar equipos de desarrollo 
                  en proyectos de impacto significativo.
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Reflexión Final</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Este curso no solo me equipó con habilidades técnicas diversas, sino que me enseñó a 
                    pensar como un desarrollador full-stack. La capacidad de ver el panorama completo 
                    —desde la experiencia del usuario hasta la infraestructura de backend— me permitirá 
                    crear soluciones más elegantes y eficientes. Más importante aún, desarrollé una 
                    metodología de aprendizaje que me servirá a lo largo de mi carrera en este campo 
                    dinámico y emocionante.
                  </p>
                </div>
                
                <div className="mt-8 text-center">
                  <Link
                    to="/bibliography"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-lg"
                  >
                    Ver Bibliografía Completa
                    <ArrowRight className="ml-2" size={20} />
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