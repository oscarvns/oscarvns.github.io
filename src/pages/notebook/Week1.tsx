import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Code, Lightbulb } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useTheme } from '../../context/ThemeContext';
import vscDarkPlus from 'react-syntax-highlighter/dist/esm/styles/prism';
import vs from 'react-syntax-highlighter/dist/cjs/styles/prism/vs';

const WeekOne: React.FC = () => {
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
              Semana 1: Introducción a las Tecnologías Web
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
                    Soluciones Web
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Existen diferentes tipos de soluciones web, cada una con características y propósitos específicos:
                  </p>
                  <ul className="list-disc ml-6 mt-2 text-slate-600 dark:text-slate-300 space-y-1">
                    <li><strong>Página Web:</strong> Documento individual con contenido accesible a través de un navegador web.</li>
                    <li><strong>Sitio Web:</strong> Conjunto de páginas web relacionadas bajo un mismo dominio, generalmente con navegación entre ellas.</li>
                    <li><strong>Aplicación Web:</strong> Software interactivo que se ejecuta en un navegador, permitiendo a los usuarios realizar tareas específicas.</li>
                    <li><strong>Sistema Web:</strong> Conjunto de aplicaciones web integradas que ofrecen soluciones completas para procesos de negocio o institucionales.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Tecnologías Web Básicas
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    El desarrollo web se basa en varias tecnologías fundamentales:
                  </p>
                  <ul className="list-disc ml-6 mt-2 text-slate-600 dark:text-slate-300 space-y-1">
                    <li><strong>Lenguajes de marcado:</strong> HTML (estructura), XML (datos estructurados)</li>
                    <li><strong>Lenguajes de estilo:</strong> CSS (presentación visual)</li>
                    <li><strong>Lenguajes de programación:</strong> JavaScript (interactividad del lado del cliente), PHP, Python, Java, Ruby (procesamiento del lado del servidor)</li>
                    <li><strong>Gráficos web:</strong> SVG (vectoriales), Canvas (dibujo programático), WebGL (gráficos 3D)</li>
                    <li><strong>Bases de datos:</strong> MySQL, PostgreSQL, MongoDB, SQLite</li>
                  </ul>
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
                      {`<!-- Ejemplo básico de estructura web -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Primera Página</title>
  <!-- Estilos CSS -->
  <link rel="stylesheet" href="estilos.css">
</head>
<body>
  <header>
    <h1>Bienvenido a mi sitio web</h1>
    <nav>
      <!-- Navegación del sitio -->
    </nav>
  </header>
  
  <main>
    <!-- Contenido principal -->
  </main>
  
  <footer>
    <!-- Pie de página -->
  </footer>
  
  <!-- JavaScript -->
  <script src="script.js"></script>
</body>
</html>`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Funcionamiento de la Web
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    La web funciona a través de varios protocolos y sistemas que permiten la comunicación entre clientes y servidores:
                  </p>
                  <ul className="list-disc ml-6 mt-2 text-slate-600 dark:text-slate-300 space-y-2">
                    <li>
                      <strong>DNS (Sistema de Nombres de Dominio):</strong> Traduce nombres de dominio legibles por humanos (como example.com) en direcciones IP numéricas que las computadoras utilizan para identificar servidores en la red.
                    </li>
                    <li>
                      <strong>Protocolo TCP/IP:</strong> Conjunto de reglas que gobierna cómo los datos se transmiten a través de Internet. TCP (Protocolo de Control de Transmisión) garantiza la entrega confiable de datos, mientras que IP (Protocolo de Internet) maneja el direccionamiento y enrutamiento de los paquetes de datos.
                    </li>
                    <li>
                      <strong>Protocolo HTTP/HTTPS:</strong> El Protocolo de Transferencia de Hipertexto define cómo se formatean y transmiten los mensajes en la web. HTTPS es la versión segura que cifra las comunicaciones para proteger la privacidad y la integridad de los datos.
                    </li>
                  </ul>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-3 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="bash" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`# Ejemplo de solicitud HTTP
GET /index.html HTTP/1.1
Host: www.ejemplo.com
User-Agent: Mozilla/5.0
Accept: text/html,application/xhtml+xml
Accept-Language: es-ES,es;q=0.8

# Respuesta del servidor
HTTP/1.1 200 OK
Date: Tue, 10 Jan 2023 12:00:00 GMT
Server: Apache/2.4.41
Content-Type: text/html; charset=UTF-8
Content-Length: 1234

<!DOCTYPE html>
<html>
...contenido de la página...
</html>`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Roles en el Desarrollo Web
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    El desarrollo de aplicaciones web modernas involucra varios roles especializados:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Desarrollador Frontend</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        Se encarga de la interfaz de usuario y experiencia del usuario (UI/UX). Trabaja con HTML, CSS, JavaScript y frameworks como React, Angular o Vue.js para crear la parte visible e interactiva de la aplicación.
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Desarrollador Backend</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        Responsable de la lógica del servidor, bases de datos y APIs. Utiliza lenguajes como PHP, Python, Java, Ruby o Node.js para procesar datos, gestionar la autenticación y comunicarse con sistemas externos.
                      </p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Desarrollador Fullstack</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        Domina tanto el frontend como el backend, pudiendo trabajar en todas las capas de una aplicación web. Comprende cómo las diferentes partes del sistema interactúan entre sí y puede desarrollar soluciones end-to-end.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Code className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Visual Studio Code
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Introducción a VS Code
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Visual Studio Code (VS Code) es un editor de código fuente desarrollado por Microsoft. Es gratuito, de código abierto y altamente personalizable, lo que lo hace ideal para el desarrollo web. Sus características incluyen resaltado de sintaxis, autocompletado inteligente, depuración integrada y control de versiones Git.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Elementos de la Interfaz de Usuario
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    VS Code tiene una interfaz intuitiva organizada en varias áreas principales:
                  </p>
                  <ul className="list-disc ml-6 text-slate-600 dark:text-slate-300 space-y-2">
                    <li><strong>Barra de actividad:</strong> Ubicada en el extremo izquierdo, permite cambiar entre diferentes vistas (Explorador, Búsqueda, Control de versiones, Depuración, Extensiones).</li>
                    <li><strong>Barra lateral:</strong> Muestra el contenido de la vista activa, como archivos del proyecto o extensiones instaladas.</li>
                    <li><strong>Editor:</strong> Área principal donde se edita el código, con soporte para múltiples editores lado a lado.</li>
                    <li><strong>Barra de estado:</strong> En la parte inferior, muestra información sobre el archivo actual y proporciona acceso rápido a configuraciones.</li>
                    <li><strong>Panel:</strong> Ubicado debajo del editor, muestra terminales, problemas, salida de depuración y más.</li>
                    <li><strong>Paleta de comandos:</strong> Accesible mediante Ctrl+Shift+P (o Cmd+Shift+P en Mac), permite ejecutar comandos y acceder a funciones.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Extensiones Esenciales
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Las extensiones amplían la funcionalidad de VS Code. Algunas de las más útiles para desarrollo web incluyen:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Para HTML/CSS/JavaScript</h4>
                      <ul className="list-disc ml-6 text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li><strong>Live Server:</strong> Servidor local con recarga en vivo.</li>
                        <li><strong>Prettier:</strong> Formateador de código automático.</li>
                        <li><strong>ESLint:</strong> Linter para identificar problemas en JavaScript.</li>
                        <li><strong>HTML CSS Support:</strong> Autocompletado para clases CSS.</li>
                        <li><strong>Auto Rename Tag:</strong> Renombra automáticamente etiquetas HTML coincidentes.</li>
                      </ul>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Para Frameworks y Herramientas</h4>
                      <ul className="list-disc ml-6 text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li><strong>ES7 React/Redux/GraphQL/React-Native snippets:</strong> Atajos para React.</li>
                        <li><strong>Vetur:</strong> Soporte para Vue.js.</li>
                        <li><strong>Angular Language Service:</strong> Soporte para Angular.</li>
                        <li><strong>PHP Intelephense:</strong> Soporte avanzado para PHP.</li>
                        <li><strong>Python:</strong> Soporte completo para desarrollo en Python.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-4 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="json" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`// Ejemplo de configuración de usuario en VS Code (settings.json)
{
  "editor.fontFamily": "Fira Code, Consolas, 'Courier New', monospace",
  "editor.fontSize": 14,
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "prettier.singleQuote": true,
  "prettier.semi": false,
  "workbench.colorTheme": "GitHub Dark",
  "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
  "liveServer.settings.donotShowInfoMsg": true
}`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Atajos de Teclado Útiles
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Dominar los atajos de teclado aumenta significativamente la productividad en VS Code:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Atajos Generales</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li><code className="bg-slate-200 dark:bg-slate-600 px-1 rounded">Ctrl+Shift+P</code>: Paleta de comandos</li>
                        <li><code className="bg-slate-200 dark:bg-slate-600 px-1 rounded">Ctrl+P</code>: Búsqueda rápida de archivos</li>
                        <li><code className="bg-slate-200 dark:bg-slate-600 px-1 rounded">Ctrl+,</code>: Configuración de usuario</li>
                        <li><code className="bg-slate-200 dark:bg-slate-600 px-1 rounded">Ctrl+B</code>: Mostrar/ocultar barra lateral</li>
                        <li><code className="bg-slate-200 dark:bg-slate-600 px-1 rounded">Ctrl+\</code>: Dividir editor</li>
                        <li><code className="bg-slate-200 dark:bg-slate-600 px-1 rounded">Ctrl+`</code>: Mostrar/ocultar terminal</li>
                      </ul>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Edición de Código</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li><code className="bg-slate-200 dark:bg-slate-600 px-1 rounded">Ctrl+D</code>: Seleccionar siguiente ocurrencia</li>
                        <li><code className="bg-slate-200 dark:bg-slate-600 px-1 rounded">Alt+↑/↓</code>: Mover línea arriba/abajo</li>
                        <li><code className="bg-slate-200 dark:bg-slate-600 px-1 rounded">Ctrl+Shift+K</code>: Eliminar línea</li>
                        <li><code className="bg-slate-200 dark:bg-slate-600 px-1 rounded">Ctrl+/</code>: Comentar/descomentar</li>
                        <li><code className="bg-slate-200 dark:bg-slate-600 px-1 rounded">Alt+Shift+F</code>: Formatear documento</li>
                        <li><code className="bg-slate-200 dark:bg-slate-600 px-1 rounded">F12</code>: Ir a definición</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Code className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Laboratorio 01A: VSCode - Interfaz, Extensiones y Atajos
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Ejercicio 1: Personalización del Entorno
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Configuré VS Code con un tema, fuente y ajustes personalizados para optimizar mi flujo de trabajo de desarrollo.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="json" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`// Mi configuración personalizada
{
  "workbench.colorTheme": "One Dark Pro",
  "editor.fontFamily": "JetBrains Mono, Consolas, monospace",
  "editor.fontSize": 15,
  "editor.lineHeight": 1.6,
  "editor.renderLineHighlight": "all",
  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": true,
  "editor.minimap.enabled": true,
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  "workbench.iconTheme": "material-icon-theme",
  "terminal.integrated.fontFamily": "JetBrains Mono",
  "window.titleBarStyle": "custom",
  "breadcrumbs.enabled": true
}`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Ejercicio 2: Instalación y Configuración de Extensiones
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Instalé y configuré extensiones esenciales para el desarrollo web, mejorando la productividad y calidad del código.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Extensiones Instaladas</h4>
                      <ul className="list-disc ml-6 text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li>Live Server</li>
                        <li>Prettier - Code formatter</li>
                        <li>ESLint</li>
                        <li>Auto Rename Tag</li>
                        <li>Path Intellisense</li>
                        <li>GitLens</li>
                        <li>Material Icon Theme</li>
                        <li>One Dark Pro (tema)</li>
                      </ul>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Configuración de Prettier</h4>
                      <SyntaxHighlighter 
                        language="json" 
                        style={codeStyle}
                        customStyle={{
                          borderRadius: '0.375rem',
                          margin: 0,
                          fontSize: '0.875rem'
                        }}
                      >
                        {`{
  "prettier.singleQuote": true,
  "prettier.printWidth": 100,
  "prettier.tabWidth": 2,
  "prettier.useTabs": false,
  "prettier.semi": true,
  "prettier.bracketSpacing": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}`}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="bash" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`# Instalación de extensiones desde la terminal
code --install-extension ritwickdey.LiveServer
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension formulahendry.auto-rename-tag
code --install-extension christian-kohler.path-intellisense
code --install-extension eamodio.gitlens
code --install-extension PKief.material-icon-theme
code --install-extension zhuangtongfa.material-theme`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Ejercicio 3: Dominio de Atajos de Teclado
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Practiqué y memoricé los atajos de teclado más útiles para agilizar mi flujo de trabajo en VS Code.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="markdown" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`# Mi lista de atajos de teclado más utilizados

## Navegación
- Ctrl+P: Navegación rápida de archivos
- Ctrl+G: Ir a una línea específica
- Ctrl+Tab: Cambiar entre archivos abiertos
- Ctrl+Shift+O: Navegar a símbolos en el archivo actual
- Alt+← / Alt+→: Navegar hacia atrás/adelante

## Edición
- Ctrl+X/C/V: Cortar/Copiar/Pegar
- Ctrl+Z/Y: Deshacer/Rehacer
- Alt+↑/↓: Mover línea arriba/abajo
- Ctrl+Shift+K: Eliminar línea
- Ctrl+Enter: Insertar línea abajo
- Ctrl+Shift+Enter: Insertar línea arriba
- Ctrl+D: Seleccionar palabra actual y siguiente ocurrencia
- Alt+Click: Insertar cursor adicional
- Ctrl+L: Seleccionar línea actual

## Terminal y Paneles
- Ctrl+\`: Abrir/cerrar terminal integrado
- Ctrl+B: Mostrar/ocultar barra lateral
- Ctrl+J: Mostrar/ocultar panel inferior
- Ctrl+Shift+M: Mostrar problemas

## Multi-cursor y Selección
- Alt+Click: Insertar cursor
- Ctrl+Alt+↑/↓: Insertar cursor arriba/abajo
- Shift+Alt+→: Expandir selección
- Shift+Alt+←: Reducir selección
- Ctrl+Shift+L: Seleccionar todas las ocurrencias de la selección actual`}
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
                  Esta semana obtuve una comprensión fundamental de las tecnologías web y cómo funcionan juntas para crear experiencias en línea. Aprendí la diferencia entre sitios web, aplicaciones web y sistemas web completos, así como los protocolos subyacentes que hacen posible la web.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  También me familiaricé con los diferentes roles en el desarrollo web y las habilidades específicas que cada uno requiere. Comprender estas distinciones me ayudará a identificar mejor mi camino de aprendizaje y posibles áreas de especialización en el futuro.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 mt-6">
                  Cómo Aprendí
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Mi enfoque de aprendizaje combinó la lectura de documentación, visualización de tutoriales y, lo más importante, la práctica directa con Visual Studio Code. La configuración del entorno de desarrollo y la experimentación con diferentes extensiones y atajos de teclado fueron especialmente valiosas para comprender cómo los desarrolladores trabajan eficientemente.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Encontré que la mejor manera de aprender los conceptos fue aplicarlos inmediatamente. Por ejemplo, después de aprender sobre un atajo de teclado útil, lo practicaba repetidamente hasta que se volviera automático.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 mt-6">
                  Próximos Pasos
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Para continuar mi aprendizaje, planeo profundizar en HTML y CSS, que son los fundamentos de cualquier desarrollo web. También quiero explorar más extensiones específicas para los lenguajes y frameworks que me interesen, y seguir mejorando mi eficiencia con VS Code.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  A largo plazo, me gustaría desarrollar habilidades tanto en frontend como en backend, con el objetivo de convertirme en un desarrollador fullstack capaz de crear aplicaciones web completas de manera independiente.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WeekOne;