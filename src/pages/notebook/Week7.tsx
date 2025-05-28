import React, { useState, useEffect, useRef, useReducer, useCallback, useMemo, createContext, useContext } from 'react';
import { motion } from 'framer-motion';

// Context para demostrar useContext
const ThemeContext = createContext<{theme: string; toggleTheme: () => void}>({
  theme: 'light',
  toggleTheme: () => {}
});

// Hook personalizado de ejemplo
const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue] as const;
};

// Componente de ejemplo para useContext
const ThemedButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded-md ${
        theme === 'light'
          ? 'bg-slate-800 text-white'
          : 'bg-yellow-400 text-slate-900'
      }`}
    >
      Cambiar a tema {theme === 'light' ? 'oscuro' : 'claro'}
    </button>
  );
};

// Reducer para useReducer
type CounterState = { count: number };
type CounterAction =
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: number }
  | { type: 'reset' };

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
};

const Week7: React.FC = () => {
  // Hooks de estado para los ejemplos
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');
//   const [text, setText] = useState('');
  const [time, setTime] = useState(new Date());

  // useRef ejemplo
  const inputRef = useRef<HTMLInputElement>(null);
  const renderCount = useRef(0);

  // useReducer ejemplo
  const [counterState, dispatch] = useReducer(counterReducer, { count: 0 });

  // useEffect ejemplos
  useEffect(() => {
    document.title = `Contador: ${count}`;

    return () => {
      document.title = 'Mi Portafolio';
    };
  }, [count]);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // useCallback ejemplo
  const handleIncrement = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  // useMemo ejemplo
  const expensiveCalculation = useMemo(() => {
    console.log('Calculando...');
    return count * 2;
  }, [count]);

  // Hook personalizado ejemplo
  const [name, setName] = useLocalStorage('name', '');

  // Funciones auxiliares
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const focusInput = () => {
    inputRef.current?.focus();
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
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">
              Semana 7: Uso de Hooks en React
            </h1>

            {/* Introducción a los Hooks */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                Introducción a los Hooks
              </h2>

              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Los Hooks son funciones especiales que permiten usar características de React (como estado y ciclo de vida)
                en componentes funcionales. Fueron introducidos en React 16.8 y han revolucionado la forma de escribir
                componentes, haciendo el código más reutilizable, conciso y fácil de probar.
              </p>

              <p className="text-slate-600 dark:text-slate-300">
                Los Hooks resuelven varios problemas que existían con los componentes de clase, como la dificultad para
                reutilizar lógica entre componentes, componentes complejos difíciles de entender, y confusiones con el
                uso de this en JavaScript.
              </p>
            </div>

            {/* useState */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                useState
              </h2>

              <p className="text-slate-600 dark:text-slate-300 mb-4">
                El Hook useState permite añadir estado a los componentes funcionales. Devuelve un valor con estado y
                una función para actualizarlo.
              </p>

              <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-slate-800 dark:text-slate-200 text-sm">
                  <code>{`// Sintaxis básica
const [state, setState] = useState(initialValue);

// Ejemplo
const [count, setCount] = useState(0);

// Actualizar estado
setCount(count + 1);

// Actualizar basado en estado anterior
setCount(prevCount => prevCount + 1);`}</code>
                </pre>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                  Ejemplo Práctico: Contador Simple
                </h3>
                <div className="flex items-center space-x-4 mb-4">
                  <button
                    onClick={() => setCount(count - 1)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                  >
                    Decrementar
                  </button>
                  <span className="text-2xl font-bold text-slate-800 dark:text-white">{count}</span>
                  <button
                    onClick={() => setCount(count + 1)}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                  >
                    Incrementar
                  </button>
                </div>
                <button
                  onClick={() => setCount(0)}
                  className="px-4 py-2 bg-slate-500 text-white rounded-md hover:bg-slate-600 transition"
                >
                  Reiniciar
                </button>
              </div>

              <p className="text-slate-600 dark:text-slate-300">
                useState es útil para manejar datos que cambian en un componente, como entradas de usuario,
                toggles, contadores, y cualquier información que necesite ser actualizada en la interfaz.
              </p>
            </div>

            {/* useEffect */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                useEffect
              </h2>

              <p className="text-slate-600 dark:text-slate-300 mb-4">
                useEffect permite realizar efectos secundarios en componentes funcionales. Es similar a
                métodos de ciclo de vida como componentDidMount, componentDidUpdate y componentWillUnmount combinados.
              </p>

              <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-slate-800 dark:text-slate-200 text-sm">
                  <code>{`// Sintaxis básica
