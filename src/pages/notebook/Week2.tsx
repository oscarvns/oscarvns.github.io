import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Code, Lightbulb } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useTheme } from '../../context/ThemeContext';
import vscDarkPlus from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';
import vs from 'react-syntax-highlighter/dist/cjs/styles/prism/vs';

const Week2: React.FC = () => {
  const { theme } = useTheme();
  const codeStyle = theme === 'dark' ? vscDarkPlus : vs;

  return (
    <div className="min-h-screen pt-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/notebook"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
          >
            <ArrowLeft className="mr-2" size={16} />
            Volver al Cuaderno
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
              Semana 2: HTML, XML y CSS
            </h1>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <BookOpen className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Temas Aprendidos
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    HTML y XML: Fundamentos
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    HTML (Lenguaje de Marcado de Hipertexto) es el lenguaje estándar para crear páginas web. Define la estructura y el contenido de una página mediante elementos representados por etiquetas. XML (Lenguaje de Marcado Extensible) es un lenguaje más general que permite definir lenguajes de marcado personalizados.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 mt-2">
                    Ambos forman parte de la Open Web Platform, un conjunto de tecnologías estandarizadas por el W3C para el desarrollo web. HTML5 es la versión más reciente del estándar HTML, que incorpora características como elementos semánticos, audio/video nativos, canvas para gráficos y APIs de JavaScript mejoradas.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-3 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="html" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Página Web</title>
  <link rel="stylesheet" href="estilos.css">
</head>
<body>
  <header>
    <h1>Bienvenidos a mi sitio</h1>
    <nav>
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <section id="inicio">
      <h2>Sección principal</h2>
      <p>Contenido de la página...</p>
    </section>
  </main>
  
  <footer>
    <p>© 2023 Mi Sitio Web</p>
  </footer>
</body>
</html>`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Árbol DOM y Ciclo de Vida de una Página Web
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    El DOM (Modelo de Objeto de Documento) es una representación en memoria de una página HTML/XML como un árbol de nodos. Cada elemento, atributo y texto en el documento se convierte en un nodo en este árbol, lo que permite a JavaScript acceder y manipular el contenido, estructura y estilo de la página.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 mt-2">
                    El ciclo de vida de una página web incluye varias fases: descarga del HTML, análisis (parsing), construcción del DOM, carga de recursos externos (CSS, JavaScript, imágenes), construcción del CSSOM (Modelo de Objeto CSS), renderizado del árbol y finalmente la visualización de la página.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-3 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="javascript" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`// Acceso y manipulación del DOM con JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // Se ejecuta cuando el DOM está completamente cargado
  
  // Seleccionar elementos
  const titulo = document.querySelector('h1');
  const enlaces = document.querySelectorAll('nav a');
  
  // Modificar contenido
  titulo.textContent = 'Nuevo título de la página';
  
  // Añadir clases
  titulo.classList.add('destacado');
  
  // Crear nuevos elementos
  const nuevoParrafo = document.createElement('p');
  nuevoParrafo.textContent = 'Este párrafo fue creado con JavaScript';
  document.body.appendChild(nuevoParrafo);
  
  // Manejar eventos
  enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Enlace clickeado:', enlace.href);
    });
  });
});`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    SEO y Compatibilidad entre Navegadores
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    SEO (Search Engine Optimization) es el proceso de mejorar un sitio web para aumentar su visibilidad en los motores de búsqueda. Incluye prácticas como el uso de etiquetas semánticas, metadatos, estructura de encabezados adecuada, URLs amigables, optimización de imágenes y velocidad de carga.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 mt-2">
                    La compatibilidad entre navegadores es un desafío importante en el desarrollo web, ya que diferentes navegadores pueden interpretar HTML, CSS y JavaScript de manera distinta. Se abordan mediante el uso de polyfills, prefijos de proveedor, pruebas en múltiples navegadores y herramientas como Babel y PostCSS para transpilación y autoprefijado.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    CSS3: Fundamentos y Diseño
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    CSS3 (Hojas de Estilo en Cascada) es el estándar utilizado para definir la presentación visual de páginas web. Incluye propiedades para controlar el color, tipografía, espaciado, layouts y animaciones. La sintaxis básica consta de selectores, propiedades y valores.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 mt-2">
                    Los elementos pueden mostrarse como block (ocupan todo el ancho disponible), inline (solo el espacio necesario en línea) o inline-block (combinación de ambos). Las unidades de medida pueden ser absolutas (px, pt) o relativas (%, em, rem, vw, vh), siendo estas últimas esenciales para el diseño responsivo.
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
                      {`/* Ejemplos de selectores y propiedades CSS */
