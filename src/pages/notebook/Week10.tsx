import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Code, Lightbulb, Play, Terminal } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useTheme } from '../../context/ThemeContext';
import vscDarkPlus from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';
import vs from 'react-syntax-highlighter/dist/cjs/styles/prism/vs';

const Week10: React.FC = () => {
  const { theme } = useTheme();
  const codeStyle = theme === 'dark' ? vscDarkPlus : vs;

  // Calculadora interactiva de Python
  const [calcInput, setCalcInput] = useState('');
  const [calcResult, setCalcResult] = useState('');

  const executeCalculation = () => {
    try {
      // Simulación de ejecución Python (solo operaciones básicas)
      const result = eval(calcInput);
      setCalcResult(`>>> ${calcInput}\n${result}`);
    } catch (error) {
      setCalcResult(`>>> ${calcInput}\nError: Operación inválida`);
    }
  };

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
              Semana 10: Lenguaje Python
            </h1>

            {/* Introducción */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <BookOpen className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Introducción a Python
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600 dark:text-slate-300">
                  Python es un lenguaje de programación de alto nivel, interpretado y de propósito general. 
                  Se caracteriza por su sintaxis clara y legible, lo que lo hace ideal tanto para principiantes 
                  como para desarrolladores experimentados.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Filosofía</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      "Simple es mejor que complejo"
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Versatilidad</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      Web, IA, análisis de datos, automatización
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Comunidad</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      Gran ecosistema de bibliotecas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sintaxis Básica */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Code className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Sintaxis Básica
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Indentación y Comentarios
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Python usa indentación para definir bloques de código. No necesita llaves {'{}'} como otros lenguajes.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="python" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`# Esto es un comentario de una línea

"""
Este es un comentario
de múltiples líneas
"""

# Ejemplo de indentación
if True:
    print("Esta línea está indentada")
    if True:
        print("Esta línea está más indentada")
    print("Vuelta al nivel anterior")
print("Sin indentación")

# Variables - no necesitan declaración de tipo
nombre = "Python"
edad = 30
es_divertido = True
precio = 19.99`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Tipos de Datos Básicos
                  </h3>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="python" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`# Números
entero = 42
flotante = 3.14159
complejo = 2 + 3j

# Cadenas (strings)
texto1 = "Hola mundo"
texto2 = 'También funciona con comillas simples'
texto_largo = """Texto que puede
ocupar múltiples
líneas"""

# Operaciones con cadenas
nombre = "Ana"
saludo = f"Hola, {nombre}!"  # f-strings (Python 3.6+)
repetir = "Python " * 3      # "Python Python Python "
longitud = len("Python")     # 6

# Booleanos
verdadero = True
falso = False
resultado = 5 > 3  # True`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>

            {/* Estructuras de Datos */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Code className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Estructuras de Datos
                </h2>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                      Listas
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                      Colecciones ordenadas y mutables
                    </p>
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                      <SyntaxHighlighter 
                        language="python" 
                        style={codeStyle}
                        customStyle={{
                          borderRadius: '0.375rem',
                          margin: 0,
                          fontSize: '0.75rem'
                        }}
                      >
                        {`# Crear listas
frutas = ["manzana", "banana", "cereza"]
numeros = [1, 2, 3, 4, 5]
mixta = [1, "texto", True, 3.14]

# Operaciones
frutas.append("naranja")     # Agregar
primera = frutas[0]          # Acceder
frutas[1] = "pera"          # Modificar
del frutas[2]               # Eliminar
longitud = len(frutas)      # Tamaño

# Slicing
parte = numeros[1:4]        # [2, 3, 4]
inversa = numeros[::-1]     # [5, 4, 3, 2, 1]`}
                      </SyntaxHighlighter>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                      Tuplas
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                      Colecciones ordenadas e inmutables
                    </p>
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                      <SyntaxHighlighter 
                        language="python" 
                        style={codeStyle}
                        customStyle={{
                          borderRadius: '0.375rem',
                          margin: 0,
                          fontSize: '0.75rem'
                        }}
                      >
                        {`# Crear tuplas
coordenadas = (10, 20)
colores = ("rojo", "verde", "azul")
una_tupla = (42,)  # Coma necesaria

# Acceso (no se puede modificar)
x = coordenadas[0]
y = coordenadas[1]

# Desempaquetado
x, y = coordenadas
r, g, b = colores

# Métodos útiles
posicion = colores.index("verde")  # 1
cantidad = colores.count("rojo")   # 1`}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Diccionarios
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Colecciones de pares clave-valor, similares a objetos JSON
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="python" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`# Crear diccionarios
persona = {
    "nombre": "Juan",
    "edad": 30,
    "ciudad": "Madrid",
    "activo": True
}

# Acceso y modificación
nombre = persona["nombre"]           # "Juan"
edad = persona.get("edad", 0)       # 30 (0 si no existe)
persona["edad"] = 31                # Modificar
persona["email"] = "juan@email.com" # Agregar

# Métodos útiles
claves = persona.keys()             # dict_keys(['nombre', 'edad', ...])
valores = persona.values()          # dict_values(['Juan', 31, ...])
items = persona.items()             # dict_items([('nombre', 'Juan'), ...])

# Iterar
for clave, valor in persona.items():
    print(f"{clave}: {valor}")`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>

            {/* Estructuras de Control */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Code className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Estructuras de Control
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Condicionales
                  </h3>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="python" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`# Condicionales if, elif, else
edad = 18

if edad < 13:
    categoria = "niño"
elif edad < 18:
    categoria = "adolescente"
elif edad < 65:
    categoria = "adulto"
else:
    categoria = "adulto mayor"

# Operadores de comparación
# ==, !=, <, >, <=, >=
# and, or, not
# in, not in

# Ejemplos
if "python" in texto.lower() and edad >= 18:
    print("Puede aprender Python")

# Operador ternario
resultado = "par" if numero % 2 == 0 else "impar"`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                      Ciclos For
                    </h3>
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                      <SyntaxHighlighter 
                        language="python" 
                        style={codeStyle}
                        customStyle={{
                          borderRadius: '0.375rem',
                          margin: 0,
                          fontSize: '0.75rem'
                        }}
                      >
                        {`# Iterar sobre listas
frutas = ["manzana", "banana", "cereza"]
for fruta in frutas:
    print(fruta)

# Con índice
for i, fruta in enumerate(frutas):
    print(f"{i}: {fruta}")

# Rangos
for i in range(5):        # 0 a 4
    print(i)

for i in range(2, 8, 2):  # 2, 4, 6
    print(i)

# List comprehensions
cuadrados = [x**2 for x in range(5)]
pares = [x for x in range(10) if x % 2 == 0]`}
                      </SyntaxHighlighter>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                      Ciclos While
                    </h3>
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                      <SyntaxHighlighter 
                        language="python" 
                        style={codeStyle}
                        customStyle={{
                          borderRadius: '0.375rem',
                          margin: 0,
                          fontSize: '0.75rem'
                        }}
                      >
                        {`# Ciclo while básico
contador = 0
while contador < 5:
    print(f"Contador: {contador}")
    contador += 1

# Control de flujo
for i in range(10):
    if i == 3:
        continue  # Saltar iteración
    if i == 7:
        break     # Terminar ciclo
    print(i)

# While con else
numero = 10
while numero > 0:
    print(numero)
    numero -= 1
else:
    print("¡Terminado!")`}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Funciones y POO */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Code className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Funciones y Programación Orientada a Objetos
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Funciones
                  </h3>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="python" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`# Función básica
def saludar(nombre):
    return f"Hola, {nombre}!"

# Función con parámetros por defecto
def crear_perfil(nombre, edad=18, activo=True):
    return {
        "nombre": nombre,
        "edad": edad,
        "activo": activo
    }

# Función con argumentos variables
def sumar(*numeros):
    return sum(numeros)

def crear_usuario(**datos):
    return datos

# Ejemplos de uso
mensaje = saludar("Ana")
perfil = crear_perfil("Juan", 25)
total = sumar(1, 2, 3, 4, 5)
usuario = crear_usuario(nombre="María", edad=30, ciudad="Barcelona")

# Funciones lambda (anónimas)
cuadrado = lambda x: x**2
numeros = [1, 2, 3, 4, 5]
cuadrados = list(map(cuadrado, numeros))`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Clases y Objetos
                  </h3>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="python" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`class Persona:
    # Atributo de clase
    especie = "Homo sapiens"
    
    def __init__(self, nombre, edad):
        # Atributos de instancia
        self.nombre = nombre
        self.edad = edad
        self._activo = True  # Atributo "privado"
    
    def saludar(self):
        return f"Hola, soy {self.nombre}"
    
    def cumplir_anos(self):
        self.edad += 1
        return self.edad
    
    @property
    def activo(self):
        return self._activo
    
    @activo.setter
    def activo(self, valor):
        self._activo = bool(valor)

# Herencia
class Estudiante(Persona):
    def __init__(self, nombre, edad, carrera):
        super().__init__(nombre, edad)
        self.carrera = carrera
        self.materias = []
    
    def inscribir_materia(self, materia):
        self.materias.append(materia)
    
    def saludar(self):  # Polimorfismo
        return f"Hola, soy {self.nombre}, estudio {self.carrera}"

# Uso
persona = Persona("Ana", 25)
estudiante = Estudiante("Carlos", 20, "Ingeniería")
print(persona.saludar())
print(estudiante.saludar())`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Excepciones y Módulos
                  </h3>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="python" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`# Manejo de excepciones
def dividir(a, b):
    try:
        resultado = a / b
        return resultado
    except ZeroDivisionError:
        print("Error: División por cero")
        return None
    except TypeError:
        print("Error: Tipos de datos incorrectos")
        return None
    finally:
        print("Operación completada")

# Importar módulos
import math
from datetime import datetime, date
import json

# Ejemplos
raiz = math.sqrt(16)
ahora = datetime.now()
datos = {"nombre": "Python", "version": 3.11}
json_string = json.dumps(datos)

# Crear módulo personalizado
# archivo: mi_modulo.py
def mi_funcion():
    return "Función de mi módulo"

PI = 3.14159

# En otro archivo:
# from mi_modulo import mi_funcion, PI`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculadora Interactiva */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Terminal className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Calculadora Python Interactiva
                </h2>
              </div>
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 text-green-400 font-mono text-sm">
                <div className="flex items-center mb-4">
                  <span className="text-blue-400">Python 3.11.0 |</span>
                  <span className="ml-2">Calculadora interactiva</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400">---</span>
                  <input
                    type="text"
                    value={calcInput}
                    onChange={(e) => setCalcInput(e.target.value)}
                    className="bg-transparent border-none outline-none text-green-400 ml-2 flex-1"
                    placeholder="Escribe una operación (ej: 2 + 3 * 4)"
                    onKeyPress={(e) => e.key === 'Enter' && executeCalculation()}
                  />
                  <button
                    onClick={executeCalculation}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs ml-2"
                  >
                    <Play size={12} />
                  </button>
                </div>
                {calcResult && (
                  <div className="whitespace-pre-wrap text-green-300">
                    {calcResult}
                  </div>
                )}
                <div className="text-slate-400 text-xs mt-4">
                  Prueba: 2**3, 10//3, 15%4, round(3.14159, 2)
                </div>
              </div>
            </div>

            {/* Laboratorio */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Code className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Laboratorio 10: Aplicación con Python
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Gestor de Tareas en Python
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Desarrollé una aplicación completa de gestión de tareas que demuestra todos los conceptos aprendidos:
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="python" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`# task_manager.py - Aplicación completa
import json
from datetime import datetime
from typing import List, Dict, Optional

class Tarea:
    def __init__(self, titulo: str, descripcion: str = "", prioridad: str = "media"):
        self.id = id(self)
        self.titulo = titulo
        self.descripcion = descripcion
        self.prioridad = prioridad
        self.completada = False
        self.fecha_creacion = datetime.now().isoformat()
        self.fecha_vencimiento = None
    
    def marcar_completada(self):
        self.completada = True
        return f"Tarea '{self.titulo}' marcada como completada"
    
    def to_dict(self) -> Dict:
        return {
            'id': self.id,
            'titulo': self.titulo,
            'descripcion': self.descripcion,
            'prioridad': self.prioridad,
            'completada': self.completada,
            'fecha_creacion': self.fecha_creacion
        }

class GestorTareas:
    def __init__(self):
        self.tareas: List[Tarea] = []
        self.archivo_datos = "tareas.json"
        self.cargar_tareas()
    
    def crear_tarea(self, titulo: str, descripcion: str = "", prioridad: str = "media"):
        if not titulo.strip():
            raise ValueError("El título no puede estar vacío")
        
        tarea = Tarea(titulo, descripcion, prioridad)
        self.tareas.append(tarea)
        self.guardar_tareas()
        return f"Tarea '{titulo}' creada exitosamente"
    
    def listar_tareas(self, solo_pendientes: bool = False) -> List[Tarea]:
        if solo_pendientes:
            return [t for t in self.tareas if not t.completada]
        return self.tareas
    
    def buscar_tarea(self, termino: str) -> List[Tarea]:
        return [t for t in self.tareas 
                if termino.lower() in t.titulo.lower() 
                or termino.lower() in t.descripcion.lower()]
    
    def completar_tarea(self, tarea_id: int) -> str:
        for tarea in self.tareas:
            if tarea.id == tarea_id:
                return tarea.marcar_completada()
        raise ValueError("Tarea no encontrada")
    
    def eliminar_tarea(self, tarea_id: int) -> str:
        for i, tarea in enumerate(self.tareas):
            if tarea.id == tarea_id:
                titulo = tarea.titulo
                del self.tareas[i]
                self.guardar_tareas()
                return f"Tarea '{titulo}' eliminada"
        raise ValueError("Tarea no encontrada")
    
    def guardar_tareas(self):
        try:
            with open(self.archivo_datos, 'w') as f:
                datos = [tarea.to_dict() for tarea in self.tareas]
                json.dump(datos, f, indent=2)
        except IOError as e:
            print(f"Error al guardar: {e}")
    
    def cargar_tareas(self):
        try:
            with open(self.archivo_datos, 'r') as f:
                datos = json.load(f)
                for dato in datos:
                    tarea = Tarea(dato['titulo'], dato['descripcion'], dato['prioridad'])
                    tarea.completada = dato['completada']
                    self.tareas.append(tarea)
        except FileNotFoundError:
            print("Archivo de datos no encontrado. Iniciando con lista vacía.")
        except json.JSONDecodeError:
            print("Error al leer el archivo de datos.")

def main():
    gestor = GestorTareas()
    
    while True:
        print("\\n=== GESTOR DE TAREAS ===")
        print("1. Crear tarea")
        print("2. Listar todas las tareas")
        print("3. Listar tareas pendientes")
        print("4. Buscar tarea")
        print("5. Completar tarea")
        print("6. Eliminar tarea")
        print("7. Salir")
        
        try:
            opcion = input("\\nSelecciona una opción: ")
            
            if opcion == "1":
                titulo = input("Título: ")
                descripcion = input("Descripción (opcional): ")
                prioridad = input("Prioridad (alta/media/baja): ") or "media"
                print(gestor.crear_tarea(titulo, descripcion, prioridad))
            
            elif opcion == "2":
                tareas = gestor.listar_tareas()
                if tareas:
                    for tarea in tareas:
                        estado = "✓" if tarea.completada else "○"
                        print(f"{estado} [{tarea.id}] {tarea.titulo} - {tarea.prioridad}")
                else:
                    print("No hay tareas registradas")
            
            elif opcion == "7":
                print("¡Hasta luego!")
                break
                
        except ValueError as e:
            print(f"Error: {e}")
        except KeyboardInterrupt:
            print("\\n¡Hasta luego!")
            break

if __name__ == "__main__":
    main()`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Características Implementadas
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Programación Orientada a Objetos</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li>• Clases Tarea y GestorTareas</li>
                        <li>• Encapsulamiento de datos</li>
                        <li>• Métodos públicos y privados</li>
                        <li>• Type hints para mejor código</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
                      <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Manejo de Datos</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li>• Persistencia en JSON</li>
                        <li>• Listas y diccionarios</li>
                        <li>• Validación de entrada</li>
                        <li>• Manejo de excepciones</li>
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
                  Python demostró ser un lenguaje increíblemente expresivo y legible. Su filosofía de "simple es mejor que complejo" 
                  se refleja en cada aspecto del lenguaje, desde la sintaxis hasta las bibliotecas estándar. La indentación obligatoria, 
                  que al principio parecía restrictiva, resulta en código más limpio y legible.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  El sistema de POO de Python es flexible y poderoso, permitiendo herencia múltiple y polimorfismo de manera natural. 
                  Las estructuras de datos integradas (listas, tuplas, diccionarios) son versátiles y eficientes para la mayoría de casos de uso.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 mt-6">
                  Próximos Pasos
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Quiero explorar frameworks web como Django o Flask, bibliotecas para ciencia de datos como NumPy y Pandas, 
                  y herramientas de automatización. Python abre muchas puertas en áreas como inteligencia artificial, 
                  análisis de datos y desarrollo web backend.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Week10;