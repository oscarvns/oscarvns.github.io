// import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Server, Globe, Lightbulb } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useTheme } from '../../context/ThemeContext';
import vscDarkPlus from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';
import vs from 'react-syntax-highlighter/dist/cjs/styles/prism/vs';

const Week9: React.FC = () => {
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
              Semana 9: Tecnología Web Backend
            </h1>

            {/* Introducción */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Server className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Introducción al Backend
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600 dark:text-slate-300">
                  El desarrollo backend se refiere a la programación del lado del servidor que se encarga de la lógica de negocio, 
                  gestión de bases de datos, autenticación, seguridad y APIs. Mientras el frontend se ocupa de lo que ve el usuario, 
                  el backend maneja todo lo que sucede "detrás de escena".
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Esta semana exploramos las tecnologías fundamentales del backend, incluyendo arquitecturas de aplicaciones web, 
                  servidores web, y lenguajes como PHP y JSP (Java Server Pages) para crear aplicaciones dinámicas y robustas.
                </p>
              </div>
            </div>

            {/* Arquitectura de Aplicaciones Web */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Globe className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Arquitectura de Aplicaciones Web
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Modelo Cliente-Servidor
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Las aplicaciones web modernas siguen el modelo cliente-servidor, donde el cliente (navegador) solicita 
                    recursos al servidor, que procesa la solicitud y envía una respuesta.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="text" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`Cliente (Navegador)     →    Solicitud HTTP     →    Servidor Web
     ↓                                                      ↓
Interface de Usuario  ←    Respuesta HTML/JSON    ←    Procesamiento
     ↓                                                      ↓
Interacción Usuario   ←         Datos             ←    Base de Datos`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Arquitectura de 3 Capas
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    La arquitectura de tres capas separa la aplicación en componentes especializados:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Capa de Presentación</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        Interfaz de usuario (HTML, CSS, JavaScript). Se ejecuta en el navegador del cliente.
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Capa de Lógica de Negocio</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        Procesamiento de datos y reglas de negocio (PHP, JSP, Node.js). Se ejecuta en el servidor.
                      </p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Capa de Datos</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        Almacenamiento y gestión de datos (MySQL, PostgreSQL, MongoDB).
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Patrones de Arquitectura Web
                  </h3>
                  <ul className="list-disc ml-6 text-slate-600 dark:text-slate-300 space-y-2">
                    <li><strong>MVC (Model-View-Controller):</strong> Separa la lógica de negocio, presentación y control de flujo</li>
                    <li><strong>API REST:</strong> Interfaz de programación que utiliza HTTP para comunicación entre servicios</li>
                    <li><strong>Microservicios:</strong> Arquitectura que divide la aplicación en servicios pequeños e independientes</li>
                    <li><strong>Serverless:</strong> Ejecución de código sin gestionar la infraestructura del servidor</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Servidores Web */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Server className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Servidores Web y Server Side
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    ¿Qué es un Servidor Web?
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Un servidor web es un software que acepta solicitudes HTTP de clientes (navegadores) y les devuelve 
                    respuestas HTTP, generalmente páginas web, imágenes, archivos o datos en formato JSON.
                  </p>
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
                      {`# Ejemplo de solicitud HTTP
GET /productos HTTP/1.1
Host: mitienda.com
User-Agent: Mozilla/5.0
Accept: text/html,application/json

# Ejemplo de respuesta HTTP
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 156

{
  "productos": [
    {"id": 1, "nombre": "Laptop", "precio": 999.99},
    {"id": 2, "nombre": "Mouse", "precio": 29.99}
  ]
}`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Servidores Web Populares
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Apache HTTP Server</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li>• Servidor web más popular mundialmente</li>
                        <li>• Soporte nativo para PHP</li>
                        <li>• Altamente configurable</li>
                        <li>• Módulos extensibles</li>
                      </ul>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Apache Tomcat</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li>• Contenedor de servlets Java</li>
                        <li>• Soporte nativo para JSP</li>
                        <li>• Desarrollo empresarial</li>
                        <li>• Integración con Java EE</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Funcionamiento Server Side
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    El procesamiento del lado del servidor incluye varias etapas importantes:
                  </p>
                  <ol className="list-decimal ml-6 text-slate-600 dark:text-slate-300 space-y-2">
                    <li><strong>Recepción de solicitud:</strong> El servidor recibe una petición HTTP del cliente</li>
                    <li><strong>Procesamiento:</strong> Se ejecuta el código del servidor (PHP, JSP) para procesar la solicitud</li>
                    <li><strong>Acceso a datos:</strong> Si es necesario, se consulta la base de datos</li>
                    <li><strong>Generación de respuesta:</strong> Se construye la respuesta (HTML, JSON, XML)</li>
                    <li><strong>Envío al cliente:</strong> Se envía la respuesta de vuelta al navegador</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Lenguajes y Frameworks Backend */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Code className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Lenguajes y Frameworks Backend
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Lenguajes Backend Populares
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">PHP</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">
                        Lenguaje de scripting del lado del servidor, ampliamente usado para desarrollo web.
                      </p>
                      <ul className="text-slate-600 dark:text-slate-300 text-xs space-y-1">
                        <li>• Fácil de aprender</li>
                        <li>• Gran comunidad</li>
                        <li>• Hosting económico</li>
                        <li>• WordPress, Laravel</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Java (JSP)</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">
                        Tecnología robusta para aplicaciones empresariales de gran escala.
                      </p>
                      <ul className="text-slate-600 dark:text-slate-300 text-xs space-y-1">
                        <li>• Multiplataforma</li>
                        <li>• Altamente escalable</li>
                        <li>• Aplicaciones empresariales</li>
                        <li>• Spring, Struts</li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Node.js</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-xs">
                        JavaScript en el servidor, ideal para aplicaciones en tiempo real.
                      </p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Python</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-xs">
                        Sintaxis clara, frameworks como Django y Flask.
                      </p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Ruby</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-xs">
                        Lenguaje elegante, framework Ruby on Rails.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Frameworks Backend
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Los frameworks proporcionan estructura, herramientas y bibliotecas que aceleran el desarrollo:
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="text" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`Framework Comparison:

PHP:
├── Laravel    - Framework MVC completo con ORM Eloquent
├── CodeIgniter - Framework ligero y fácil de aprender
├── Symfony    - Framework robusto para aplicaciones complejas
└── CakePHP    - Convención sobre configuración

Java:
├── Spring Boot - Framework moderno para microservicios
├── Struts     - Framework MVC basado en acciones
├── JSF        - Framework basado en componentes
└── Play       - Framework reactivo y escalable

Node.js:
├── Express.js - Framework minimalista y flexible
├── NestJS     - Framework estructurado con TypeScript
├── Koa.js     - Framework ligero del equipo de Express
└── Fastify    - Framework rápido y eficiente`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>

            {/* Aplicaciones Web con PHP */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Code className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Desarrollo de Aplicaciones Web con PHP
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Introducción a PHP
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    PHP (PHP: Hypertext Preprocessor) es un lenguaje de scripting del lado del servidor especialmente 
                    diseñado para desarrollo web. Se ejecuta en el servidor y genera HTML dinámico que se envía al navegador.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="php" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`<?php
// Ejemplo básico de PHP
$nombre = "Juan";
$edad = 25;

echo "<h1>¡Hola, $nombre!</h1>";
echo "<p>Tienes $edad años.</p>";

// Condicionales
if ($edad >= 18) {
    echo "<p>Eres mayor de edad.</p>";
} else {
    echo "<p>Eres menor de edad.</p>";
}

// Ciclos
echo "<ul>";
for ($i = 1; $i <= 5; $i++) {
    echo "<li>Elemento $i</li>";
}
echo "</ul>";
?>`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Trabajando con Formularios en PHP
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    PHP excele en el manejo de formularios web, permitiendo recibir y procesar datos del usuario:
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="php" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`<!-- formulario.html -->
<form action="procesar.php" method="POST">
    <label for="nombre">Nombre:</label>
    <input type="text" name="nombre" required>
    
    <label for="email">Email:</label>
    <input type="email" name="email" required>
    
    <label for="mensaje">Mensaje:</label>
    <textarea name="mensaje" required></textarea>
    
    <button type="submit">Enviar</button>
</form>

<?php
// procesar.php
if ($_POST) {
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $mensaje = htmlspecialchars($_POST['mensaje']);
    
    if ($email && !empty($nombre) && !empty($mensaje)) {
        echo "<h2>Datos recibidos:</h2>";
        echo "<p><strong>Nombre:</strong> $nombre</p>";
        echo "<p><strong>Email:</strong> $email</p>";
        echo "<p><strong>Mensaje:</strong> $mensaje</p>";
        
        // Aquí podrías guardar en base de datos
        // guardarEnBaseDatos($nombre, $email, $mensaje);
    } else {
        echo "<p>Error: Datos inválidos</p>";
    }
}
?>`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    PHP y Bases de Datos (MySQL)
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Una de las fortalezas de PHP es su integración con bases de datos, especialmente MySQL:
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="php" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`<?php
// Conexión a base de datos con PDO
try {
    $pdo = new PDO("mysql:host=localhost;dbname=mi_app", $usuario, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Insertar datos
    $stmt = $pdo->prepare("INSERT INTO usuarios (nombre, email) VALUES (?, ?)");
    $stmt->execute([$nombre, $email]);
    
    // Consultar datos
    $stmt = $pdo->query("SELECT * FROM usuarios ORDER BY id DESC");
    $usuarios = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo "<table>";
    echo "<tr><th>ID</th><th>Nombre</th><th>Email</th></tr>";
    foreach ($usuarios as $usuario) {
        echo "<tr>";
        echo "<td>" . $usuario['id'] . "</td>";
        echo "<td>" . htmlspecialchars($usuario['nombre']) . "</td>";
        echo "<td>" . htmlspecialchars($usuario['email']) . "</td>";
        echo "</tr>";
    }
    echo "</table>";
    
} catch (PDOException $e) {
    echo "Error de conexión: " . $e->getMessage();
}
?>`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>

            {/* Aplicaciones Web con JSP */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Code className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Desarrollo de Aplicaciones Web con JSP
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Introducción a JSP
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    JavaServer Pages (JSP) es una tecnología que permite crear páginas web dinámicas utilizando Java. 
                    JSP combina HTML estático con código Java ejecutable, proporcionando una solución robusta para 
                    aplicaciones web empresariales.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="jsp" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`<%-- ejemplo.jsp --%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.Date" %>

<!DOCTYPE html>
<html>
<head>
    <title>Mi Primera Página JSP</title>
</head>
<body>
    <h1>¡Bienvenido a JSP!</h1>
    
    <%-- Código Java embebido --%>
    <%
        String nombre = request.getParameter("nombre");
        if (nombre == null) nombre = "Visitante";
        Date fechaActual = new Date();
    %>
    
    <p>Hola, <%= nombre %>!</p>
    <p>Fecha y hora actual: <%= fechaActual %></p>
    
    <%-- Directiva de página --%>
    <p>La página se generó el: <%= new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss").format(fechaActual) %></p>
</body>
</html>`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Elementos de JSP
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    JSP proporciona varios elementos para integrar Java en páginas web:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Directivas</h4>
                      <div className="bg-slate-100 dark:bg-slate-700 rounded p-2 text-xs overflow-x-auto">
                        <SyntaxHighlighter 
                          language="jsp" 
                          style={codeStyle}
                          customStyle={{
                            borderRadius: '0.375rem',
                            margin: 0,
                            fontSize: '0.75rem'
                          }}
                        >
                          {`<%@ page import="java.util.*" %>
<%@ taglib uri="/WEB-INF/tld/custom.tld" prefix="c" %>`}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Scriptlets</h4>
                      <div className="bg-slate-100 dark:bg-slate-700 rounded p-2 text-xs overflow-x-auto">
                        <SyntaxHighlighter 
                          language="jsp" 
                          style={codeStyle}
                          customStyle={{
                            borderRadius: '0.375rem',
                            margin: 0,
                            fontSize: '0.75rem'
                          }}
                        >
                          {`<% 
    for(int i=0; i<5; i++) {
        out.println("Número: " + i);
    }
%>`}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Expresiones</h4>
                      <div className="bg-slate-100 dark:bg-slate-700 rounded p-2 text-xs overflow-x-auto">
                        <SyntaxHighlighter 
                          language="jsp" 
                          style={codeStyle}
                          customStyle={{
                            borderRadius: '0.375rem',
                            margin: 0,
                            fontSize: '0.75rem'
                          }}
                        >
                          {`<%= "Hora actual: " + new Date() %>`}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Declaraciones</h4>
                      <div className="bg-slate-100 dark:bg-slate-700 rounded p-2 text-xs overflow-x-auto">
                        <SyntaxHighlighter 
                          language="jsp" 
                          style={codeStyle}
                          customStyle={{
                            borderRadius: '0.375rem',
                            margin: 0,
                            fontSize: '0.75rem'
                          }}
                        >
                          {`<%! 
    private int contador = 0;
    public String saludo() {
        return "¡Hola!";
    }
%>`}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    JSP con Servlets y JSTL
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Para aplicaciones más robustas, JSP se combina con Servlets y JSTL (JSP Standard Tag Library):
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="java" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`// UsuarioServlet.java
@WebServlet("/usuarios")
public class UsuarioServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        // Obtener datos de la base de datos
        List<Usuario> usuarios = usuarioDAO.obtenerTodos();
        
        // Pasar datos a la JSP
        request.setAttribute("usuarios", usuarios);
        request.setAttribute("titulo", "Lista de Usuarios");
        
        // Redirigir a la JSP
        RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/usuarios.jsp");
        dispatcher.forward(request, response);
    }
}`}
                    </SyntaxHighlighter>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-4 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="jsp" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`<%-- usuarios.jsp --%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <title>TITULO</title>
</head>
<body>
    <h1>TITULO</h1>
    
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
        </tr>
        
        <c:forEach items="\${usuarios}" var="usuario">
            <tr>
                <td>\${usuario.id}</td>
                <td>\${usuario.nombre}</td>
                <td>\${usuario.email}</td>
                <td>
                    <a href="editar?id=\${usuario.id}">Editar</a>
                    <a href="eliminar?id=\${usuario.id}">Eliminar</a>
                </td>
            </tr>
        </c:forEach>
    </table>
    
    <c:if test="\${empty usuarios}">
        <p>No hay usuarios registrados.</p>
    </c:if>
</body>
</html>`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>

            {/* Laboratorio */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Server className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Laboratorio 9: Despliegue de Aplicaciones Backend
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Despliegue de Aplicación PHP
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Para este laboratorio, desarrollé y desplegué una aplicación PHP completa con las siguientes características:
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6 mb-4">
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Aplicación PHP: Sistema de Contactos</h4>
                    <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                      <li>• <strong>Frontend:</strong> Formulario HTML para capturar datos de contacto</li>
                      <li>• <strong>Backend:</strong> Scripts PHP para procesar y validar datos</li>
                      <li>• <strong>Base de datos:</strong> MySQL para almacenar información de contactos</li>
                      <li>• <strong>Funcionalidades:</strong> CRUD completo (Crear, Leer, Actualizar, Eliminar)</li>
                      <li>• <strong>Servidor:</strong> Apache con mod_php</li>
                    </ul>
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
                      {`# Estructura del proyecto PHP
contactos-app/
├── index.php              # Página principal
├── config/
│   └── database.php       # Configuración de BD
├── controllers/
│   └── ContactoController.php
├── models/
│   └── Contacto.php       # Modelo de datos
├── views/
│   ├── contactos/
│   │   ├── index.php      # Lista de contactos
│   │   ├── create.php     # Formulario de creación
│   │   └── edit.php       # Formulario de edición
│   └── layouts/
│       └── header.php     # Plantilla base
├── assets/
│   ├── css/
│   └── js/
└── sql/
    └── contactos.sql      # Script de base de datos

# Comandos de despliegue
sudo cp -r contactos-app/ /var/www/html/
sudo chown -R www-data:www-data /var/www/html/contactos-app/
sudo systemctl restart apache2`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Despliegue de Aplicación JSP
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    También desarrollé una aplicación JSP con funcionalidades similares pero usando tecnología Java:
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-6 mb-4">
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Aplicación JSP: Sistema de Productos</h4>
                    <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                      <li>• <strong>Frontend:</strong> JSP con JSTL para interfaz dinámica</li>
                      <li>• <strong>Backend:</strong> Servlets para lógica de negocio</li>
                      <li>• <strong>Base de datos:</strong> MySQL con JDBC</li>
                      <li>• <strong>Funcionalidades:</strong> Catálogo de productos con gestión completa</li>
                      <li>• <strong>Servidor:</strong> Apache Tomcat</li>
                    </ul>
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
                      {`# Estructura del proyecto JSP
productos-app/
├── src/
│   └── main/
│       ├── java/
│       │   ├── controllers/
│       │   │   └── ProductoServlet.java
│       │   ├── models/
│       │   │   └── Producto.java
│       │   └── dao/
│       │       └── ProductoDAO.java
│       ├── webapp/
│       │   ├── WEB-INF/
│       │   │   ├── web.xml
│       │   │   └── views/
│       │   │       ├── productos/
│       │   │       │   ├── index.jsp
│       │   │       │   ├── create.jsp
│       │   │       │   └── edit.jsp
│       │   │       └── layouts/
│       │   │           └── main.jsp
│       │   ├── css/
│       │   └── js/
│       └── resources/
│           └── config.properties
└── pom.xml                # Maven configuration

# Comandos de despliegue
mvn clean package
sudo cp target/productos-app.war /opt/tomcat/webapps/
sudo systemctl restart tomcat`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Configuración del Entorno de Desarrollo
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Para completar el laboratorio, configuré un entorno de desarrollo completo:
                  </p>
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
                      {`# Instalación de Apache + PHP + MySQL (LAMP Stack)
sudo apt update
sudo apt install apache2 php libapache2-mod-php mysql-server php-mysql

# Instalación de Apache Tomcat para JSP
sudo apt install openjdk-11-jdk
wget https://downloads.apache.org/tomcat/tomcat-9/v9.0.75/bin/apache-tomcat-9.0.75.tar.gz
sudo tar -xzf apache-tomcat-9.0.75.tar.gz -C /opt/
sudo mv /opt/apache-tomcat-9.0.75 /opt/tomcat

# Configuración de MySQL
sudo mysql_secure_installation
mysql -u root -p
CREATE DATABASE contactos_db;
CREATE DATABASE productos_db;

# Habilitación de módulos Apache
sudo a2enmod rewrite
sudo a2enmod ssl
sudo systemctl restart apache2

# Verificación de servicios
sudo systemctl status apache2
sudo systemctl status mysql
sudo systemctl status tomcat`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Resultados del Laboratorio
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Aplicación PHP</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li>✅ Formularios funcionales</li>
                        <li>✅ Validación de datos</li>
                        <li>✅ Conexión a MySQL</li>
                        <li>✅ CRUD completo</li>
                        <li>✅ Despliegue en Apache</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
                      <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Aplicación JSP</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li>✅ Servlets configurados</li>
                        <li>✅ JSP con JSTL</li>
                        <li>✅ Conexión JDBC</li>
                        <li>✅ Patrón MVC</li>
                        <li>✅ Despliegue en Tomcat</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reflexión */}
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
                  Esta semana fue fundamental para comprender el funcionamiento del backend en aplicaciones web. 
                  Aprendí que el desarrollo backend es mucho más que simplemente procesar datos; involucra arquitectura, 
                  seguridad, escalabilidad y una comprensión profunda de cómo interactúan los diferentes componentes de un sistema web.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  El trabajo con PHP me mostró la simplicidad y flexibilidad de este lenguaje para desarrollo web rápido, 
                  mientras que JSP me introdujo a la robustez y escalabilidad de las soluciones Java empresariales. 
                  Ambas tecnologías tienen sus fortalezas y casos de uso específicos.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 mt-6">
                  Cómo Aprendí
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Mi enfoque fue eminentemente práctico: configuré servidores locales, desarrollé aplicaciones completas 
                  y enfrenté problemas reales de despliegue. Esto me ayudó a entender no solo la sintaxis de los lenguajes, 
                  sino también los aspectos operativos del desarrollo backend.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  La comparación directa entre PHP y JSP fue especialmente valiosa, ya que me permitió entender las diferencias 
                  filosóficas entre ambos enfoques y cuándo usar cada uno según los requirements del proyecto.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 mt-6">
                  Próximos Pasos
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Quiero profundizar en frameworks más modernos como Laravel para PHP y Spring Boot para Java. 
                  También me interesa explorar tecnologías más contemporáneas como Node.js y Docker para contenedorización. 
                  El siguiente paso natural sería aprender sobre APIs REST, microservicios y DevOps para completar mi formación backend.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Week9;