/* Selector de elemento */
body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  margin: 0;
  padding: 0;
}

/* Selector de clase */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Selector de ID */
#header {
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
}

/* Selector de atributo */
input[type="text"] {
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 4px;
}

/* Pseudoclases */
a:hover {
  color: #0066cc;
  text-decoration: underline;
}

/* Tipos de display */
.block {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}

.inline {
  display: inline;
  margin: 0 5px;
}

.inline-block {
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 10px;
}

/* Unidades de medida */
.absolutas {
  width: 200px;
  height: 100px;
  font-size: 16px;
}

.relativas {
  width: 50%;
  padding: 1em;
  font-size: 1.2rem;
  margin-top: 2vh;
}`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Flexbox, Grid y Position
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Flexbox es un modelo de diseño unidimensional que facilita la alineación y distribución de elementos en una fila o columna. Grid Layout es un sistema bidimensional que permite diseñar layouts complejos con filas y columnas definidas. Ambos son fundamentales para crear interfaces modernas y responsivas.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 mt-2">
                    La propiedad position determina cómo se coloca un elemento en la página. Sus valores principales son static (valor por defecto), relative (relativo a su posición normal), absolute (relativo al ancestro posicionado más cercano), fixed (relativo a la ventana del navegador) y sticky (híbrido entre relative y fixed).
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
                      {`/* Flexbox */
.flex-container {
  display: flex;
  flex-direction: row; /* o column */
  flex-wrap: wrap;
  justify-content: space-between; /* alineación en el eje principal */
  align-items: center; /* alineación en el eje secundario */
  gap: 20px;
}

.flex-item {
  flex: 1 0 200px; /* grow shrink basis */
}

/* Grid Layout */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
}

.grid-item {
  grid-column: span 2;
}

/* Áreas de grid */
.page-layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }

/* Position */
.relative {
  position: relative;
  top: 10px;
  left: 20px;
}

.absolute {
  position: absolute;
  top: 0;
  right: 0;
}

