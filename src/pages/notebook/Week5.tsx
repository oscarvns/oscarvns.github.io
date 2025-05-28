import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useTheme } from '../../context/ThemeContext';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';


// Componente hijo para el laboratorio
const CardComponent: React.FC<{
  title: string;
  description: string;
  bgColor: string;
  children?: React.ReactNode;
}> = ({ title, description, bgColor, children }) => {
  return (
    <div className={`rounded-lg shadow-md p-4 mb-4 ${bgColor}`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-3">{description}</p>
      {children && (
        <div className="mt-4 border-t pt-3">
          <div className="font-medium mb-2">Contenido Adicional:</div>
          {children}
        </div>
      )}
    </div>
  );
};

const Week5: React.FC = () => {
  const { theme } = useTheme();
  const codeStyle = theme === 'dark' ? vscDarkPlus : vs;
    
  const [cardData] = useState([
    {
      id: 1,
      title: "Componentes React",
      description: "Bloques de construcción de aplicaciones React",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      id: 2,
      title: "Sistema de Props",
      description: "Cómo fluyen los datos entre componentes",
      bgColor: "bg-green-100 dark:bg-green-900/30",
    },
    {
      id: 3,
      title: "Prop Children",
      description: "Pasar elementos JSX a componentes",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
    }
  ]);

  return (
    <div className="min-h-screen pt-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">
              Semana 5: Desarrollo frontend con frameworks JavaScript
            </h1>

            {/* Estructura y operación de Framework */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                Estructura y funcionamiento de frameworks JavaScript
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Renderizado del lado del cliente (CSR)
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    La renderización del lado del cliente es un patrón de renderización en el que el 
                    navegador descarga una página HTML mínima y el JavaScript necesario para el sitio.
                    A continuación, el JavaScript se ejecuta en el navegador para renderizar el contenido. 
                    Este enfoque, utilizado por frameworks como React, Vue y Angular, proporciona una experiencia 
                    de usuario más dinámica e interactiva.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-3 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="jsx" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`// Proceso básico de renderizado en React
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Crear una raíz y renderizar el componente App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Gestión de Dependencias
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Los frameworks JavaScript modernos dependen de gestores de paquetes como npm y yarn para administrar dependencias.
                    Estas herramientas manejan la instalación, actualización y eliminación de las bibliotecas de las que depende tu proyecto.
                    Las dependencias se definen en el archivo package.json.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-3 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="json" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`// Ejemplo de package.json
{
  "name": "my-react-app",
  "version": "0.1.0",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.10.0"
  },
  "devDependencies": {
    "vite": "^4.3.2",
    "typescript": "^5.0.4"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Herramientas de Creación de Proyectos
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Herramientas como Create React App, Vite y Next.js proporcionan andamiaje para nuevos proyectos,
                    configurando el entorno de desarrollo con las mejores prácticas. Configuran herramientas de construcción,
                    frameworks de prueba y servidores de desarrollo, permitiendo a los desarrolladores centrarse en escribir código.
                  </p>
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Create React App</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        <code>npx create-react-app my-app</code><br />
                        Herramienta oficial de React, buena para aprender React y construir SPAs
                      </p>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Vite</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        <code>npm create vite@latest my-app</code><br />
                        Herramienta moderna de construcción con actualización rápida, empaquetado eficiente para producción
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desarrollo basado en componentes */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                Desarrollo Basado en Componentes
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Sintaxis JSX
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    JSX (JavaScript XML) es una extensión de sintaxis para JavaScript que se parece a HTML.
                    Permite escribir código similar a HTML en tus archivos JavaScript, haciendo que la estructura del componente
                    sea más intuitiva. Detrás de escena, JSX se transforma en llamadas a React.createElement().
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-3 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="jsx" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`// Ejemplo de JSX
function Welcome() {
  return (
    <div className="welcome-container">
      <h1>¡Hola, mundo!</h1>
      <p>Bienvenido a mi aplicación.</p>
    </div>
  );
}

// Se compila a:
function Welcome() {
  return React.createElement(
    "div",
    { className: "welcome-container" },
    React.createElement("h1", null, "¡Hola, mundo!"),
    React.createElement("p", null, "Bienvenido a mi aplicación.")
  );
}`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Props
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Las props (abreviatura de propiedades) son la forma en que los componentes reciben datos de su padre.
                    Son de solo lectura y fluyen hacia abajo en el árbol de componentes. Las props hacen que los componentes
                    sean reutilizables y dinámicos al permitir que se pasen diferentes datos para diferentes instancias.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-3 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="jsx" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`// Ejemplo de Props
function PerfilUsuario({ nombre, rol, urlAvatar }) {
  return (
    <div className="perfil-usuario">
      <img src={urlAvatar} alt={nombre} />
      <h2>{nombre}</h2>
      <p>{rol}</p>
    </div>
  );
}

// Uso del componente
<PerfilUsuario 
  nombre="Juan Pérez" 
  rol="Desarrollador" 
  urlAvatar="https://ejemplo.com/avatar.jpg" 
/>`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Children
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    La prop children permite a los componentes aceptar y renderizar contenido anidado. Es útil para
                    crear componentes envolventes como layouts, tarjetas o modales que necesitan renderizar lo que
                    se coloca entre sus etiquetas de apertura y cierre.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-3 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="jsx" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`// Ejemplo de prop children
function Tarjeta({ titulo, children }) {
  return (
    <div className="tarjeta">
      <div className="tarjeta-cabecera">
        <h2>{titulo}</h2>
      </div>
      <div className="tarjeta-cuerpo">
        {children}
      </div>
    </div>
  );
}

// Uso del componente con children
<Tarjeta titulo="Información Importante">
  <p>Este es el contenido dentro de la tarjeta.</p>
  <button>Haz clic aquí</button>
</Tarjeta>`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>

            {/* Estilos en Framework JS */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                Estilos en Frameworks JavaScript
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Estilos en Línea
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Los estilos en línea en React se definen como objetos donde las claves son propiedades CSS en camelCase.
                    Se aplican directamente a los elementos usando el atributo style. Aunque son convenientes para estilos dinámicos,
                    no admiten consultas de medios o pseudo-clases directamente.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-3 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="jsx" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`function Boton({ primario }) {
  const estiloBoton = {
    backgroundColor: primario ? 'blue' : 'gray',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer'
  };

  return (
    <button style={estiloBoton}>
      Haz Clic
    </button>
  );
}`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Hojas de Estilo
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Los archivos CSS tradicionales pueden importarse directamente en componentes React. Este enfoque es familiar
                    y funciona bien con CSS existente, pero no proporciona ámbito por defecto, lo que puede conducir a
                    conflictos de nombres en aplicaciones más grandes.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-3 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="css" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`/* Boton.css */
.boton {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.boton:hover {
  background-color: #45a049;
}

/* Boton.jsx */
import './Boton.css';

function Boton() {
  return (
    <button className="boton">
      Haz Clic
    </button>
  );
}`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Módulos CSS
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Los módulos CSS limitan los estilos a componentes específicos generando automáticamente nombres de clase únicos.
                    Esto previene fugas de estilo y conflictos de nombres, haciéndolo más seguro de usar en aplicaciones grandes.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-3 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="css" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`/* Boton.module.css */
.boton {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
}

/* Boton.jsx */
import styles from './Boton.module.css';

function Boton() {
  return (
    <button className={styles.boton}>
      Haz Clic
    </button>
  );
}`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Styled Components
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Styled Components es una biblioteca CSS-in-JS que te permite escribir CSS real en tu JavaScript.
                    Crea componentes React con estilos adjuntos, proporcionando acceso completo al sistema de componentes React
                    para estilizar.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-3 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="jsx" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`import styled from 'styled-components';

const Boton = styled.button\`
  background-color: \${props => props.primario ? '#4CAF50' : '#555555'};
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
\`;

function App() {
  return (
    <div>
      <Boton>Botón Normal</Boton>
      <Boton primario>Botón Primario</Boton>
    </div>
  );
}`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Frameworks CSS
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Frameworks CSS como Tailwind CSS, Bootstrap y Material UI pueden integrarse con React
                    para proporcionar componentes prediseñados y utilidades. Aceleran el desarrollo proporcionando
                    estilos consistentes y patrones de diseño responsivos.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-3 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="jsx" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`// Ejemplo con Tailwind CSS
function Boton({ primario, children }) {
  const clasesBase = "px-4 py-2 rounded font-semibold";
  const clasesColor = primario
    ? "bg-blue-500 hover:bg-blue-600 text-white"
    : "bg-gray-200 hover:bg-gray-300 text-gray-800";
    
  return (
    <button className={\`\${clasesBase} \${clasesColor}\`}>
      {children}
    </button>
  );
}`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>

            {/* Laboratorio */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                Laboratorio 5A: Props y Children
              </h2>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                En este laboratorio, he creado un CardComponent que recibe datos a través de props y puede mostrar
                contenido adicional utilizando la prop children. El ejemplo demuestra cómo pasar datos entre
                componentes padre e hijo.
              </p>
              
              <div className="space-y-4 mb-8">
                {cardData.map(card => (
                  <CardComponent
                    key={card.id}
                    title={card.title}
                    description={card.description}
                    bgColor={card.bgColor}
                  >
                    {card.id === 1 && (
                      <div className="text-sm">
                        Los componentes React son piezas de código reutilizables y autocontenidas.
                      </div>
                    )}
                    {card.id === 2 && (
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-sm">Las props fluyen del componente padre al hijo</span>
                      </div>
                    )}
                    {card.id === 3 && (
                      <button className="px-3 py-1 bg-purple-500 text-white rounded text-sm">
                        Soy un botón dentro de un componente hijo
                      </button>
                    )}
                  </CardComponent>
                ))}
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                  Código del Componente
                </h3>
                <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                  <SyntaxHighlighter 
                    language="tsx" 
                    style={codeStyle}
                    customStyle={{
                      borderRadius: '0.375rem',
                      margin: 0,
                      fontSize: '0.875rem'
                    }}
                  >
                    {`// Componente de tarjeta que acepta props y children
const CardComponent: React.FC<{
  title: string;
  description: string;
  bgColor: string;
  children?: React.ReactNode;
}> = ({ title, description, bgColor, children }) => {
  return (
    <div className={\`rounded-lg shadow-md p-4 mb-4 \${bgColor}\`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-3">{description}</p>
      {children && (
        <div className="mt-4 border-t pt-3">
          <div className="font-medium mb-2">Contenido Adicional:</div>
          {children}
        </div>
      )}
    </div>
  );
};

// Componente padre
function ComponentePadre() {
  return (
    <div>
      <CardComponent
        title="Componentes React"
        description="Bloques de construcción de aplicaciones React"
        bgColor="bg-blue-100"
      >
        <div className="text-sm">
          Los componentes React son piezas de código reutilizables y autocontenidas.
        </div>
      </CardComponent>
    </div>
  );
}`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            {/* Reflexión */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                  Lo Que Aprendí
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Esta semana, profundicé en mi comprensión de los frameworks JavaScript, particularmente React. Aprendí cómo funciona el Renderizado del Lado del Cliente y por qué es ventajoso para crear interfaces de usuario dinámicas. La arquitectura basada en componentes facilita la construcción y el mantenimiento de aplicaciones complejas al dividirlas en piezas más pequeñas y reutilizables.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  También exploré varios enfoques de estilización en React, cada uno con sus propias ventajas. Descubrí que los Módulos CSS y Tailwind CSS ofrecen un buen equilibrio entre experiencia de desarrollo y rendimiento.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 mt-6">
                  Cómo Aprendí
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Mi enfoque de aprendizaje involucró estudiar documentación, seguir tutoriales y mucha práctica práctica. Construir pequeños componentes y ver cómo fluyen los datos entre ellos ayudó a solidificar mi comprensión de las props y la composición de componentes.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Encontré que implementar el laboratorio de componentes de tarjeta fue particularmente útil para entender cómo los componentes padre pueden comunicarse con los hijos a través de props, y cómo los componentes hijos pueden renderizar contenido personalizado que se les pasa.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 mt-6">
                  Próximos Pasos
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Avanzando, quiero explorar la gestión de estado en aplicaciones React, como Context API y Redux. También estoy interesado en aprender más sobre técnicas de optimización de rendimiento y cómo implementar patrones de UI más complejos.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Week5;