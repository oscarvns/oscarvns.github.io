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
              Final <span className="text-blue-600 dark:text-blue-400">Reflection</span>
            </h1>
            <p className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
              A metacognitive analysis of my learning journey, exploring what I learned, how I learned it, and how this knowledge will shape my future endeavors.
            </p>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <BookOpen className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  What I Learned
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600 dark:text-slate-300">
                  Throughout this course, I've gained a comprehensive understanding of web development fundamentals, from basic HTML and CSS to more advanced concepts like responsive design, JavaScript programming, and modern frameworks like React.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Week 1 established the essential building blocks with HTML structure, CSS styling, and JavaScript basics. These fundamentals proved crucial for everything that followed, providing the syntax and mental models needed for web development.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Week 2 expanded my knowledge with responsive design principles and deeper JavaScript concepts. Learning about media queries transformed my understanding of how modern websites adapt to different devices, while exploring JavaScript functions enhanced my programming capabilities.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Week 3 introduced me to React and API integration, which represented a significant leap in complexity but also in capability. Understanding component-based architecture and state management opened new possibilities for building interactive web applications.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Beyond specific technologies, I learned broader concepts like:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300 ml-4">
                  <li>The importance of user experience and accessibility in web design</li>
                  <li>How to approach problem-solving methodically in programming</li>
                  <li>Best practices for writing clean, maintainable code</li>
                  <li>The value of documentation and continued learning in a rapidly evolving field</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Lightbulb className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  How I Learned
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600 dark:text-slate-300">
                  My learning journey combined multiple approaches, each contributing uniquely to my understanding and skill development:
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Structured Learning</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Following the course curriculum provided a logical progression of concepts, with each week building upon the previous one. This scaffolded approach helped me construct a coherent mental model of web development.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Hands-on Practice</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  The laboratory exercises were crucial for cementing my understanding. Building actual components and applications forced me to apply theoretical knowledge and develop problem-solving skills. I found that I learned most effectively when tackling real coding challenges.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Error-Driven Learning</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Some of my most valuable learning moments came from debugging code that didn't work as expected. These challenges required deeper investigation of concepts and often led to "aha" moments that solidified my understanding.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Reflective Practice</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Taking time to reflect on my learning weekly helped me identify patterns in my understanding and areas needing improvement. This metacognitive approach allowed me to adjust my learning strategies and focus on challenging concepts.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Resource Utilization</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  I leveraged various resources beyond course materials, including documentation, tutorials, and community forums. Learning to find and evaluate resources independently is a skill that will serve me well in continued learning.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Moving Forward
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600 dark:text-slate-300">
                  This learning journey has laid a solid foundation for my continued growth as a web developer. As I move forward, I plan to:
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Deepen Technical Knowledge</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  I want to further explore advanced React concepts, learn about state management libraries like Redux, and dive into server-side rendering and Next.js. I'm also interested in exploring TypeScript for type-safe JavaScript development.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Build More Complex Projects</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  To solidify my skills, I plan to develop more sophisticated applications that integrate multiple technologies and address real-world problems. Project-based learning will continue to be central to my growth.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Contribute to Open Source</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Participating in open-source projects will expose me to different codebases and collaborative development practices. This will improve both my technical skills and my ability to work with others.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Stay Current with Industry Trends</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Web development evolves rapidly, so I'll need to stay informed about emerging technologies and best practices. Continuous learning will be essential throughout my career.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mt-6">Final Thoughts</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  This course has not only taught me technical skills but also how to learn effectively in a technical field. The ability to approach new concepts methodically, practice deliberately, and reflect on my learning will be invaluable as I continue to grow as a developer.
                </p>
                
                <div className="mt-8 text-center">
                  <Link
                    to="/bibliography"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Bibliography
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