.fixed {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.sticky {
  position: sticky;
  top: 0;
  z-index: 100;
}`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Diseño Fluido y Diseño Web Responsivo
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    El diseño fluido utiliza unidades relativas para que los elementos se adapten proporcionalmente al tamaño de la ventana. El diseño web responsivo amplía este concepto mediante media queries, que permiten aplicar diferentes estilos según las características del dispositivo (ancho de pantalla, orientación, etc.).
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 mt-2">
                    Un enfoque mobile-first comienza diseñando para dispositivos móviles y luego adapta la interfaz para pantallas más grandes. Esto asegura que la experiencia sea óptima en todos los dispositivos y mejora el rendimiento en conexiones lentas.
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
                      {`/* Diseño fluido */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.fluid-image {
  max-width: 100%;
  height: auto;
}

.column {
  width: 100%;
  padding: 0 15px;
}

/* Diseño responsivo con media queries */
/* Mobile first - Estilos base para móviles */
.navbar {
  display: flex;
  flex-direction: column;
}

.menu-item {
  width: 100%;
  margin-bottom: 10px;
}

.card {
  width: 100%;
  margin-bottom: 20px;
}

/* Tablet (768px y superior) */
@media screen and (min-width: 768px) {
  .navbar {
    flex-direction: row;
    justify-content: space-between;
  }
  
  .menu-item {
    width: auto;
    margin-bottom: 0;
  }
  
  .card {
    width: 48%;
    float: left;
    margin-right: 4%;
  }
  
  .card:nth-child(2n) {
    margin-right: 0;
  }
}

/* Desktop (1024px y superior) */
@media screen and (min-width: 1024px) {
  .card {
    width: 30%;
    margin-right: 5%;
  }
  
  .card:nth-child(2n) {
    margin-right: 5%;
  }
  
  .card:nth-child(3n) {
    margin-right: 0;
  }
}`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Code className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Laboratorio 02A: Diseño flexbox, diseño fluido y diseño responsivo
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Ejercicio 1: Layout con Flexbox
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Creación de una barra de navegación y un sistema de tarjetas utilizando Flexbox para un diseño adaptable.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="html" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Layout con Flexbox</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
    }

    .container {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
    }

    /* Barra de navegación con Flexbox */
    .navbar {
      background-color: #2c3e50;
      padding: 1rem 0;
    }

    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .nav-links {
      display: flex;
      list-style: none;
    }

    .nav-links li {
      margin-left: 1.5rem;
    }

    .nav-links a {
      color: white;
      text-decoration: none;
      transition: color 0.3s;
    }

    .nav-links a:hover {
      color: #3498db;
    }

    /* Sistema de tarjetas con Flexbox */
    .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 2rem 0;
    }

    .card {
      flex: 0 0 calc(33.333% - 20px);
      margin-bottom: 30px;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transition: transform 0.3s;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .card-img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .card-content {
      padding: 20px;
    }

    .card-title {
      font-size: 1.25rem;
      margin-bottom: 10px;
      color: #2c3e50;
    }

    .card-text {
      color: #666;
      margin-bottom: 15px;
    }

    .card-button {
      display: inline-block;
      padding: 8px 16px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 4px;
      text-decoration: none;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .card-button:hover {
      background-color: #2980b9;
    }

    /* Media queries para responsividad */
    @media screen and (max-width: 992px) {
      .card {
        flex: 0 0 calc(50% - 15px);
      }
    }

    @media screen and (max-width: 768px) {
      .nav-container {
        flex-direction: column;
      }
      
      .nav-links {
        margin-top: 1rem;
      }
      
      .nav-links li:first-child {
        margin-left: 0;
      }
      
      .card {
        flex: 0 0 100%;
      }
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <div class="container nav-container">
      <div class="logo">Mi Sitio</div>
      <ul class="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Proyectos</a></li>
        <li><a href="#">Sobre Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </div>
  </nav>

  <div class="container">
    <div class="card-container">
      <div class="card">
        <img src="https://via.placeholder.com/400x200" alt="Imagen 1" class="card-img">
        <div class="card-content">
          <h3 class="card-title">Servicio 1</h3>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget urna ultricies.</p>
          <a href="#" class="card-button">Leer más</a>
        </div>
      </div>
      
      <div class="card">
        <img src="https://via.placeholder.com/400x200" alt="Imagen 2" class="card-img">
        <div class="card-content">
          <h3 class="card-title">Servicio 2</h3>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget urna ultricies.</p>
          <a href="#" class="card-button">Leer más</a>
        </div>
      </div>
      
      <div class="card">
        <img src="https://via.placeholder.com/400x200" alt="Imagen 3" class="card-img">
        <div class="card-content">
          <h3 class="card-title">Servicio 3</h3>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget urna ultricies.</p>
          <a href="#" class="card-button">Leer más</a>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Ejercicio 2: Diseño Fluido con Unidades Relativas
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Implementación de un diseño fluido utilizando unidades relativas para adaptarse a cualquier tamaño de pantalla.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="css" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`/* Estilos para diseño fluido */
:root {
  --font-scale: 1; /* Factor de escala para tipografía */
  --spacing-unit: 1rem; /* Unidad base para espaciado */
  --primary-color: #3498db;
  --text-color: #333;
  --bg-color: #f9f9f9;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: calc(16px * var(--font-scale));
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--bg-color);
  margin: 0;
  padding: 0;
}