useEffect(() => {
  // Código a ejecutar después del renderizado

  // Función de limpieza (opcional)
  return () => {
    // Código de limpieza
  };
}, [dependencias]); // Array de dependencias`}</code>
                </pre>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                  Ejemplo Práctico: Reloj en Tiempo Real
                </h3>
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold text-slate-800 dark:text-white mb-2">
                    {time.toLocaleTimeString()}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Este reloj se actualiza cada segundo usando useEffect con un intervalo
                  </p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300">
                useEffect es útil para operaciones como suscripciones a datos, obtención de datos de APIs,
                manipulación manual del DOM, y cualquier operación que deba ocurrir después del renderizado o
                limpiarse cuando el componente se desmonte.
              </p>
            </div>

            {/* useContext */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                useContext
              </h2>

              <p className="text-slate-600 dark:text-slate-300 mb-4">
                useContext permite suscribirse y consumir valores de contexto en componentes funcionales,
                facilitando el paso de datos a través del árbol de componentes sin pasar props manualmente
                en cada nivel.
              </p>

              <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-slate-800 dark:text-slate-200 text-sm">
                  <code>{`// Crear un contexto
const MyContext = createContext(defaultValue);

// Proveer un valor
<MyContext.Provider value={/* algún valor */}>
  {/* componentes hijos */}
</MyContext.Provider>

// Consumir el contexto con useContext
const value = useContext(MyContext);`}</code>
                </pre>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                  Ejemplo Práctico: Tema Compartido
                </h3>
                <ThemeContext.Provider value={{ theme, toggleTheme }}>
                  <div className={`p-4 rounded-lg ${
                    theme === 'light' ? 'bg-white text-slate-800' : 'bg-slate-800 text-white'
                  }`}>
                    <p className="mb-4">Este componente y el botón comparten el estado del tema a través de Context</p>
                    <ThemedButton />
                  </div>
                </ThemeContext.Provider>
              </div>

              <p className="text-slate-600 dark:text-slate-300">
                useContext es ideal para compartir datos globales como preferencias de usuario, autenticación,
                temas, y cualquier estado que necesite ser accesible por muchos componentes a diferentes niveles.
              </p>
            </div>

            {/* useRef */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                useRef
              </h2>

              <p className="text-slate-600 dark:text-slate-300 mb-4">
                useRef devuelve un objeto mutable con una propiedad .current que persiste durante toda la vida
                del componente. Es útil para acceder a elementos DOM, almacenar valores que no causan re-renderizados,
                y guardar referencias a valores previos.
              </p>

              <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-slate-800 dark:text-slate-200 text-sm">
                  <code>{`// Sintaxis básica
const refContainer = useRef(initialValue);

// Acceder/modificar el valor
refContainer.current = newValue;

// Referenciar un elemento DOM
<input ref={inputRef} />`}</code>
                </pre>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                  Ejemplo Práctico: Focus y Conteo de Renderizados
                </h3>
                <div className="mb-4">
                  <label className="block text-slate-700 dark:text-slate-300 mb-2">
                    Campo de texto con focus:
                  </label>
                  <div className="flex space-x-2">
                    <input
                      ref={inputRef}
                      type="text"
                      className="px-3 py-2 border rounded-md dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                      placeholder="Haz clic en el botón"
                    />
                    <button
                      onClick={focusInput}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                    >
                      Focus
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-slate-700 dark:text-slate-300">
                    Este componente se ha renderizado <span className="font-bold">{renderCount.current}</span> veces.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                    (Este contador usa useRef para mantener el valor entre renderizados sin causar re-renderizados adicionales)
                  </p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300">
                useRef es útil para operaciones imperativas como manejar focus, selección de texto, reproducción de medios,
                animaciones, y mantener valores que no deberían causar re-renderizados cuando cambian.
              </p>
            </div>

            {/* useReducer */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                useReducer
              </h2>

              <p className="text-slate-600 dark:text-slate-300 mb-4">
                useReducer es una alternativa a useState para manejar estados complejos. Recibe un reducer (función que
                determina cómo se actualiza el estado) y un estado inicial, devolviendo el estado actual y una función dispatch.
              </p>

              <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-slate-800 dark:text-slate-200 text-sm">
                  <code>{`// Sintaxis básica
const [state, dispatch] = useReducer(reducer, initialState);

// Ejemplo de reducer
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}`}</code>
                </pre>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                  Ejemplo Práctico: Contador con Reducer
                </h3>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                    Contador: {counterState.count}
                  </div>
                  <div className="flex space-x-2 mb-2">
                    <button
                      onClick={() => dispatch({ type: 'decrement', payload: 1 })}
                      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                    >
                      -1
                    </button>
                    <button
                      onClick={() => dispatch({ type: 'increment', payload: 1 })}
                      className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                    >
                      +1
                    </button>
                  </div>
                  <div className="flex space-x-2 mb-4">
                    <button
                      onClick={() => dispatch({ type: 'decrement', payload: 5 })}
                      className="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition"
                    >
                      -5
                    </button>
                    <button
                      onClick={() => dispatch({ type: 'increment', payload: 5 })}
                      className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition"
                    >
                      +5
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch({ type: 'reset' })}
                    className="px-4 py-2 bg-slate-500 text-white rounded-md hover:bg-slate-600 transition"
                  >
                    Reiniciar
                  </button>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300">
                useReducer es ideal para manejar estados con lógica compleja, cuando el próximo estado depende del
                anterior, o cuando se tienen múltiples sub-valores. Es similar al patrón de Redux pero a nivel de componente.
              </p>
            </div>

            {/* useCallback y useMemo */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                useCallback y useMemo
              </h2>

              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Estos hooks de optimización ayudan a mejorar el rendimiento evitando cálculos innecesarios y
                re-renderizados en componentes.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    useCallback
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-2">
                    Devuelve una versión memorizada de una función callback que solo cambia si una de las
                    dependencias ha cambiado.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mb-4 overflow-x-auto">
                    <pre className="text-slate-800 dark:text-slate-200 text-sm">
                      <code>{`// Sintaxis básica
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b] // solo se recrea si a o b cambian
);`}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    useMemo
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-2">
                    Memoriza el resultado de una función para evitar recalcularla en cada renderizado si las
                    dependencias no han cambiado.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mb-4 overflow-x-auto">
                    <pre className="text-slate-800 dark:text-slate-200 text-sm">
                      <code>{`// Sintaxis básica
const memoizedValue = useMemo(
  () => computeExpensiveValue(a, b),
  [a, b] // solo recalcula si a o b cambian
);`}</code>
                    </pre>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                    Ejemplo Práctico: Cálculo Memorizado
                  </h3>
                  <div className="space-y-4">
                    <p className="text-slate-700 dark:text-slate-300">
                      El valor calculado actual (count × 2) es: <span className="font-bold">{expensiveCalculation}</span>
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Este valor se calcula usando useMemo y solo se recalcula cuando count cambia.
                    </p>
                    <button
                      onClick={handleIncrement}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                    >
                      Incrementar Contador (useCallback)
                    </button>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mt-4">
                Estos hooks son útiles para optimizar rendimiento en componentes que renderizan frecuentemente,
                trabajan con grandes conjuntos de datos, o realizan cálculos costosos. También son importantes
                cuando se pasan callbacks a componentes hijos optimizados.
              </p>
            </div>

            {/* Hooks personalizados */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                Hooks Personalizados
              </h2>

              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Los hooks personalizados permiten extraer lógica de componentes en funciones reutilizables.
                Son una forma de reutilizar lógica de estado sin cambiar la jerarquía de componentes.
              </p>

              <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-slate-800 dark:text-slate-200 text-sm">
                  <code>{`// Ejemplo de hook personalizado
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}`}</code>
                </pre>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                  Ejemplo Práctico: Hook de LocalStorage
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 mb-2">
                      Tu nombre (guardado en localStorage):
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                      placeholder="Escribe tu nombre"
                    />
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Este valor persiste incluso después de recargar la página gracias al hook personalizado useLocalStorage.
                  </p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300">
                Los hooks personalizados son ideales para extraer lógica común como manejo de formularios,
                autenticación, acceso a APIs, suscripciones a datos, y cualquier otra funcionalidad compartida
                entre componentes.
              </p>
            </div>

            {/* Laboratorio */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                Laboratorio 06: Uso de Hooks
              </h2>

              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Para este laboratorio, he creado una aplicación de gestión de tareas que utiliza varios hooks
                de React para implementar diferentes funcionalidades.
              </p>

              <TaskManager />
            </div>

            {/* Reflexión */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                  Qué Aprendí
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Esta semana, profundicé en el sistema de Hooks de React, comprendiendo cómo estas funciones especiales
                  han transformado el desarrollo con React. Aprendí a utilizar los hooks básicos como useState y useEffect
                  para manejar estado y efectos secundarios, así como hooks más avanzados como useContext, useReducer,
                  useCallback y useMemo para casos específicos.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Comprendí la importancia de los hooks personalizados para extraer y reutilizar lógica compleja entre
                  componentes, lo que mejora significativamente la mantenibilidad y legibilidad del código.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 mt-6">
                  Cómo Aprendí
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Mi enfoque de aprendizaje se basó en la práctica constante, implementando ejemplos específicos para
                  cada hook. Experimenté con diferentes escenarios para entender cuándo y por qué utilizar cada hook,
                  y cómo combinarlos efectivamente.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  La documentación oficial de React fue un recurso invaluable, junto con tutoriales específicos sobre
                  cada hook. El laboratorio me permitió aplicar todos estos conocimientos en un contexto realista.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 mt-6">
                  Próximos Pasos
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  A futuro, quiero profundizar en patrones avanzados con hooks, explorar bibliotecas como React Query
                  y Zustand que se basan en hooks, y desarrollar mis propios hooks personalizados más complejos para
                  resolver problemas específicos.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Componente para el Laboratorio de Gestión de Tareas

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

type TaskAction =
  | { type: 'ADD_TASK'; payload: string }
  | { type: 'TOGGLE_TASK'; payload: number }
  | { type: 'DELETE_TASK'; payload: number }
  | { type: 'CLEAR_COMPLETED' };

const TaskManager: React.FC = () => {
  // Reducer para manejar tareas
  const taskReducer = (state: Task[], action: TaskAction): Task[] => {
    switch (action.type) {
      case 'ADD_TASK':
        return [...state, {
          id: Date.now(),
          text: action.payload,
          completed: false
        }];
      case 'TOGGLE_TASK':
        return state.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        );
      case 'DELETE_TASK':
        return state.filter(task => task.id !== action.payload);
      case 'CLEAR_COMPLETED':
        return state.filter(task => !task.completed);
      default:
        return state;
    }
  };

  // Estado con useReducer
  const [tasks, dispatch] = useReducer(taskReducer, []);

  // Estado para el input
  const [taskText, setTaskText] = useState('');

  // Ref para el input
  const inputRef = useRef<HTMLInputElement>(null);

  // useEffect para focus en el input al cargar
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // useCallback para los manejadores de eventos
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim()) {
      dispatch({ type: 'ADD_TASK', payload: taskText });
      setTaskText('');
      inputRef.current?.focus();
    }
  }, [taskText]);

  const handleToggle = useCallback((id: number) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  }, []);

  const handleDelete = useCallback((id: number) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  }, []);

  const handleClearCompleted = useCallback(() => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  }, []);

  // useMemo para contadores de tareas
  const taskStats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;
    return { total, completed, pending };
  }, [tasks]);

  return (
    <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
        Gestor de Tareas con Hooks
      </h3>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex">
          <input
            ref={inputRef}
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Añadir nueva tarea..."
            className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition"
          >
            Añadir
          </button>
        </div>
      </form>

      <div className="mb-4 flex justify-between items-center">
        <div className="text-sm text-slate-600 dark:text-slate-300">
          <span className="mr-2">Total: {taskStats.total}</span>
          <span className="mr-2">Completadas: {taskStats.completed}</span>
          <span>Pendientes: {taskStats.pending}</span>
        </div>

        {taskStats.completed > 0 && (
          <button
            onClick={handleClearCompleted}
            className="text-sm text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
          >
            Borrar completadas
          </button>
        )}
      </div>

      <div className="space-y-2">
        {tasks.length === 0 ? (
          <p className="text-center py-4 text-slate-500 dark:text-slate-400">
            No hay tareas. ¡Añade una!
          </p>
        ) : (
          tasks.map(task => (
            <div
              key={task.id}
              className={`flex items-center justify-between p-3 border rounded-md ${
                task.completed
                  ? 'bg-gray-100 dark:bg-slate-700/50'
                  : 'bg-white dark:bg-slate-700'
              }`}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggle(task.id)}
                  className="mr-3 h-5 w-5 text-blue-500"
                />
                <span className={`${
                  task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-slate-800 dark:text-white'
                }`}>
                  {task.text}
                </span>
              </div>
              <button
                onClick={() => handleDelete(task.id)}
                className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
              >
                Eliminar
              </button>
            </div>
          ))
        )}
      </div>

      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-md text-sm">
        <h4 className="font-semibold text-slate-800 dark:text-white mb-2">
          Hooks utilizados en este ejemplo:
        </h4>
        <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
          <li>useReducer: para manejar el estado de las tareas con acciones</li>
          <li>useState: para el texto del input</li>
          <li>useRef: para el focus automático en el input</li>
          <li>useEffect: para aplicar el focus inicial</li>
          <li>useCallback: para optimizar las funciones manejadoras de eventos</li>
          <li>useMemo: para calcular estadísticas de tareas sin recálculos innecesarios</li>
        </ul>
      </div>
    </div>
  );
};

export default Week7;