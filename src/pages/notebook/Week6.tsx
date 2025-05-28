import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

// Interfaces para los datos de la API  
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const Week6: React.FC = () => {
  // Estado para el laboratorio
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showOnlyFirst5, setShowOnlyFirst5] = useState<boolean>(true);

  // Efecto para cargar datos de la API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
        setError(null);
      } catch (err) {
        setError('Error al cargar los datos. Por favor, intente nuevamente.');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Filtrar posts basados en el término de búsqueda
  const filteredPosts = posts.filter((post) => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Posts a mostrar basados en el filtro de mostrar solo 5
  const postsToDisplay = showOnlyFirst5 ? filteredPosts.slice(0, 5) : filteredPosts;

  // Manejar cambio en el input de búsqueda
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Manejar clic en el botón de mostrar más/menos
  const handleToggleShow = () => {
    setShowOnlyFirst5(!showOnlyFirst5);
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
              Semana 6: Eventos, Renderizado y Consumo de APIs
            </h1>

            {/* Eventos y Renderizado */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                Eventos, Renderizado Condicional y Bucles en React
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Manejo de Eventos
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Los eventos en React son similares a los eventos del DOM, pero con algunas diferencias sintácticas. 
                    Se nombran usando camelCase (onClick en lugar de onclick) y se pasan funciones como manejadores de eventos 
                    en lugar de strings. Los eventos más comunes incluyen onClick, onChange, onSubmit, onMouseOver, entre otros.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-3 overflow-x-auto">
                    <pre className="text-slate-800 dark:text-slate-200 text-sm">
                      <code>{`// Manejo de eventos en React
function Counter() {
  const [count, setCount] = useState(0);
  
  // Función manejadora del evento
  const handleIncrement = () => {
    setCount(count + 1);
  };
  
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={handleIncrement}>Incrementar</button>
    </div>
  );
}`}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Renderizado Condicional
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    El renderizado condicional permite mostrar diferentes elementos o componentes según ciertas condiciones.
                    En React, podemos usar operadores como if, operador ternario (?:), operador lógico (&&), o
                    incluso patrones como el renderizado de rutas condicionales.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-3 overflow-x-auto">
                    <pre className="text-slate-800 dark:text-slate-200 text-sm">
                      <code>{`// Diferentes formas de renderizado condicional
function UserStatus({ isLoggedIn, username }) {
  // Usando operador ternario
  return (
    <div>
      {isLoggedIn ? (
        <p>Bienvenido, {username}</p>
      ) : (
        <p>Por favor, inicie sesión</p>
      )}
      
      {/* Usando operador lógico && */}
      {isLoggedIn && <button>Cerrar sesión</button>}
    </div>
  );
}`}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Renderizado Iterativo
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    El renderizado iterativo nos permite mostrar listas de elementos en React. Normalmente usamos 
                    el método map() para transformar arrays de datos en arrays de elementos JSX. Es importante 
                    proporcionar una key única a cada elemento para que React pueda identificarlos correctamente.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-3 overflow-x-auto">
                    <pre className="text-slate-800 dark:text-slate-200 text-sm">
                      <code>{`// Renderizado iterativo con map()
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Formularios y Routing */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                Formularios y Routing
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Formularios en React
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Los formularios en React pueden ser controlados o no controlados. En los formularios controlados, 
                    el estado del formulario se mantiene en el estado del componente, mientras que en los no controlados, 
                    se deja en el DOM. Los formularios controlados son más flexibles y permiten validación en tiempo real.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-3 overflow-x-auto">
                    <pre className="text-slate-800 dark:text-slate-200 text-sm">
                      <code>{`// Formulario controlado
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login con:', username, password);
    // Enviar datos al servidor
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Usuario:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}`}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Routing en React
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    El routing en aplicaciones React permite navegar entre diferentes "páginas" sin recargar la aplicación completa.
                    React Router es la biblioteca más popular para implementar routing en aplicaciones React. Permite 
                    definir rutas, navegar entre ellas, y manejar parámetros en la URL.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-3 overflow-x-auto">
                    <pre className="text-slate-800 dark:text-slate-200 text-sm">
                      <code>{`// Configuración básica de React Router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Consumo de APIs */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                Consumo de APIs
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Promesas y Async/Await
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Las promesas son objetos que representan la eventual finalización (o fallo) de una operación asíncrona.
                    Async/await es una sintaxis más moderna y limpia para trabajar con promesas, haciendo que el código 
                    asíncrono se vea y se comporte más como código síncrono.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-3 overflow-x-auto">
                    <pre className="text-slate-800 dark:text-slate-200 text-sm">
                      <code>{`// Usando promesas
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Usando async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}`}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Obteniendo Datos de una API
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    En React, normalmente obtenemos datos de APIs en el hook useEffect. Este enfoque permite 
                    cargar datos cuando el componente se monta o cuando ciertas dependencias cambian. Es importante 
                    manejar los estados de carga y error para mejorar la experiencia del usuario.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-3 overflow-x-auto">
                    <pre className="text-slate-800 dark:text-slate-200 text-sm">
                      <code>{`// Obteniendo datos en un componente React
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const response = await fetch('https://api.example.com/users');
        
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        
        const data = await response.json();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []); // Array vacío significa que se ejecuta solo al montar

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Librería Axios
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Axios es una biblioteca popular para realizar solicitudes HTTP en JavaScript. Ofrece una API 
                    más fácil de usar que fetch, soporte automático para JSON, transformación de solicitudes y 
                    respuestas, cancelación de solicitudes, y mejor manejo de errores.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mt-3 overflow-x-auto">
                    <pre className="text-slate-800 dark:text-slate-200 text-sm">
                      <code>{`// Usando Axios
import axios from 'axios';

// Configuración global
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

// Solicitud GET
axios.get('/users')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Solicitud POST
axios.post('/users', {
  name: 'Juan',
  email: 'juan@example.com'
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Usando async/await con Axios
async function getUser(id) {
  try {
    const response = await axios.get(\`/users/\${id}\`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Laboratorio 6A */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                Laboratorio 6A: Eventos y Renderizado con Datos de API
              </h2>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                En este laboratorio, he creado una pequeña aplicación que consume la API de JSONPlaceholder 
                para obtener una lista de publicaciones. La aplicación implementa eventos (búsqueda y mostrar más/menos), 
                renderizado condicional (estados de carga y error) y renderizado iterativo (lista de publicaciones).
              </p>
              
              {/* Búsqueda */}
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <input
                    type="text"
                    placeholder="Buscar publicaciones..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                  />
                </div>
                
                <button
                  onClick={handleToggleShow}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition mb-4"
                >
                  {showOnlyFirst5 ? 'Mostrar todos' : 'Mostrar solo 5'}
                </button>
              </div>
              
              {/* Renderizado condicional para estados de carga y error */}
              {loading && (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              )}
              
              {error && (
                <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 p-4 rounded-lg mb-4">
                  {error}
                </div>
              )}
              
              {/* Renderizado iterativo de publicaciones */}
              {!loading && !error && (
                <>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Mostrando {postsToDisplay.length} de {filteredPosts.length} publicaciones encontradas
                  </p>
                  
                  <div className="space-y-4">
                    {postsToDisplay.length > 0 ? (
                      postsToDisplay.map(post => (
                        <div key={post.id} className="border rounded-lg p-4 dark:border-slate-700">
                          <h3 className="font-semibold text-lg mb-2 text-slate-800 dark:text-white">
                            {post.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-300">
                            {post.body}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="text-center py-4 text-slate-600 dark:text-slate-300">
                        No se encontraron publicaciones que coincidan con la búsqueda.
                      </p>
                    )}
                  </div>
                </>
              )}
              
              {/* Explicación del código */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                  Explicación del Código
                </h3>
                <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-slate-800 dark:text-slate-200 text-sm">
                    <code>{`// Estados para gestionar datos, carga, errores y filtros
const [posts, setPosts] = useState<Post[]>([]);
const [loading, setLoading] = useState<boolean>(true);
const [error, setError] = useState<string | null>(null);
const [searchTerm, setSearchTerm] = useState<string>('');
const [showOnlyFirst5, setShowOnlyFirst5] = useState<boolean>(true);

// Efecto para cargar datos de la API
useEffect(() => {
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Post[]>(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setPosts(response.data);
      setError(null);
    } catch (err) {
      setError('Error al cargar los datos');
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  fetchPosts();
}, []);

// Filtrar posts basados en el término de búsqueda
const filteredPosts = posts.filter((post) => 
  post.title.toLowerCase().includes(searchTerm.toLowerCase())
);

// Posts a mostrar basados en el filtro de mostrar solo 5
const postsToDisplay = showOnlyFirst5 
  ? filteredPosts.slice(0, 5) 
  : filteredPosts;

// Manejador de evento para el cambio en la búsqueda
const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSearchTerm(e.target.value);
};

// Manejador de evento para el botón de mostrar más/menos
const handleToggleShow = () => {
  setShowOnlyFirst5(!showOnlyFirst5);
};`}</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Reflexión */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                  Qué Aprendí
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Esta semana, profundicé en el manejo de eventos en React y cómo implementar patrones de renderizado condicional e iterativo. Comprendí la importancia de estos conceptos para crear interfaces dinámicas y receptivas que respondan a las acciones del usuario y a los cambios en los datos.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  También aprendí sobre el consumo de APIs en aplicaciones React, incluyendo cómo manejar estados de carga y error, y las ventajas de utilizar Axios sobre fetch para las solicitudes HTTP. La combinación de async/await con useEffect resultó ser una forma elegante y clara de manejar operaciones asíncronas.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 mt-6">
                  Cómo Aprendí
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Mi enfoque de aprendizaje incluyó la lectura de documentación oficial, seguimiento de tutoriales específicos y, lo más importante, la implementación práctica de cada concepto. El laboratorio de esta semana fue particularmente útil para integrar todos los conceptos en una aplicación funcional.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Enfrenté algunos desafíos al manejar estados asíncronos y dependencias en useEffect, pero la experimentación y depuración me ayudaron a comprender mejor estos conceptos fundamentales.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 mt-6">
                  Próximos Pasos
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  En el futuro, me gustaría explorar técnicas más avanzadas para el manejo de estado en aplicaciones React, como el uso de useReducer para lógica compleja y Context API o Redux para estado global. También estoy interesado en aprender más sobre la optimización de rendimiento en aplicaciones que consumen APIs, como la implementación de caché y estrategias de recuperación de datos.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Week6;