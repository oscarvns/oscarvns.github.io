import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Code, Database, Globe, Lightbulb, Settings, Zap, Shield } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useTheme } from '../../context/ThemeContext';
import vscDarkPlus from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';
import vs from 'react-syntax-highlighter/dist/cjs/styles/prism/vs';

const Week13: React.FC = () => {
  const { theme } = useTheme();
  const codeStyle = theme === 'dark' ? vscDarkPlus : vs;
  const [activeSection, setActiveSection] = useState('rest');

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
              Semana 13: Diseño de APIs RESTful
            </h1>

            {/* Navegación */}
            <div className="flex justify-center mb-8">
              <div className="flex bg-slate-100 dark:bg-slate-700 rounded-lg p-1">
                <button
                  onClick={() => setActiveSection('rest')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === 'rest'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  REST & HATEOAS
                </button>
                <button
                  onClick={() => setActiveSection('serialization')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === 'serialization'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  Serialización
                </button>
                <button
                  onClick={() => setActiveSection('advanced')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === 'advanced'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  Funciones Avanzadas
                </button>
              </div>
            </div>

            {/* REST & HATEOAS */}
            {activeSection === 'rest' && (
              <div className="space-y-8">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8">
                  <div className="flex items-center mb-6">
                    <Globe className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                      Introducción a REST y HATEOAS
                    </h2>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        Principios REST
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Stateless</h4>
                          <p className="text-slate-600 dark:text-slate-300 text-sm">
                            Cada request contiene toda la información necesaria
                          </p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Uniform Interface</h4>
                          <p className="text-slate-600 dark:text-slate-300 text-sm">
                            Uso consistente de HTTP methods y URLs
                          </p>
                        </div>
                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Client-Server</h4>
                          <p className="text-slate-600 dark:text-slate-300 text-sm">
                            Separación clara entre frontend y backend
                          </p>
                        </div>
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Cacheable</h4>
                          <p className="text-slate-600 dark:text-slate-300 text-sm">
                            Responses pueden ser cacheadas para eficiencia
                          </p>
                        </div>
                      </div>

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
                          {`# Django REST Framework setup
# settings.py
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'django_filters',
    'mi_app',
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticatedOrReadOnly',
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 20,
    'DEFAULT_FILTER_BACKENDS': [
        'django_filters.rest_framework.DjangoFilterBackend',
        'rest_framework.filters.SearchFilter',
        'rest_framework.filters.OrderingFilter',
    ],
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.AnonRateThrottle',
        'rest_framework.throttling.UserRateThrottle'
    ],
    'DEFAULT_THROTTLE_RATES': {
        'anon': '100/hour',
        'user': '1000/hour'
    }
}`}
                        </SyntaxHighlighter>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        HATEOAS (Hypermedia as the Engine of Application State)
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        HATEOAS permite que la API sea auto-descriptiva incluyendo links a acciones relacionadas.
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
                          {`// Respuesta con HATEOAS
{
  "id": 1,
  "titulo": "Mi primer post",
  "contenido": "Contenido del post...",
  "autor": "usuario1",
  "fecha_creacion": "2024-01-15T10:30:00Z",
  "_links": {
    "self": {
      "href": "/api/posts/1/"
    },
    "edit": {
      "href": "/api/posts/1/",
      "method": "PUT"
    },
    "delete": {
      "href": "/api/posts/1/",
      "method": "DELETE"
    },
    "comments": {
      "href": "/api/posts/1/comments/"
    },
    "author": {
      "href": "/api/users/1/"
    }
  }
}`}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Serialización */}
            {activeSection === 'serialization' && (
              <div className="space-y-8">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8">
                  <div className="flex items-center mb-6">
                    <Database className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                      Serialización de Modelos y Datos
                    </h2>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        Serializers Básicos
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
                          {`# serializers.py
from rest_framework import serializers
from .models import Post, Categoria, Comentario, User

class CategoriaSerializer(serializers.ModelSerializer):
    posts_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Categoria
        fields = ['id', 'nombre', 'descripcion', 'slug', 'posts_count']
    
    def get_posts_count(self, obj):
        return obj.posts.filter(estado='publicado').count()

class AuthorSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()
    
    class Meta:
        model = User
        fields = ['id', 'username', 'full_name', 'email']
    
    def get_full_name(self, obj):
        return f"{obj.first_name} {obj.last_name}".strip()

class PostSerializer(serializers.ModelSerializer):
    autor = AuthorSerializer(read_only=True)
    categoria = CategoriaSerializer(read_only=True)
    comentarios_count = serializers.SerializerMethodField()
    is_owner = serializers.SerializerMethodField()
    
    class Meta:
        model = Post
        fields = [
            'id', 'titulo', 'slug', 'contenido', 'resumen',
            'autor', 'categoria', 'estado', 'fecha_creacion',
            'vistas', 'comentarios_count', 'is_owner'
        ]
        read_only_fields = ['slug', 'fecha_creacion', 'vistas']
    
    def get_comentarios_count(self, obj):
        return obj.comentarios.filter(aprobado=True).count()
    
    def get_is_owner(self, obj):
        request = self.context.get('request')
        return request and request.user == obj.autor
    
    def create(self, validated_data):
        request = self.context.get('request')
        validated_data['autor'] = request.user
        return super().create(validated_data)

class ComentarioSerializer(serializers.ModelSerializer):
    autor_nombre = serializers.CharField(source='autor')
    
    class Meta:
        model = Comentario
        fields = ['id', 'autor_nombre', 'contenido', 'fecha_creacion', 'aprobado']
        read_only_fields = ['fecha_creacion', 'aprobado']

# Serializer para anidamiento
class PostDetailSerializer(PostSerializer):
    comentarios = ComentarioSerializer(many=True, read_only=True)
    
    class Meta(PostSerializer.Meta):
        fields = PostSerializer.Meta.fields + ['comentarios']`}
                        </SyntaxHighlighter>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        ViewSets y Ruteadores
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
                          {`# views.py
from rest_framework import viewsets, status, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['categoria', 'estado', 'autor']
    search_fields = ['titulo', 'contenido']
    ordering_fields = ['fecha_creacion', 'titulo', 'vistas']
    ordering = ['-fecha_creacion']
    
    def get_serializer_class(self):
        if self.action == 'retrieve':
            return PostDetailSerializer
        return PostSerializer
    
    def get_queryset(self):
        queryset = Post.objects.select_related('autor', 'categoria')
        
        # Filtrar por usuario autenticado
        if self.action == 'mis_posts':
            return queryset.filter(autor=self.request.user)
        
        # Solo posts publicados para usuarios no autenticados
        if not self.request.user.is_authenticated:
            return queryset.filter(estado='publicado')
        
        return queryset
    
    @action(detail=True, methods=['post'])
    def toggle_like(self, request, pk=None):
        post = self.get_object()
        # Lógica para like/unlike
        return Response({'status': 'liked'})
    
    @action(detail=False, permission_classes=[permissions.IsAuthenticated])
    def mis_posts(self, request):
        queryset = self.get_queryset()
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

# urls.py
from rest_framework.routers import DefaultRouter
from django.urls import path, include

router = DefaultRouter()
router.register(r'posts', PostViewSet)
router.register(r'categorias', CategoriaViewSet)
router.register(r'comentarios', ComentarioViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
]`}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Funciones Avanzadas */}
            {activeSection === 'advanced' && (
              <div className="space-y-8">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8">
                  <div className="flex items-center mb-6">
                    <Zap className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                      Filtrado, Paginación y Seguridad
                    </h2>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        Paginación Personalizada
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
                          {`# pagination.py
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

class CustomPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100
    
    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'total_pages': self.page.paginator.num_pages,
            'current_page': self.page.number,
            'page_size': self.page_size,
            'results': data
        })

# throttling.py
from rest_framework.throttling import UserRateThrottle

class PostCreateThrottle(UserRateThrottle):
    scope = 'post_create'
    
class PostViewThrottle(UserRateThrottle):
    scope = 'post_view'

# settings.py
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'mi_app.pagination.CustomPagination',
    'DEFAULT_THROTTLE_RATES': {
        'post_create': '10/hour',
        'post_view': '1000/hour',
    }
}`}
                        </SyntaxHighlighter>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        AJAX, CSRF y CORS
                      </h3>
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
                          {`// Frontend JavaScript
class APIClient {
    constructor(baseURL = '/api') {
        this.baseURL = baseURL;
        this.token = localStorage.getItem('token');
    }
    
    async request(endpoint, options = {}) {
        const url = \`\${this.baseURL}\${endpoint}\`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        };
        
        // Agregar token de autenticación
        if (this.token) {
            config.headers['Authorization'] = \`Token \${this.token}\`;
        }
        
        // Manejar CSRF para POST/PUT/DELETE
        if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(config.method?.toUpperCase())) {
            const csrfToken = this.getCSRFToken();
            if (csrfToken) {
                config.headers['X-CSRFToken'] = csrfToken;
            }
        }
        
        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                throw new Error(\`HTTP error! status: \${response.status}\`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }
    
    getCSRFToken() {
        return document.querySelector('[name=csrfmiddlewaretoken]')?.value;
    }
    
    // Métodos específicos
    async getPosts(params = {}) {
        const queryString = new URLSearchParams(params).toString();
        const endpoint = queryString ? \`/posts/?\${queryString}\` : '/posts/';
        return this.request(endpoint);
    }
    
    async createPost(data) {
        return this.request('/posts/', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }
    
    async updatePost(id, data) {
        return this.request(\`/posts/\${id}/\`, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }
}

// Uso en componente React
const api = new APIClient();

function PostsList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        loadPosts();
    }, []);
    
    async function loadPosts() {
        setLoading(true);
        try {
            const data = await api.getPosts({
                page: 1,
                search: 'django',
                ordering: '-fecha_creacion'
            });
            setPosts(data.results);
        } catch (error) {
            console.error('Error loading posts:', error);
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <div>
            {loading ? (
                <div>Cargando...</div>
            ) : (
                posts.map(post => (
                    <div key={post.id}>
                        <h3>{post.titulo}</h3>
                        <p>{post.resumen}</p>
                    </div>
                ))
            )}
        </div>
    );
}`}
                        </SyntaxHighlighter>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        Configuración CORS
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
                          {`# settings.py
INSTALLED_APPS = [
    # ...
    'corsheaders',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    # ...
]

# Configuración CORS
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://miapp.com",
]

CORS_ALLOW_CREDENTIALS = True

CORS_ALLOW_HEADERS = [
    'accept',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
]

# Para desarrollo (NO usar en producción)
# CORS_ALLOW_ALL_ORIGINS = True`}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Laboratorio */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Code className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Laboratorio 13: API RESTful Completa
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Sistema de Blog con API REST
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Desarrollé una API RESTful completa para el sistema de blog con todas las funcionalidades modernas.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6">
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Endpoints Implementados</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                        <li>• <strong>GET /api/posts/</strong> - Lista paginada de posts</li>
                        <li>• <strong>POST /api/posts/</strong> - Crear nuevo post</li>
                        <li>• <strong>GET /api/posts/{'{id}'}/</strong> - Detalle de post</li>
                        <li>• <strong>PUT/PATCH /api/posts/{'{id}'}/</strong> - Actualizar post</li>
                      </ul>
                      <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                        <li>• <strong>DELETE /api/posts/{'{id}'}/</strong> - Eliminar post</li>
                        <li>• <strong>GET /api/categorias/</strong> - Lista de categorías</li>
                        <li>• <strong>POST /api/posts/{'{id}'}/like/</strong> - Toggle like</li>
                        <li>• <strong>GET /api/posts/mis-posts/</strong> - Posts del usuario</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Funcionalidades Avanzadas
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
                      <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Autenticación</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li>✅ Token authentication</li>
                        <li>✅ Permisos granulares</li>
                        <li>✅ Rate limiting</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Filtrado</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li>✅ Filtros por categoría</li>
                        <li>✅ Búsqueda de texto</li>
                        <li>✅ Ordenamiento múltiple</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Seguridad</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li>✅ CORS configurado</li>
                        <li>✅ CSRF protection</li>
                        <li>✅ Validación de datos</li>
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
                  Django REST Framework es increíblemente potente para crear APIs modernas. La facilidad para implementar 
                  serialización, paginación, filtrado y autenticación es impresionante. Los ViewSets proporcionan una 
                  estructura elegante que sigue las convenciones REST automáticamente.
                </p>
                
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 mt-6">
                  Próximos Pasos
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Quiero explorar WebSockets con Django Channels, implementar GraphQL, y estudiar microservicios 
                  con Docker. También me interesa profundizar en testing de APIs y documentación automática con Swagger.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Week13;