.fluid-container {
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: var(--spacing-unit);
}

.hero-section {
  padding: calc(var(--spacing-unit) * 4) 0;
  text-align: center;
}

.hero-title {
  font-size: calc(2.5rem * var(--font-scale));
  margin-bottom: calc(var(--spacing-unit) * 2);
}

.hero-subtitle {
  font-size: calc(1.25rem * var(--font-scale));
  max-width: 80%;
  margin: 0 auto calc(var(--spacing-unit) * 3) auto;
}

.cta-button {
  display: inline-block;
  padding: calc(var(--spacing-unit) * 0.75) calc(var(--spacing-unit) * 1.5);
  background-color: var(--primary-color);
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-size: calc(1rem * var(--font-scale));
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #2980b9;
}

.content-section {
  display: flex;
  flex-wrap: wrap;
  margin: calc(var(--spacing-unit) * 3) 0;
}

.content-column {
  flex: 1 1 400px;
  padding: var(--spacing-unit);
}

.content-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.content-title {
  font-size: calc(1.75rem * var(--font-scale));
  margin-bottom: calc(var(--spacing-unit) * 1.5);
}

.content-text {
  font-size: calc(1rem * var(--font-scale));
  margin-bottom: calc(var(--spacing-unit) * 1.5);
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: calc(var(--spacing-unit) * 2);
  margin: calc(var(--spacing-unit) * 3) 0;
}

.feature-item {
  background-color: white;
  padding: calc(var(--spacing-unit) * 1.5);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: calc(2.5rem * var(--font-scale));
  color: var(--primary-color);
  margin-bottom: var(--spacing-unit);
}

.feature-title {
  font-size: calc(1.25rem * var(--font-scale));
  margin-bottom: calc(var(--spacing-unit) * 0.75);
}

.feature-desc {
  font-size: calc(0.9rem * var(--font-scale));
}

/* Ajustes para diferentes tamaños de pantalla */
@media screen and (min-width: 768px) {
  :root {
    --font-scale: 1.1;
    --spacing-unit: 1.1rem;
  }
}

@media screen and (min-width: 1200px) {
  :root {
    --font-scale: 1.2;
    --spacing-unit: 1.25rem;
  }
  
  .hero-subtitle {
    max-width: 60%;
  }
}

