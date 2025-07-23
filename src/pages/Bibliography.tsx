import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Link as LinkIcon, Database, Globe } from 'lucide-react';

interface Reference {
  id: string;
  type: 'book' | 'website' | 'documentation';
  title: string;
  author: string;
  year: string;
  source: string;
  url?: string;
  category?: string;
}

const Bibliography: React.FC = () => {
  const references: Reference[] = [
    // Libros Fundamentales
    {
      id: 'ref1',
      type: 'book',
      title: 'Eloquent JavaScript: A Modern Introduction to Programming',
      author: 'Marijn Haverbeke',
      year: '2018',
      source: 'No Starch Press',
      category: 'frontend'
    },
    {
      id: 'ref2',
      type: 'book',
      title: 'HTML and CSS: Design and Build Websites',
      author: 'Jon Duckett',
      year: '2011',
      source: 'Wiley',
      category: 'frontend'
    },
    {
      id: 'ref3',
      type: 'book',
      title: 'Learning React: Modern Patterns for Developing React Apps',
      author: 'Alex Banks & Eve Porcello',
      year: '2020',
      source: "O'Reilly Media",
      category: 'frontend'
    },
    {
      id: 'ref4',
      type: 'book',
      title: 'JavaScript: The Good Parts',
      author: 'Douglas Crockford',
      year: '2008',
      source: "O'Reilly Media",
      category: 'frontend'
    },
    {
      id: 'ref5',
      type: 'book',
      title: 'TypeScript Quickly',
      author: 'Yakov Fain & Anton Moiseev',
      year: '2020',
      source: 'Manning Publications',
      category: 'frontend'
    },
    
    // Libros Python y Django
    {
      id: 'ref6',
      type: 'book',
      title: 'Python Crash Course: A Hands-On, Project-Based Introduction to Programming',
      author: 'Eric Matthes',
      year: '2019',
      source: 'No Starch Press',
      category: 'backend'
    },
    {
      id: 'ref7',
      type: 'book',
      title: 'Django for Beginners: Build websites with Python and Django',
      author: 'William S. Vincent',
      year: '2022',
      source: 'WelcomeToCode',
      category: 'backend'
    },
    {
      id: 'ref8',
      type: 'book',
      title: 'Django for APIs: Build web APIs with Python and Django',
      author: 'William S. Vincent',
      year: '2022',
      source: 'WelcomeToCode',
      category: 'backend'
    },
    {
      id: 'ref9',
      type: 'book',
      title: 'Two Scoops of Django 3.x: Best Practices for the Django Web Framework',
      author: 'Daniel Roy Greenfeld & Audrey Roy Greenfeld',
      year: '2020',
      source: 'Two Scoops Press',
      category: 'backend'
    },
    
    // Libros Arquitectura y Microservicios
    {
      id: 'ref10',
      type: 'book',
      title: 'Building Microservices: Designing Fine-Grained Systems',
      author: 'Sam Newman',
      year: '2021',
      source: "O'Reilly Media",
      category: 'architecture'
    },
    {
      id: 'ref11',
      type: 'book',
      title: 'Docker Deep Dive',
      author: 'Nigel Poulton',
      year: '2020',
      source: 'Independently Published',
      category: 'architecture'
    },
    {
      id: 'ref12',
      type: 'book',
      title: 'Kubernetes in Action',
      author: 'Marko Lukša',
      year: '2017',
      source: 'Manning Publications',
      category: 'architecture'
    },

    // Documentación Oficial Frontend
    {
      id: 'ref13',
      type: 'documentation',
      title: 'MDN Web Docs',
      author: 'Mozilla',
      year: '2024',
      source: 'Mozilla Developer Network',
      url: 'https://developer.mozilla.org/',
      category: 'frontend'
    },
    {
      id: 'ref14',
      type: 'documentation',
      title: 'React Documentation',
      author: 'Meta',
      year: '2024',
      source: 'React Official Website',
      url: 'https://react.dev/',
      category: 'frontend'
    },
    {
      id: 'ref15',
      type: 'documentation',
      title: 'TypeScript Handbook',
      author: 'Microsoft',
      year: '2024',
      source: 'TypeScript Official Documentation',
      url: 'https://www.typescriptlang.org/docs/',
      category: 'frontend'
    },
    {
      id: 'ref16',
      type: 'documentation',
      title: 'Tailwind CSS Documentation',
      author: 'Tailwind Labs',
      year: '2024',
      source: 'Tailwind CSS',
      url: 'https://tailwindcss.com/docs',
      category: 'frontend'
    },
    {
      id: 'ref17',
      type: 'documentation',
      title: 'Framer Motion Documentation',
      author: 'Framer',
      year: '2024',
      source: 'Framer Motion',
      url: 'https://www.framer.com/motion/',
      category: 'frontend'
    },

    // Documentación Backend
    {
      id: 'ref18',
      type: 'documentation',
      title: 'Python Official Documentation',
      author: 'Python Software Foundation',
      year: '2024',
      source: 'Python.org',
      url: 'https://docs.python.org/3/',
      category: 'backend'
    },
    {
      id: 'ref19',
      type: 'documentation',
      title: 'Django Documentation',
      author: 'Django Software Foundation',
      year: '2024',
      source: 'Django Project',
      url: 'https://docs.djangoproject.com/',
      category: 'backend'
    },
    {
      id: 'ref20',
      type: 'documentation',
      title: 'Django REST Framework',
      author: 'Tom Christie',
      year: '2024',
      source: 'Django REST Framework',
      url: 'https://www.django-rest-framework.org/',
      category: 'backend'
    },
    {
      id: 'ref21',
      type: 'documentation',
      title: 'PostgreSQL Documentation',
      author: 'PostgreSQL Global Development Group',
      year: '2024',
      source: 'PostgreSQL.org',
      url: 'https://www.postgresql.org/docs/',
      category: 'backend'
    },

    // Documentación DevOps y Arquitectura
    {
      id: 'ref22',
      type: 'documentation',
      title: 'Docker Documentation',
      author: 'Docker Inc.',
      year: '2024',
      source: 'Docker Docs',
      url: 'https://docs.docker.com/',
      category: 'architecture'
    },
    {
      id: 'ref23',
      type: 'documentation',
      title: 'Kubernetes Documentation',
      author: 'The Kubernetes Authors',
      year: '2024',
      source: 'Kubernetes.io',
      url: 'https://kubernetes.io/docs/',
      category: 'architecture'
    },

    // Sitios Web y Tutoriales
    {
      id: 'ref24',
      type: 'website',
      title: 'CSS-Tricks',
      author: 'CSS-Tricks Team',
      year: '2024',
      source: 'CSS-Tricks',
      url: 'https://css-tricks.com/',
      category: 'frontend'
    },
    {
      id: 'ref25',
      type: 'website',
      title: 'Web.dev',
      author: 'Google',
      year: '2024',
      source: 'Google Developers',
      url: 'https://web.dev/',
      category: 'frontend'
    },
    {
      id: 'ref26',
      type: 'website',
      title: 'Real Python',
      author: 'Real Python Team',
      year: '2024',
      source: 'Real Python',
      url: 'https://realpython.com/',
      category: 'backend'
    },
    {
      id: 'ref27',
      type: 'website',
      title: 'Django Girls Tutorial',
      author: 'Django Girls',
      year: '2024',
      source: 'Django Girls',
      url: 'https://tutorial.djangogirls.org/',
      category: 'backend'
    },
    {
      id: 'ref28',
      type: 'website',
      title: 'Microservices.io',
      author: 'Chris Richardson',
      year: '2024',
      source: 'Microservices.io',
      url: 'https://microservices.io/',
      category: 'architecture'
    },
    {
      id: 'ref29',
      type: 'website',
      title: 'Kubernetes Academy',
      author: 'VMware',
      year: '2024',
      source: 'VMware Tanzu',
      url: 'https://kube.academy/',
      category: 'architecture'
    },
    {
      id: 'ref30',
      type: 'website',
      title: 'freeCodeCamp',
      author: 'freeCodeCamp',
      year: '2024',
      source: 'freeCodeCamp.org',
      url: 'https://www.freecodecamp.org/',
      category: 'frontend'
    },
  ];

  const getIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <Globe className="text-blue-600 dark:text-blue-400 mr-2" size={20} />;
      case 'backend':
        return <Database className="text-green-600 dark:text-green-400 mr-2" size={20} />;
      case 'architecture':
        return <BookOpen className="text-purple-600 dark:text-purple-400 mr-2" size={20} />;
      default:
        return <BookOpen className="text-slate-600 dark:text-slate-400 mr-2" size={20} />;
    }
  };


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
              Bibliografía
            </h1>
            <p className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
              Una colección completa de libros, documentación oficial y recursos en línea que sustentaron 
              mi viaje de aprendizaje desde fundamentos frontend hasta arquitecturas de microservicios.
            </p>

            {/* Estadísticas */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {references.filter(ref => ref.type === 'book').length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Libros</div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {references.filter(ref => ref.type === 'documentation').length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Documentación</div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {references.filter(ref => ref.type === 'website').length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Sitios Web</div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  {references.length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Total</div>
              </div>
            </div>

            {/* Libros */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <BookOpen className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Libros
                </h2>
              </div>
              
              {/* Frontend Books */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3 flex items-center">
                  <Globe className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                  Desarrollo Frontend
                </h3>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 divide-y divide-blue-200 dark:divide-blue-800">
                  {references
                    .filter((ref) => ref.type === 'book' && ref.category === 'frontend')
                    .map((reference) => (
                      <div key={reference.id} className="py-3 first:pt-0 last:pb-0">
                        <p className="text-slate-800 dark:text-white">
                          {reference.author} ({reference.year}). <em>{reference.title}</em>. {reference.source}.
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              {/* Backend Books */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3 flex items-center">
                  <Database className="text-green-600 dark:text-green-400 mr-2" size={20} />
                  Desarrollo Backend
                </h3>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 divide-y divide-green-200 dark:divide-green-800">
                  {references
                    .filter((ref) => ref.type === 'book' && ref.category === 'backend')
                    .map((reference) => (
                      <div key={reference.id} className="py-3 first:pt-0 last:pb-0">
                        <p className="text-slate-800 dark:text-white">
                          {reference.author} ({reference.year}). <em>{reference.title}</em>. {reference.source}.
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              {/* Architecture Books */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3 flex items-center">
                  <BookOpen className="text-purple-600 dark:text-purple-400 mr-2" size={20} />
                  Arquitectura y DevOps
                </h3>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 divide-y divide-purple-200 dark:divide-purple-800">
                  {references
                    .filter((ref) => ref.type === 'book' && ref.category === 'architecture')
                    .map((reference) => (
                      <div key={reference.id} className="py-3 first:pt-0 last:pb-0">
                        <p className="text-slate-800 dark:text-white">
                          {reference.author} ({reference.year}). <em>{reference.title}</em>. {reference.source}.
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Documentación Oficial */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <Database className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Documentación Oficial
                </h2>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 divide-y divide-slate-200 dark:divide-slate-700">
                {references
                  .filter((ref) => ref.type === 'documentation')
                  .map((reference) => (
                    <div key={reference.id} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex items-start">
                        {getIcon(reference.category || '')}
                        <div className="flex-1">
                          <p className="text-slate-800 dark:text-white">
                            {reference.author} ({reference.year}). <em>{reference.title}</em>. {reference.source}.{' '}
                            {reference.url && (
                              <a
                                href={reference.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                              >
                                {reference.url}
                              </a>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Sitios Web y Tutoriales */}
            <div>
              <div className="flex items-center mb-6">
                <LinkIcon className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Sitios Web y Tutoriales
                </h2>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 divide-y divide-slate-200 dark:divide-slate-700">
                {references
                  .filter((ref) => ref.type === 'website')
                  .map((reference) => (
                    <div key={reference.id} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex items-start">
                        {getIcon(reference.category || '')}
                        <div className="flex-1">
                          <p className="text-slate-800 dark:text-white">
                            {reference.author} ({reference.year}). <em>{reference.title}</em>. {reference.source}.{' '}
                            {reference.url && (
                              <a
                                href={reference.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                              >
                                {reference.url}
                              </a>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Nota final */}
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
              <p className="text-slate-600 dark:text-slate-300 text-center italic">
                Esta bibliografía refleja el amplio espectro de recursos utilizados durante mi viaje de 
                aprendizaje, desde los fundamentos del desarrollo web hasta las arquitecturas distribuidas 
                más avanzadas. Cada recurso contribuyó significativamente a mi comprensión y habilidades 
                prácticas en el desarrollo full-stack moderno.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Bibliography;