import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Code, Lightbulb } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useTheme } from '../../context/ThemeContext';
import vscDarkPlus from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';
import vs from 'react-syntax-highlighter/dist/cjs/styles/prism/vs';

const Week3: React.FC = () => {
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
              Semana 3: Librerías CSS - Bootstrap y Tailwind
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
                    Fundamentos de Librerías CSS
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Las librerías CSS son conjuntos de estilos predefinidos que facilitan el desarrollo front-end al proporcionar componentes y utilidades reutilizables. Permiten crear interfaces consistentes y responsivas con menos código personalizado.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 mt-2">
                    Las más populares incluyen Bootstrap, que ofrece componentes completamente estilizados, y Tailwind CSS, que proporciona utilidades de bajo nivel para construir diseños personalizados.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Bootstrap
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Bootstrap es un framework CSS que proporciona componentes prediseñados y un sistema de rejilla (grid) responsivo. Permite crear sitios web visualmente atractivos rápidamente sin necesidad de escribir CSS desde cero.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 mt-2">
                    Sus principales características incluyen un sistema de rejilla de 12 columnas, componentes de interfaz de usuario como navegación, tarjetas, modales y formularios, y utilidades para espaciado, tamaño y alineación.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Tailwind CSS
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Tailwind CSS es un framework de utilidades CSS que permite construir diseños personalizados directamente en el marcado HTML. A diferencia de Bootstrap, Tailwind no proporciona componentes prediseñados, sino clases de utilidad que se pueden combinar para crear cualquier diseño.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 mt-2">
                    Tailwind facilita la creación de interfaces únicas con clases intuitivas para tipografía, espaciado, colores, flexbox, grid y mucho más. Su enfoque "utility-first" permite un desarrollo rápido y mantiene los estilos directamente en los componentes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <BookOpen className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Bootstrap: Layout y Componentes
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Sistema de Rejilla
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    El sistema de rejilla de Bootstrap está basado en flexbox y permite hasta 12 columnas por fila. Incluye breakpoints responsivos (xs, sm, md, lg, xl, xxl) para adaptar layouts a diferentes tamaños de pantalla.
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
                      {`<!-- Sistema de rejilla Bootstrap -->
<div class="container">
  <div class="row">
    <div class="col-md-6">Columna de 6 unidades en pantallas medianas</div>
    <div class="col-md-6">Columna de 6 unidades en pantallas medianas</div>
  </div>
  
  <div class="row">
    <div class="col-sm-12 col-md-8">8/12 en md, 12/12 en sm</div>
    <div class="col-sm-12 col-md-4">4/12 en md, 12/12 en sm</div>
  </div>
  
  <!-- Alineación y orden -->
  <div class="row justify-content-center">
    <div class="col-4">Columna centrada</div>
  </div>
</div>`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Componentes Bootstrap
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Bootstrap ofrece una amplia variedad de componentes prediseñados que pueden implementarse con clases CSS específicas. Estos incluyen tarjetas, barras de navegación, carruseles, modales, alertas y más.
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
                      {`<!-- Ejemplo de componentes Bootstrap -->
<!-- Barra de navegación -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Mi Sitio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Características</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Precios</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- Tarjeta -->
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Título de la Tarjeta</h5>
    <p class="card-text">Contenido de ejemplo para esta tarjeta.</p>
    <a href="#" class="btn btn-primary">Ir a algún lugar</a>
  </div>
</div>`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <BookOpen className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Tailwind CSS: Utilidades y Componentes
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Tipografía y Colores
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Tailwind proporciona clases de utilidad para controlar fuentes, tamaños, pesos, colores de texto, espaciado entre líneas y más. Las utilidades de color se aplican a texto, bordes y fondos con una escala consistente.
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
                      {`<!-- Tipografía Tailwind -->
<h1 class="text-4xl font-bold text-blue-600">Título Grande</h1>
<p class="text-base text-gray-700 leading-relaxed">
  Este es un párrafo con tamaño base, color gris y espaciado entre líneas relajado.
</p>
<p class="italic font-semibold text-sm text-green-500 underline">
  Texto pequeño, verde, itálico, semi-negrita y subrayado.
</p>

<!-- Fondos y Bordes -->
<div class="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-4">
  Contenedor con fondo amarillo claro y borde amarillo.
</div>

<!-- Efectos -->
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition-all duration-200">
  Botón con efecto hover y sombra
</button>`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Layout y Flexbox
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Tailwind ofrece clases para controlar contenedores, posicionamiento, display y layouts flexibles. Las utilidades de flexbox permiten crear diseños complejos directamente en el HTML.
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
                      {`<!-- Layout con Tailwind -->
<div class="container mx-auto px-4 py-8">
  <!-- Grid con 3 columnas en escritorio, 2 en tablet, 1 en móvil -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="bg-white rounded-lg shadow p-4">Ítem 1</div>
    <div class="bg-white rounded-lg shadow p-4">Ítem 2</div>
    <div class="bg-white rounded-lg shadow p-4">Ítem 3</div>
  </div>
  
  <!-- Flexbox -->
  <div class="flex flex-col md:flex-row justify-between items-center mt-8">
    <div class="w-full md:w-1/3 bg-blue-100 p-4 mb-4 md:mb-0">
      Elemento izquierdo
    </div>
    <div class="w-full md:w-1/3 bg-blue-200 p-4">
      Elemento derecho
    </div>
  </div>
  
  <!-- Posicionamiento -->
  <div class="relative h-32 mt-8">
    <div class="absolute top-0 left-0 bg-red-200 p-2">Arriba-Izquierda</div>
    <div class="absolute bottom-0 right-0 bg-green-200 p-2">Abajo-Derecha</div>
  </div>
</div>`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Componentes de UI
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Aunque Tailwind no incluye componentes prediseñados como Bootstrap, se pueden crear componentes personalizados combinando sus utilidades. A continuación se muestran ejemplos de elementos comunes de UI.
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
                      {`<!-- Componentes UI con Tailwind -->
<!-- Botón -->
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Botón Primario
</button>

<!-- Tarjeta -->
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="..." alt="Imagen">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Título de la Tarjeta</div>
    <p class="text-gray-700 text-base">
      Contenido de la tarjeta. Aquí podría ir una descripción.
    </p>
  </div>
  <div class="px-6 py-4">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
      #etiqueta1
    </span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
      #etiqueta2
    </span>
  </div>
</div>

<!-- Formulario -->
<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Usuario
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Usuario">
  </div>
  <div class="mb-6">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
      Contraseña
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
  </div>
  <div class="flex items-center justify-between">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
      Iniciar Sesión
    </button>
    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
      ¿Olvidaste tu contraseña?
    </a>
  </div>
</form>`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Code className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Ejercicios de Laboratorio
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Ejercicio 1: Creación de Layout con Bootstrap
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Implementé un diseño responsivo utilizando el sistema de rejilla de Bootstrap, con diferentes configuraciones para dispositivos móviles, tablets y escritorio.
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
  <title>Layout Bootstrap</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <!-- Barra de navegación -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand" href="#">Mi Sitio</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Servicios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sobre nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <div class="container py-5">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <h1>Bienvenido a Mi Sitio</h1>
        <p class="lead">Una página creada con Bootstrap para demostrar layouts responsivos.</p>
        <button class="btn btn-primary btn-lg">Saber más</button>
      </div>
      <div class="col-lg-6">
        <img src="https://via.placeholder.com/600x400" alt="Hero Image" class="img-fluid rounded">
      </div>
    </div>
  </div>

  <!-- Características -->
  <div class="container py-5">
    <h2 class="text-center mb-4">Nuestras Características</h2>
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body text-center">
            <h3 class="card-title">Característica 1</h3>
            <p class="card-text">Descripción de la primera característica de nuestro servicio.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body text-center">
            <h3 class="card-title">Característica 2</h3>
            <p class="card-text">Descripción de la segunda característica de nuestro servicio.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body text-center">
            <h3 class="card-title">Característica 3</h3>
            <p class="card-text">Descripción de la tercera característica de nuestro servicio.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-dark text-white py-4">
    <div class="container text-center">
      <p>&copy; 2023 Mi Sitio. Todos los derechos reservados.</p>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Ejercicio 2: Diseño UI con Tailwind CSS
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Creé una interfaz de usuario moderna utilizando Tailwind CSS, aplicando utilidades para tipografía, espaciado, colores y flexbox.
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
  <title>Diseño con Tailwind</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 font-sans">
  <!-- Barra de navegación -->
  <nav class="bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <div>
            <a href="#" class="flex items-center py-4">
              <span class="font-semibold text-gray-800 text-lg">Mi Aplicación</span>
            </a>
          </div>
          <div class="hidden md:flex items-center space-x-1">
            <a href="#" class="py-4 px-2 text-blue-500 border-b-2 border-blue-500 font-semibold">Inicio</a>
            <a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500">Servicios</a>
            <a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500">Acerca de</a>
            <a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500">Contacto</a>
          </div>
        </div>
        <div class="hidden md:flex items-center space-x-3">
          <a href="#" class="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-300 shadow-md">Iniciar Sesión</a>
        </div>
        <div class="md:hidden flex items-center">
          <button class="outline-none">
            <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Sección principal -->
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-blue-600 font-semibold tracking-wide uppercase">Funcionalidades</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Una mejor forma de enviar dinero
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div>

      <div class="mt-10">
        <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <!-- Característica 1 -->
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <!-- Icono -->
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Transferencias instantáneas</h3>
              <p class="mt-2 text-base text-gray-500">
                Transfiere dinero a cualquier parte del mundo en segundos con tarifas mínimas.
              </p>
            </div>
          </div>

          <!-- Característica 2 -->
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <!-- Icono -->
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Seguridad avanzada</h3>
              <p class="mt-2 text-base text-gray-500">
                Protegemos tus datos y dinero con encriptación de nivel bancario.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Tarjetas de precios -->
  <div class="bg-gray-100 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-8">Planes de precios</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Plan Básico -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="px-6 py-8 bg-gray-50 border-b border-gray-200">
            <h3 class="text-2xl font-medium text-gray-900">Básico</h3>
            <p class="mt-4 text-gray-500">Para uso personal</p>
            <p class="mt-4">
              <span class="text-4xl font-extrabold text-gray-900">$9</span>
              <span class="text-base font-medium text-gray-500">/mes</span>
            </p>
          </div>
          <div class="px-6 py-8">
            <ul class="space-y-4">
              <li class="flex items-start">
                <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="ml-3 text-base text-gray-700">5 transacciones por día</span>
              </li>
              <li class="flex items-start">
                <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="ml-3 text-base text-gray-700">Hasta $1,000 por transacción</span>
              </li>
              <li class="flex items-start">
                <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="ml-3 text-base text-gray-700">Soporte por email</span>
              </li>
            </ul>
            <button class="mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium text-white bg-blue-600 hover:bg-blue-700">
              Comenzar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-gray-800 text-white py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 class="text-lg font-semibold mb-4">Mi Aplicación</h2>
          <p class="text-gray-400">
            Haciendo que las transferencias de dinero sean fáciles y seguras desde 2023.
          </p>
        </div>
        <div>
          <h2 class="text-lg font-semibold mb-4">Enlaces</h2>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white">Inicio</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Acerca de</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h2 class="text-lg font-semibold mb-4">Legal</h2>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white">Privacidad</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Términos</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Cookies</a></li>
          </ul>
        </div>
        <div>
          <h2 class="text-lg font-semibold mb-4">Síguenos</h2>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">Twitter</span>
              <!-- Icono de Twitter -->
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">Facebook</span>
              <!-- Icono de Facebook -->
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">Instagram</span>
              <!-- Icono de Instagram -->
            </a>
          </div>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>&copy; 2023 Mi Aplicación. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
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
                  Esta semana me familiaricé con Bootstrap y Tailwind CSS, dos enfoques diferentes para el desarrollo frontend. Bootstrap ofrece componentes prediseñados que facilitan la creación rápida de interfaces, mientras que Tailwind proporciona utilidades de bajo nivel para construir diseños personalizados desde cero.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Aprendí cómo Bootstrap utiliza su sistema de rejilla para layouts responsivos y cómo Tailwind permite mayor personalización con su enfoque de "utility-first". También descubrí cómo ambas librerías simplifican el diseño responsivo y mejoran la consistencia visual.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 mt-6">
                  Cómo Aprendí
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Mi proceso de aprendizaje combinó la lectura de documentación oficial, la observación de ejemplos prácticos y la implementación de proyectos reales. Experimenté con diferentes componentes y clases de utilidad, analizando cómo funcionan y cómo pueden combinarse.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Los ejercicios prácticos fueron especialmente útiles para entender cómo funcionan estas librerías en proyectos reales. Construir páginas completas me ayudó a ver cómo todos los componentes y utilidades trabajan juntos para crear una experiencia de usuario coherente.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 mt-6">
                  Próximos Pasos
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Planeo profundizar en la personalización de Bootstrap mediante Sass y explorar la configuración avanzada de Tailwind para proyectos más grandes. También quiero investigar cómo estas librerías se integran con frameworks JavaScript como React y Vue.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Un área de interés particular es la accesibilidad web y cómo estas librerías CSS pueden ayudar a crear interfaces que sean accesibles para todos los usuarios. También quiero explorar estrategias de optimización para reducir el tamaño final de CSS en producción.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Week3;