@media screen and (max-width: 767px) {
  :root {
    --font-scale: 0.9;
    --spacing-unit: 0.9rem;
  }
  
  .hero-subtitle {
    max-width: 95%;
  }
  
  .content-section {
    flex-direction: column;
  }
  
  .feature-list {
    grid-template-columns: 1fr;
  }
}`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Ejercicio 3: Diseño Web Responsivo con Media Queries
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Desarrollo de un sitio web completamente responsivo utilizando media queries para adaptar la interfaz a diferentes dispositivos.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="html" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Diseño Web Responsivo</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
    }

    .container {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 15px;
    }

    /* Header y navegación */
    header {
      background-color: #2c3e50;
      padding: 1rem 0;
      position: relative;
    }

    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      text-decoration: none;
    }

    .menu-toggle {
      display: none;
      color: white;
      font-size: 1.5rem;
      background: none;
      border: none;
      cursor: pointer;
    }

    nav ul {
      display: flex;
      list-style: none;
    }

    nav ul li {
      margin-left: 2rem;
    }

    nav ul li a {
      color: white;
      text-decoration: none;
      transition: color 0.3s;
    }

    nav ul li a:hover {
      color: #3498db;
    }

    /* Hero section */
    .hero {
      background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://via.placeholder.com/1200x600');
      background-size: cover;
      background-position: center;
      color: white;
      text-align: center;
      padding: 100px 0;
    }

    .hero h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .hero p {
      font-size: 1.25rem;
      max-width: 800px;
      margin: 0 auto 2rem auto;
    }

    .cta-button {
      display: inline-block;
      padding: 12px 30px;
      background-color: #3498db;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-weight: bold;
      transition: background-color 0.3s;
    }

    .cta-button:hover {
      background-color: #2980b9;
    }

    /* Sección de características */
    .features {
      padding: 80px 0;
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 50px;
    }

    .features-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }

    .feature-card {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      padding: 30px;
      text-align: center;
      transition: transform 0.3s;
    }

    .feature-card:hover {
      transform: translateY(-10px);
    }

    .feature-icon {
      font-size: 3rem;
      color: #3498db;
      margin-bottom: 20px;
    }

    .feature-card h3 {
      font-size: 1.5rem;
      margin-bottom: 15px;
    }

    /* Sección de testimonios */
    .testimonials {
      background-color: #f8f9fa;
      padding: 80px 0;
    }

    .testimonials-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
    }

    .testimonial-card {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      padding: 30px;
    }

    .testimonial-text {
      font-style: italic;
      margin-bottom: 20px;
    }

    .testimonial-author {
      display: flex;
      align-items: center;
    }

    .author-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 15px;
    }

    .author-name {
      font-weight: bold;
    }

    .author-title {
      color: #777;
      font-size: 0.9rem;
    }

    /* Footer */
    footer {
      background-color: #2c3e50;
      color: white;
      padding: 50px 0 20px;
    }

    .footer-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
      margin-bottom: 40px;
    }

    .footer-col h4 {
      font-size: 1.2rem;
      margin-bottom: 20px;
    }

    .footer-col ul {
      list-style: none;
    }

    .footer-col ul li {
      margin-bottom: 10px;
    }

    .footer-col ul li a {
      color: #ecf0f1;
      text-decoration: none;
      transition: color 0.3s;
    }

    .footer-col ul li a:hover {
      color: #3498db;
    }

    .footer-bottom {
      text-align: center;
      padding-top: 20px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    /* Media queries para diseño responsivo */
    @media screen and (max-width: 992px) {
      .features-container {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .footer-container {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media screen and (max-width: 768px) {
      .menu-toggle {
        display: block;
      }
      
      nav {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: #2c3e50;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s;
      }
      
      nav.active {
        max-height: 300px;
      }
      
      nav ul {
        flex-direction: column;
        padding: 20px;
      }
      
      nav ul li {
        margin: 0 0 15px 0;
      }
      
      .hero h1 {
        font-size: 2.5rem;
      }
      
      .features-container,
      .testimonials-container {
        grid-template-columns: 1fr;
      }
    }

    @media screen and (max-width: 576px) {
      .footer-container {
        grid-template-columns: 1fr;
      }
      
      .hero h1 {
        font-size: 2rem;
      }
      
      .hero p {
        font-size: 1rem;
      }
      
      .section-title {
        font-size: 2rem;
      }
    }
  </style>
</head>
<body>
  <header>
    <div class="container header-container">
      <a href="#" class="logo">ResponsiveSite</a>
      <button class="menu-toggle">☰</button>
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Características</a></li>
          <li><a href="#">Testimonios</a></li>
          <li><a href="#">Precios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <h1>Diseño Web Totalmente Responsivo</h1>
      <p>Creamos sitios web modernos que se adaptan perfectamente a todos los dispositivos, desde smartphones hasta pantallas de escritorio.</p>
      <a href="#" class="cta-button">Comenzar Ahora</a>
    </div>
  </section>

  <section class="features">
    <div class="container">
      <h2 class="section-title">Nuestras Características</h2>
      <div class="features-container">
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>Súper Rápido</h3>
          <p>Optimizamos cada aspecto para garantizar tiempos de carga ultrarrápidos en todos los dispositivos.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📱</div>
          <h3>100% Responsivo</h3>
          <p>Nuestros diseños se adaptan perfectamente a cualquier tamaño de pantalla para una experiencia óptima.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔍</div>
          <h3>SEO Optimizado</h3>
          <p>Implementamos las mejores prácticas de SEO para mejorar la visibilidad en los motores de búsqueda.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="testimonials">
    <div class="container">
      <h2 class="section-title">Testimonios</h2>
      <div class="testimonials-container">
        <div class="testimonial-card">
          <p class="testimonial-text">"El sitio web responsivo que crearon para nuestra empresa ha aumentado significativamente nuestras conversiones móviles. ¡Excelente trabajo!"</p>
          <div class="testimonial-author">
            <img src="https://via.placeholder.com/50" alt="Avatar" class="author-avatar">
            <div>
              <div class="author-name">María García</div>
              <div class="author-title">CEO, TechStart</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <p class="testimonial-text">"La atención al detalle en el diseño responsivo es impresionante. Nuestro sitio se ve increíble en todos los dispositivos."</p>
          <div class="testimonial-author">
            <img src="https://via.placeholder.com/50" alt="Avatar" class="author-avatar">
            <div>
              <div class="author-name">Juan Pérez</div>
              <div class="author-title">Director de Marketing, InnovaShop</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-container">
        <div class="footer-col">
          <h4>Compañía</h4>
          <ul>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Nuestros Servicios</a></li>
            <li><a href="#">Política de Privacidad</a></li>
            <li><a href="#">Programa de Afiliados</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Ayuda</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Envíos</a></li>
            <li><a href="#">Devoluciones</a></li>
            <li><a href="#">Estado del Pedido</a></li>
            <li><a href="#">Opciones de Pago</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Servicios</h4>
          <ul>
            <li><a href="#">Diseño Web</a></li>
            <li><a href="#">Desarrollo</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Consultoría</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Síguenos</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2023 ResponsiveSite. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>

  <script>
    // Script simple para el menú móvil
    document.querySelector('.menu-toggle').addEventListener('click', function() {
      document.querySelector('nav').classList.toggle('active');
    });
  </script>
</body>
</html>`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8">
              <div className="flex items-center mb-6">
                <Lightbulb className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Reflexión
                </h2>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                  Lo Que Aprendí
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Esta semana profundicé en los fundamentos de HTML, XML y CSS, comprendiendo cómo estas tecnologías trabajan juntas para crear experiencias web modernas. Aprendí sobre la estructura del árbol DOM y cómo el navegador renderiza las páginas web, lo que me dio una comprensión más clara del ciclo de vida de una página web.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Los conceptos de Flexbox, Grid Layout y diseño responsivo fueron particularmente reveladores, ya que me mostraron cómo crear interfaces que se adaptan a cualquier dispositivo sin necesidad de código duplicado. También aprecié la importancia del SEO y la compatibilidad entre navegadores para crear sitios web accesibles y bien posicionados.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 mt-6">
                  Cómo Aprendí
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Mi enfoque de aprendizaje combinó la lectura de documentación oficial, tutoriales prácticos y la experimentación constante. Creé varios proyectos de práctica para entender mejor cómo funcionan los diferentes conceptos en situaciones reales.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  El laboratorio de diseño flexbox, fluido y responsivo fue particularmente útil, ya que me permitió aplicar estos conceptos en un proyecto cohesivo y ver cómo interactúan entre sí. También me resultó valioso probar mis diseños en diferentes dispositivos y tamaños de pantalla para verificar su correcta adaptación.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 mt-6">
                  Próximos Pasos
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  En el futuro, quiero profundizar en técnicas avanzadas de CSS como las animaciones, transformaciones y el uso de variables CSS para crear sistemas de diseño más robustos. También me interesa explorar preprocesadores como Sass para mejorar la organización y mantenibilidad del código CSS.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Otro área que quiero explorar es la accesibilidad web (WCAG), asegurándome de que mis diseños sean utilizables por personas con discapacidades. Finalmente, me gustaría aprender más sobre las metodologías de organización CSS como BEM, SMACSS o ITCSS para proyectos más grandes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Week2;