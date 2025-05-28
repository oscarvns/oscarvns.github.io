import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useTheme } from '../../context/ThemeContext';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Week4: React.FC = () => {
  const { theme } = useTheme();
  const codeStyle = theme === 'dark' ? vscDarkPlus : vs;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Función para la animación de Canvas
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Configurar canvas para que ocupe todo el contenedor
    canvas.width = canvas.offsetWidth;
    canvas.height = 300;
    
    const particles: Particle[] = [];
    const particleCount = 50;
    
    // Clase para las partículas
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Inicializar partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Función de animación
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    // Limpieza
    return () => {
      cancelAnimationFrame(0);
    };
  }, []);

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
              Semana 4: JavaScript, TypeScript y Animación con Canvas
            </h1>

            {/* Teoría sobre JavaScript y TypeScript */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                Fundamentos de JavaScript y TypeScript
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Motores de JavaScript
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Los motores de JavaScript como V8 (Chrome), SpiderMonkey (Firefox) y JavaScriptCore (Safari) 
                    interpretan y ejecutan código JavaScript. Compilan JS a código máquina utilizando compilación 
                    JIT (Just-In-Time) para un mejor rendimiento.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Variables y Operadores
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    JavaScript usa var, let y const para declaraciones de variables. TypeScript añade tipado estático con 
                    anotaciones de tipo. Los operadores incluyen aritméticos (+, -, *, /), de comparación (==, ===, !=, !==), 
                    lógicos (&&, ||, !), y más.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-2 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="javascript" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`// JavaScript
let contador = 10;
const PI = 3.14159;

// TypeScript
let nombre: string = "Juan";
const estaActivo: boolean = true;
let numeros: number[] = [1, 2, 3];`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Tipos de Datos
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    JavaScript incluye tipos primitivos (number, string, boolean, null, undefined, symbol, bigint) 
                    y tipos de referencia (objetos, arrays, funciones). TypeScript extiende esto con interfaces, 
                    enums, tuplas y más.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Estructuras de Control y Bucles
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    JavaScript proporciona declaraciones if/else, switch cases, y varios bucles (for, while, do-while, 
                    for...of, for...in). TypeScript añade verificación de tipos a estas construcciones.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-2 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="javascript" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`// Estructuras de control
if (edad >= 18) {
  console.log("Adulto");
} else {
  console.log("Menor");
}

// Bucles
for (let i = 0; i < 5; i++) {
  console.log(i);
}

const frutas = ["manzana", "plátano", "naranja"];
for (const fruta of frutas) {
  console.log(fruta);
}`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Funciones
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    JavaScript soporta varios tipos de funciones incluyendo funciones tradicionales, funciones flecha, 
                    funciones anónimas, funciones auto-invocadas y closures. TypeScript añade anotaciones de tipo 
                    para parámetros y valores de retorno.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-2 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="javascript" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`// Función tradicional
function saludar(nombre) {
  return "Hola " + nombre;
}

// Función flecha
const multiplicar = (a, b) => a * b;

// Función anónima
const numeros = [1, 2, 3].map(function(n) { return n * 2; });

// Función auto-invocada
(function() {
  console.log("Me ejecuto inmediatamente");
})();

// Closure
function crearContador() {
  let contador = 0;
  return function() {
    return ++contador;
  };
}
const contador = crearContador();
console.log(contador()); // 1
console.log(contador()); // 2`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>

            {/* DOM y Canvas */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                Manipulación del DOM y Canvas
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Métodos y Propiedades del DOM
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    El Document Object Model (DOM) representa la estructura de la página. JavaScript puede acceder y 
                    manipular el DOM con métodos como getElementById, querySelector, appendChild, y propiedades 
                    como innerHTML, textContent y style.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-2 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="javascript" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`// Seleccionar elementos
const elemento = document.getElementById('miElemento');
const botones = document.querySelectorAll('.btn');

// Modificar contenido
elemento.textContent = 'Nuevo texto';
elemento.innerHTML = '<span>Contenido HTML</span>';

// Cambiar estilos
elemento.style.color = 'blue';
elemento.classList.add('activo');

// Crear elementos
const nuevoDiv = document.createElement('div');
document.body.appendChild(nuevoDiv);`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Canvas para Gráficos y Animación
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    El elemento Canvas de HTML proporciona una superficie de dibujo para crear gráficos, animaciones y 
                    contenido interactivo usando JavaScript. La API de Canvas ofrece métodos para dibujar formas, texto, 
                    imágenes y crear animaciones.
                  </p>
                </div>
              </div>
            </div>

            {/* Laboratorio - Animación */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                Laboratorio 4: Animación con JavaScript
              </h2>
              
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Para este laboratorio, he creado una animación de partículas utilizando la API de Canvas. Cada círculo 
                de color representa una partícula que se mueve alrededor del canvas y rebota en los bordes.
              </p>
              
              <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mb-6">
                <canvas 
                  ref={canvasRef} 
                  className="w-full h-[300px]"
                  style={{ background: 'rgba(0, 0, 0, 0.1)' }}
                ></canvas>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                  Explicación del Código de Animación
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-2">
                  La animación utiliza una clase Particle con propiedades para posición, velocidad, tamaño y color. La 
                  función animate crea un bucle usando requestAnimationFrame para actualizar y redibujar las partículas.
                </p>
                <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                  <SyntaxHighlighter 
                    language="javascript" 
                    style={codeStyle}
                    customStyle={{
                      borderRadius: '0.375rem',
                      margin: 0,
                      fontSize: '0.875rem'
                    }}
                  >
                    {`class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = \`hsl(\${Math.random() * 360}, 70%, 50%)\`;
  }
  
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    
    // Rebotar en los bordes
    if (this.x > canvas.width || this.x < 0) {
      this.speedX = -this.speedX;
    }
    
    if (this.y > canvas.height || this.y < 0) {
      this.speedY = -this.speedY;
    }
  }
  
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  for (const particle of particles) {
    particle.update();
    particle.draw();
  }
  
  requestAnimationFrame(animate);
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
                  Esta semana, obtuve una comprensión más profunda de los fundamentos de JavaScript y TypeScript. Aprendí cómo funcionan los motores de JavaScript internamente y cómo TypeScript añade tipado estático para mejorar la calidad del código. Las diferencias entre varios tipos de funciones y sus casos de uso se volvieron más claros para mí.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Trabajar con la API de Canvas fue particularmente interesante. Aprendí cómo crear animaciones utilizando requestAnimationFrame de JavaScript y cómo manipular gráficos directamente en el canvas.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 mt-6">
                  Cómo Aprendí
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Mi enfoque de aprendizaje incluyó leer documentación, seguir tutoriales y, lo más importante, construir la animación de partículas desde cero. Experimentar con diferentes parámetros y ver cómo afectaban a la animación me ayudó a entender mejor los conceptos.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  También encontré útil descomponer conceptos complejos en piezas más pequeñas y manejables, y construir mi comprensión gradualmente.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 mt-6">
                  Próximos Pasos
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  En el futuro, quiero explorar características más avanzadas de TypeScript y profundizar en animaciones con canvas. Estoy particularmente interesado en aprender sobre conceptos de desarrollo de juegos y cómo pueden aplicarse utilizando estas tecnologías.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Week4;