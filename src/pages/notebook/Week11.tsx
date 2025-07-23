import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Code, Database, Globe, Lightbulb, Settings } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useTheme } from '../../context/ThemeContext';
import vscDarkPlus from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';
import vs from 'react-syntax-highlighter/dist/cjs/styles/prism/vs';

const Week11: React.FC = () => {
  const { theme } = useTheme();
  const codeStyle = theme === 'dark' ? vscDarkPlus : vs;

  // Estado para mostrar diferentes ejemplos
  const [activeExample, setActiveExample] = useState('mvc');

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
              Semana 11: Introducción a Django
            </h1>

            {/* Introducción */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <BookOpen className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  ¿Qué es Django?
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600 dark:text-slate-300">
                  Django es un framework web de alto nivel para Python que fomenta el desarrollo rápido y un diseño limpio y pragmático. 
                  Fue creado para manejar aplicaciones web complejas con plazos ajustados, siguiendo el principio DRY (Don't Repeat Yourself).
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Rápido</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      Diseñado para llevar aplicaciones desde el concepto hasta la finalización lo más rápido posible.
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Seguro</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      Ayuda a los desarrolladores a evitar errores de seguridad comunes.
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Escalable</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      Puede escalar rápidamente para satisfacer las demandas de tráfico más altas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Patrones MVC y MTV */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Settings className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Patrón de Arquitectura MVC vs MTV
                </h2>
              </div>
              <div className="space-y-6">
                <div className="flex justify-center mb-6">
                  <div className="flex bg-slate-100 dark:bg-slate-700 rounded-lg p-1">
                    <button
                      onClick={() => setActiveExample('mvc')}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeExample === 'mvc'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                      }`}
                    >
                      Patrón MVC
                    </button>
                    <button
                      onClick={() => setActiveExample('mtv')}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeExample === 'mtv'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                      }`}
                    >
                      Patrón MTV (Django)
                    </button>
                  </div>
                </div>

                {activeExample === 'mvc' ? (
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                      Patrón MVC (Model-View-Controller)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Model</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          Maneja los datos y la lógica de negocio. Se comunica con la base de datos.
                        </p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">View</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          Presenta los datos al usuario. La interfaz de usuario.
                        </p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Controller</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          Maneja las solicitudes del usuario y coordina Model y View.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                      Patrón MTV (Model-Template-View) en Django
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Model</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          Define la estructura de datos y se comunica con la base de datos.
                        </p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Template</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          Define cómo se presentan los datos (HTML con sintaxis Django).
                        </p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">View</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          Contiene la lógica de negocio y conecta Models con Templates.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        <strong>Diferencia clave:</strong> En Django, el "Controller" de MVC está integrado en el framework mismo (URLconf + View), 
                        mientras que lo que Django llama "View" combina aspectos del Controller y Model tradicional.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Instalación y Configuración */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Settings className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Instalación y Configuración
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Instalación de Django
                  </h3>
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
                      {`# Crear entorno virtual
python -m venv mi_entorno
source mi_entorno/bin/activate  # Linux/Mac
# mi_entorno\\Scripts\\activate  # Windows

# Instalar Django
pip install django

# Verificar instalación
python -m django --version

# Crear proyecto
django-admin startproject mi_proyecto
cd mi_proyecto

# Crear aplicación
python manage.py startapp mi_app

# Ejecutar servidor de desarrollo
python manage.py runserver`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Estructura de Proyecto Django
                  </h3>
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
                      {`mi_proyecto/
├── manage.py              # Utilidad de línea de comandos
├── mi_proyecto/           # Paquete del proyecto
│   ├── __init__.py
│   ├── settings.py        # Configuración del proyecto
│   ├── urls.py           # Configuración de URLs principales
│   ├── wsgi.py           # Configuración WSGI
│   └── asgi.py           # Configuración ASGI
└── mi_app/               # Aplicación Django
    ├── __init__.py
    ├── admin.py          # Configuración del admin
    ├── apps.py           # Configuración de la app
    ├── models.py         # Modelos de datos
    ├── views.py          # Vistas
    ├── urls.py           # URLs de la aplicación
    ├── tests.py          # Tests
    └── migrations/       # Migraciones de BD
        └── __init__.py`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Integración con Apache
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Para producción, Django se puede integrar con Apache usando mod_wsgi:
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                    <SyntaxHighlighter 
                      language="apache" 
                      style={codeStyle}
                      customStyle={{
                        borderRadius: '0.375rem',
                        margin: 0,
                        fontSize: '0.875rem'
                      }}
                    >
                      {`# Configuración Apache Virtual Host
<VirtualHost *:80>
    ServerName mi-sitio.com
    DocumentRoot /path/to/mi_proyecto
    
    WSGIDaemonProcess mi_proyecto python-path=/path/to/mi_proyecto
    WSGIProcessGroup mi_proyecto
    WSGIScriptAlias / /path/to/mi_proyecto/mi_proyecto/wsgi.py
    
    <Directory /path/to/mi_proyecto/mi_proyecto>
        <Files wsgi.py>
            Require all granted
        </Files>
    </Directory>
    
    Alias /static /path/to/mi_proyecto/static
    <Directory /path/to/mi_proyecto/static>
        Require all granted
    </Directory>
</VirtualHost>`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>

            {/* URLs, Vistas y Plantillas */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Globe className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  URLs, Vistas y Plantillas
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Configuración de URLs
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Django usa un sistema de URL patterns para dirigir las solicitudes a las vistas apropiadas:
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
                      {`# mi_proyecto/urls.py (URLs principales)
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('mi_app.urls')),
    path('blog/', include('mi_app.urls')),
]

# mi_app/urls.py (URLs de la aplicación)
from django.urls import path
from . import views

app_name = 'mi_app'
urlpatterns = [
    path('', views.index, name='index'),
    path('post/<int:post_id>/', views.detalle_post, name='detalle'),
    path('crear/', views.crear_post, name='crear'),
    path('categoria/<slug:categoria>/', views.por_categoria, name='categoria'),
]`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                      Vistas Basadas en Funciones
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
                        {`# views.py
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Post

def index(request):
    posts = Post.objects.all()
    context = {'posts': posts}
    return render(request, 'blog/index.html', context)

def detalle_post(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    return render(request, 'blog/detalle.html', {
        'post': post
    })

def crear_post(request):
    if request.method == 'POST':
        # Procesar formulario
        pass
    return render(request, 'blog/crear.html')`}
                      </SyntaxHighlighter>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                      Vistas Basadas en Clases
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
                        {`# views.py
from django.views.generic import ListView, DetailView, CreateView
from .models import Post

class PostListView(ListView):
    model = Post
    template_name = 'blog/index.html'
    context_object_name = 'posts'
    paginate_by = 10

class PostDetailView(DetailView):
    model = Post
    template_name = 'blog/detalle.html'

class PostCreateView(CreateView):
    model = Post
    template_name = 'blog/crear.html'
    fields = ['titulo', 'contenido', 'categoria']
    success_url = '/blog/'`}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Sistema de Plantillas Django
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Django tiene su propio sistema de plantillas con herencia, bloques, etiquetas y filtros:
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Plantilla Base (base.html)</h4>
                      <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                        <SyntaxHighlighter 
                          language="html" 
                          style={codeStyle}
                          customStyle={{
                            borderRadius: '0.375rem',
                            margin: 0,
                            fontSize: '0.75rem'
                          }}
                        >
                          {`<!-- templates/base.html -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>{% block title %}Mi Blog{% endblock %}</title>
    {% load static %}
    <link rel="stylesheet" href="{% static 'css/style.css' %}">
</head>
<body>
    <header>
        <nav>
            <a href="{% url 'mi_app:index' %}">Inicio</a>
            <a href="{% url 'mi_app:crear' %}">Crear Post</a>
        </nav>
    </header>
    
    <main>
        {% block content %}
        {% endblock %}
    </main>
    
    <footer>
        <p>&copy; 2024 Mi Blog</p>
    </footer>
</body>
</html>`}
                        </SyntaxHighlighter>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Plantilla Específica (index.html)</h4>
                      <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                        <SyntaxHighlighter 
                          language="html" 
                          style={codeStyle}
                          customStyle={{
                            borderRadius: '0.375rem',
                            margin: 0,
                            fontSize: '0.75rem'
                          }}
                        >
                          {`<!-- templates/blog/index.html -->
{% extends 'base.html' %}

{% block title %}Blog - Lista de Posts{% endblock %}

{% block content %}
<h1>Posts Recientes</h1>

{% if posts %}
    {% for post in posts %}
    <article>
        <h2>
            <a href="{% url 'mi_app:detalle' post.id %}">
                {{ post.titulo }}
            </a>
        </h2>
        <p class="meta">
            Por {{ post.autor.username }} el {{ post.fecha_creacion|date:"d M Y" }}
        </p>
        <p>{{ post.contenido|truncatewords:30 }}</p>
        
        {% if post.categoria %}
        <span class="categoria">{{ post.categoria|title }}</span>
        {% endif %}
    </article>
    {% endfor %}
    
    <!-- Paginación -->
    {% if is_paginated %}
    <div class="pagination">
        {% if page_obj.has_previous %}
        <a href="?page={{ page_obj.previous_page_number }}">&laquo; Anterior</a>
        {% endif %}
        
        <span>Página {{ page_obj.number }} de {{ page_obj.paginator.num_pages }}</span>
        
        {% if page_obj.has_next %}
        <a href="?page={{ page_obj.next_page_number }}">Siguiente &raquo;</a>
        {% endif %}
    </div>
    {% endif %}
{% else %}
    <p>No hay posts disponibles.</p>
{% endif %}
{% endblock %}`}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Etiquetas y Filtros Comunes</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-medium text-slate-700 dark:text-slate-200 mb-1">Etiquetas:</h5>
                        <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                          <li>• <code>{`{% if %}`}</code> - Condicionales</li>
                          <li>• <code>{`{% for %}`}</code> - Bucles</li>
                          <li>• <code>{`{% url %}`}</code> - URLs reversas</li>
                          <li>• <code>{`{% static %}`}</code> - Archivos estáticos</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-700 dark:text-slate-200 mb-1">Filtros:</h5>
                        <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                          <li>• <code>|date</code> - Formatear fechas</li>
                          <li>• <code>|truncatewords</code> - Limitar palabras</li>
                          <li>• <code>|title</code> - Capitalizar</li>
                          <li>• <code>|length</code> - Longitud</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modelos y Base de Datos */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Database className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Modelos y API de Base de Datos
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Definición de Modelos
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Los modelos en Django definen la estructura de los datos y proporcionan una API Python para interactuar con la base de datos:
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
                      {`# models.py
from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse

class Categoria(models.Model):
    nombre = models.CharField(max_length=100, unique=True)
    descripcion = models.TextField(blank=True)
    slug = models.SlugField(unique=True)
    activa = models.BooleanField(default=True)
    
    class Meta:
        verbose_name = "Categoría"
        verbose_name_plural = "Categorías"
        ordering = ['nombre']
    
    def __str__(self):
        return self.nombre

class Post(models.Model):
    ESTADO_CHOICES = [
        ('borrador', 'Borrador'),
        ('publicado', 'Publicado'),
        ('archivado', 'Archivado'),
    ]
    
    titulo = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    autor = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    categoria = models.ForeignKey(Categoria, on_delete=models.SET_NULL, null=True, blank=True)
    contenido = models.TextField()
    resumen = models.CharField(max_length=300, blank=True)
    imagen = models.ImageField(upload_to='posts/', blank=True, null=True)
    estado = models.CharField(max_length=10, choices=ESTADO_CHOICES, default='borrador')
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_modificacion = models.DateTimeField(auto_now=True)
    publicado_en = models.DateTimeField(null=True, blank=True)
    vistas = models.PositiveIntegerField(default=0)
    tags = models.ManyToManyField('Tag', blank=True)
    
    class Meta:
        ordering = ['-fecha_creacion']
        indexes = [
            models.Index(fields=['estado', 'publicado_en']),
        ]
    
    def __str__(self):
        return self.titulo
    
    def get_absolute_url(self):
        return reverse('mi_app:detalle', kwargs={'post_id': self.pk})

class Tag(models.Model):
    nombre = models.CharField(max_length=50, unique=True)
    color = models.CharField(max_length=7, default='#007bff')  # Hex color
    
    def __str__(self):
        return self.nombre

class Comentario(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comentarios')
    autor = models.CharField(max_length=100)
    email = models.EmailField()
    contenido = models.TextField()
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    aprobado = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['fecha_creacion']
    
    def __str__(self):
        return f'Comentario de {self.autor} en {self.post.titulo}'`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Tipos de Campos Principales
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Campos de Texto</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li>• <code>CharField</code> - Texto corto (max_length)</li>
                        <li>• <code>TextField</code> - Texto largo</li>
                        <li>• <code>EmailField</code> - Email válido</li>
                        <li>• <code>URLField</code> - URL válida</li>
                        <li>• <code>SlugField</code> - URL-friendly text</li>
                      </ul>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Campos Numéricos</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li>• <code>IntegerField</code> - Números enteros</li>
                        <li>• <code>FloatField</code> - Números decimales</li>
                        <li>• <code>DecimalField</code> - Decimales precisos</li>
                        <li>• <code>PositiveIntegerField</code> - Enteros positivos</li>
                        <li>• <code>BigIntegerField</code> - Enteros grandes</li>
                      </ul>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Campos de Fecha/Hora</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li>• <code>DateField</code> - Solo fecha</li>
                        <li>• <code>TimeField</code> - Solo hora</li>
                        <li>• <code>DateTimeField</code> - Fecha y hora</li>
                        <li>• <code>DurationField</code> - Duración</li>
                      </ul>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Campos Relacionales</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li>• <code>ForeignKey</code> - Relación uno a muchos</li>
                        <li>• <code>ManyToManyField</code> - Relación muchos a muchos</li>
                        <li>• <code>OneToOneField</code> - Relación uno a uno</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Consultas a la Base de Datos (ORM)
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
                      {`# Consultas básicas
# Obtener todos los posts
posts = Post.objects.all()

# Filtrar posts publicados
posts_publicados = Post.objects.filter(estado='publicado')

# Obtener un post específico
post = Post.objects.get(pk=1)
post = Post.objects.get(slug='mi-primer-post')

# Filtros complejos
posts_recientes = Post.objects.filter(
    estado='publicado',
    fecha_creacion__gte=timezone.now() - timedelta(days=7)
)

# Búsqueda de texto
posts_busqueda = Post.objects.filter(
    titulo__icontains='django',
    contenido__icontains='tutorial'
)

# Ordenamiento
posts_ordenados = Post.objects.order_by('-fecha_creacion', 'titulo')

# Relaciones (joins)
posts_con_categoria = Post.objects.select_related('categoria', 'autor')
posts_con_tags = Post.objects.prefetch_related('tags')

# Agregaciones
from django.db.models import Count, Avg
stats = Post.objects.aggregate(
    total_posts=Count('id'),
    promedio_vistas=Avg('vistas')
)

# Consultas complejas con Q objects
from django.db.models import Q
posts_complejos = Post.objects.filter(
    Q(titulo__icontains='python') | Q(titulo__icontains='django'),
    estado='publicado'
)

# Crear objetos
nuevo_post = Post.objects.create(
    titulo='Mi nuevo post',
    contenido='Contenido del post...',
    autor=request.user,
    estado='publicado'
)

# Actualizar objetos
Post.objects.filter(autor=usuario).update(estado='archivado')

# Eliminar objetos
Post.objects.filter(fecha_creacion__lt=fecha_limite).delete()`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Migraciones
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Las migraciones permiten versionar y aplicar cambios en la estructura de la base de datos:
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
                      {`# Crear migraciones después de cambios en models.py
python manage.py makemigrations

# Aplicar migraciones a la base de datos
python manage.py migrate

# Ver migraciones pendientes
python manage.py showmigrations

# Migración específica
python manage.py migrate mi_app 0002

# Revertir migración
python manage.py migrate mi_app 0001

# Crear migración vacía para datos
python manage.py makemigrations --empty mi_app

# Ver SQL de una migración
python manage.py sqlmigrate mi_app 0001`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>

            {/* Laboratorio */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Code className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Laboratorio 11: Desarrollo de Vistas, Plantillas y Modelos
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Sistema de Blog Completo
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Para este laboratorio desarrollé un sistema de blog completo que implementa todos los conceptos de Django aprendidos:
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6">
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Características Implementadas</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                        <li>• <strong>Modelos:</strong> Post, Categoria, Tag, Comentario</li>
                        <li>• <strong>Vistas:</strong> Lista, detalle, crear, editar posts</li>
                        <li>• <strong>Plantillas:</strong> Sistema de herencia y bloques</li>
                        <li>• <strong>URLs:</strong> Configuración completa con nombres</li>
                      </ul>
                      <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                        <li>• <strong>Admin:</strong> Panel de administración personalizado</li>
                        <li>• <strong>Formularios:</strong> Creación y edición de contenido</li>
                        <li>• <strong>Filtrado:</strong> Por categoría, fecha, autor</li>
                        <li>• <strong>Paginación:</strong> Lista de posts paginada</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Configuración del Panel de Administración
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
                      {`# admin.py
from django.contrib import admin
from .models import Post, Categoria, Tag, Comentario

@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'activa', 'slug']
    list_filter = ['activa']
    search_fields = ['nombre']
    prepopulated_fields = {'slug': ('nombre',)}

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['titulo', 'autor', 'categoria', 'estado', 'fecha_creacion', 'vistas']
    list_filter = ['estado', 'categoria', 'fecha_creacion', 'autor']
    search_fields = ['titulo', 'contenido']
    prepopulated_fields = {'slug': ('titulo',)}
    raw_id_fields = ['autor']
    date_hierarchy = 'fecha_creacion'
    ordering = ['-fecha_creacion']
    
    fieldsets = (
        ('Información básica', {
            'fields': ('titulo', 'slug', 'autor', 'categoria')
        }),
        ('Contenido', {
            'fields': ('resumen', 'contenido', 'imagen')
        }),
        ('Metadatos', {
            'fields': ('estado', 'tags', 'publicado_en'),
            'classes': ('collapse',)
        }),
    )

@admin.register(Comentario)
class ComentarioAdmin(admin.ModelAdmin):
    list_display = ['autor', 'post', 'fecha_creacion', 'aprobado']
    list_filter = ['aprobado', 'fecha_creacion']
    search_fields = ['autor', 'email', 'contenido']
    actions = ['aprobar_comentarios']
    
    def aprobar_comentarios(self, request, queryset):
        queryset.update(aprobado=True)
    aprobar_comentarios.short_description = "Aprobar comentarios seleccionados"

admin.site.register(Tag)`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Resultados del Laboratorio
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
                      <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Funcionalidades Completadas</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li>✅ Modelos con relaciones complejas</li>
                        <li>✅ Vistas basadas en clases y funciones</li>
                        <li>✅ Sistema de plantillas con herencia</li>
                        <li>✅ Panel de administración completo</li>
                        <li>✅ URLs organizadas y con nombres</li>
                        <li>✅ Migraciones aplicadas correctamente</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Conceptos Aplicados</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li>✅ Patrón MTV de Django</li>
                        <li>✅ ORM para consultas de BD</li>
                        <li>✅ Filtros y etiquetas de plantillas</li>
                        <li>✅ Relaciones ForeignKey y ManyToMany</li>
                        <li>✅ Configuración de URLs anidadas</li>
                        <li>✅ Personalización del admin</li>
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
                  Django demostró ser un framework increíblemente potente y bien estructurado. Su filosofía de "baterías incluidas" 
                  significa que viene con todo lo necesario para crear aplicaciones web robustas sin necesidad de bibliotecas externas. 
                  El patrón MTV proporciona una separación clara de responsabilidades que hace el código más mantenible.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  El ORM de Django es particularmente impresionante, permitiendo trabajar con bases de datos usando Python puro 
                  sin escribir SQL. El sistema de migraciones hace que los cambios en la estructura de datos sean seguros y versionados. 
                  El panel de administración automático es una característica única que acelera enormemente el desarrollo.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 mt-6">
                  Próximos Pasos
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Quiero profundizar en Django REST Framework para crear APIs, explorar el sistema de autenticación y permisos, 
                  y aprender sobre el deployment en producción. También me interesa estudiar las vistas basadas en clases genéricas 
                  y el sistema de formularios avanzado de Django.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Week11;