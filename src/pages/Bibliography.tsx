import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Link as LinkIcon } from 'lucide-react';

interface Reference {
  id: string;
  type: 'book' | 'website';
  title: string;
  author: string;
  year: string;
  source: string;
  url?: string;
}

const Bibliography: React.FC = () => {
  const references: Reference[] = [
    {
      id: 'ref1',
      type: 'book',
      title: 'Eloquent JavaScript: A Modern Introduction to Programming',
      author: 'Marijn Haverbeke',
      year: '2018',
      source: 'No Starch Press',
    },
    {
      id: 'ref2',
      type: 'book',
      title: 'HTML and CSS: Design and Build Websites',
      author: 'Jon Duckett',
      year: '2011',
      source: 'Wiley',
    },
    {
      id: 'ref3',
      type: 'website',
      title: 'MDN Web Docs',
      author: 'Mozilla',
      year: '2023',
      source: 'Mozilla Developer Network',
      url: 'https://developer.mozilla.org/',
    },
    {
      id: 'ref4',
      type: 'website',
      title: 'React Documentation',
      author: 'Meta',
      year: '2023',
      source: 'React Official Website',
      url: 'https://reactjs.org/docs/getting-started.html',
    },
    {
      id: 'ref5',
      type: 'book',
      title: 'Learning React: Functional Web Development with React and Redux',
      author: 'Alex Banks & Eve Porcello',
      year: '2020',
      source: "O'Reilly Media",
    },
    {
      id: 'ref6',
      type: 'website',
      title: 'CSS-Tricks',
      author: 'CSS-Tricks Team',
      year: '2023',
      source: 'CSS-Tricks',
      url: 'https://css-tricks.com/',
    },
    {
      id: 'ref7',
      type: 'book',
      title: 'JavaScript: The Good Parts',
      author: 'Douglas Crockford',
      year: '2008',
      source: "O'Reilly Media",
    },
    {
      id: 'ref8',
      type: 'website',
      title: 'Web.dev',
      author: 'Google',
      year: '2023',
      source: 'Google Developers',
      url: 'https://web.dev/',
    },
  ];

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
              Bibliography
            </h1>
            <p className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
              A collection of books and online resources that supported my learning journey.
            </p>

            <div className="mb-8">
              <div className="flex items-center mb-6">
                <BookOpen className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Books
                </h2>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 divide-y divide-slate-200 dark:divide-slate-700">
                {references
                  .filter((ref) => ref.type === 'book')
                  .map((reference) => (
                    <div key={reference.id} className="py-4 first:pt-0 last:pb-0">
                      <p className="text-slate-800 dark:text-white font-medium">
                        {reference.author} ({reference.year}). <em>{reference.title}</em>. {reference.source}.
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <LinkIcon className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Websites
                </h2>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 divide-y divide-slate-200 dark:divide-slate-700">
                {references
                  .filter((ref) => ref.type === 'website')
                  .map((reference) => (
                    <div key={reference.id} className="py-4 first:pt-0 last:pb-0">
                      <p className="text-slate-800 dark:text-white font-medium">
                        {reference.author} ({reference.year}). <em>{reference.title}</em>. {reference.source}.{' '}
                        {reference.url && (
                          <a
                            href={reference.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            {reference.url}
                          </a>
                        )}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            <div className="mt-12">
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                  Note on References
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  This bibliography includes only books and online resources, as requested. No video tutorials or courses are included, though they also formed a valuable part of my learning process. All references are formatted according to APA style guidelines.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Bibliography;