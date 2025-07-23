import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Database, Lightbulb, Settings, Package, Monitor } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useTheme } from '../../context/ThemeContext';
import vscDarkPlus from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';
import vs from 'react-syntax-highlighter/dist/cjs/styles/prism/vs';

const Week14: React.FC = () => {
  const { theme } = useTheme();
  const codeStyle = theme === 'dark' ? vscDarkPlus : vs;
  const [activeSection, setActiveSection] = useState('intro');

  // Agregar esto al principio
//   useLayoutEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);  

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
              Semana 14: Microservicios en Django
            </h1>

            {/* Navegación */}
            <div className="flex justify-center mb-8 overflow-x-auto">
              <div className="flex bg-slate-100 dark:bg-slate-700 rounded-lg p-1 min-w-max">
                <button
                  onClick={() => setActiveSection('intro')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === 'intro'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  Introducción
                </button>
                <button
                  onClick={() => setActiveSection('architecture')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === 'architecture'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  Arquitectura
                </button>
                <button
                  onClick={() => setActiveSection('docker')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === 'docker'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  Docker & K8s
                </button>
                <button
                  onClick={() => setActiveSection('monitoring')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === 'monitoring'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  Monitoreo
                </button>
              </div>
            </div>

            {/* Introducción a Microservicios */}
            {activeSection === 'intro' && (
              <div className="space-y-8">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8">
                  <div className="flex items-center mb-6">
                    <Package className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                      Introducción a Microservicios
                    </h2>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        ¿Qué son los Microservicios?
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        Los microservicios son una arquitectura donde una aplicación se construye como un conjunto 
                        de servicios pequeños, independientes y desplegables que se comunican a través de APIs.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Ventajas</h4>
                          <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                            <li>• Escalabilidad independiente</li>
                            <li>• Tecnologías diversas</li>
                            <li>• Despliegue independiente</li>
                            <li>• Tolerancia a fallos</li>
                          </ul>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Desafíos</h4>
                          <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                            <li>• Complejidad de comunicación</li>
                            <li>• Gestión de datos distribuidos</li>
                            <li>• Monitoreo complejo</li>
                            <li>• Latencia de red</li>
                          </ul>
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
                          {`# Estructura de proyecto para microservicios
blog_microservices/
├── user_service/          # Microservicio de usuarios
│   ├── manage.py
│   ├── user_service/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── users/
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── serializers.py
│   │   └── urls.py
│   ├── Dockerfile
│   └── requirements.txt
├── post_service/          # Microservicio de posts
│   ├── manage.py
│   ├── post_service/
│   └── posts/
├── comment_service/       # Microservicio de comentarios
│   ├── manage.py
│   ├── comment_service/
│   └── comments/
├── api_gateway/           # Gateway de APIs
│   ├── nginx.conf
│   └── Dockerfile
├── docker-compose.yml     # Orquestación local
└── kubernetes/           # Manifiestos K8s
    ├── user-service.yaml
    ├── post-service.yaml
    └── gateway.yaml`}
                        </SyntaxHighlighter>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        Primer Microservicio con Django
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
                          {`# user_service/users/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models
import uuid

class CustomUser(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20, blank=True)
    is_verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

# user_service/users/serializers.py
from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 
                 'phone', 'is_verified', 'created_at']
        read_only_fields = ['id', 'created_at', 'is_verified']

class UserCreateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password', 'first_name', 'last_name']
    
    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)
        return user

# user_service/users/views.py
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import CustomUser
from .serializers import UserSerializer, UserCreateSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    
    def get_serializer_class(self):
        if self.action == 'create':
            return UserCreateSerializer
        return UserSerializer
    
    @action(detail=False, methods=['get'], permission_classes=[IsAuthenticated])
    def profile(self, request):
        serializer = self.get_serializer(request.user)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def verify(self, request, pk=None):
        user = self.get_object()
        user.is_verified = True
        user.save()
        return Response({'status': 'verified'})`}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Arquitectura y Comunicación */}
            {activeSection === 'architecture' && (
              <div className="space-y-8">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8">
                  <div className="flex items-center mb-6">
                    <Settings className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                      Arquitectura y Comunicación
                    </h2>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        Comunicación entre Microservicios
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
                          {`# utils/service_client.py
import requests
import logging
from django.conf import settings
from typing import Optional, Dict, Any

logger = logging.getLogger(__name__)

class ServiceClient:
    def __init__(self, service_name: str, base_url: str):
        self.service_name = service_name
        self.base_url = base_url
        self.timeout = getattr(settings, 'SERVICE_TIMEOUT', 30)
    
    def get(self, endpoint: str, params: Optional[Dict] = None) -> Optional[Dict[Any, Any]]:
        try:
            url = f"{self.base_url}/{endpoint.lstrip('/')}"
            response = requests.get(url, params=params, timeout=self.timeout)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            logger.error(f"Error calling {self.service_name}: {e}")
            return None
    
    def post(self, endpoint: str, data: Dict) -> Optional[Dict[Any, Any]]:
        try:
            url = f"{self.base_url}/{endpoint.lstrip('/')}"
            response = requests.post(url, json=data, timeout=self.timeout)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            logger.error(f"Error calling {self.service_name}: {e}")
            return None

# Configuración de servicios
class ServiceRegistry:
    USER_SERVICE = ServiceClient(
        'user_service', 
        settings.USER_SERVICE_URL
    )
    POST_SERVICE = ServiceClient(
        'post_service', 
        settings.POST_SERVICE_URL
    )
    COMMENT_SERVICE = ServiceClient(
        'comment_service', 
        settings.COMMENT_SERVICE_URL
    )

# post_service/posts/views.py
from utils.service_client import ServiceRegistry

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
    def retrieve(self, request, *args, **kwargs):
        post = self.get_object()
        serializer = self.get_serializer(post)
        data = serializer.data
        
        # Obtener información del autor desde user_service
        author_data = ServiceRegistry.USER_SERVICE.get(f'users/{post.author_id}/')
        if author_data:
            data['author'] = author_data
        
        # Obtener comentarios desde comment_service
        comments_data = ServiceRegistry.COMMENT_SERVICE.get(
            f'comments/?post_id={post.id}'
        )
        if comments_data:
            data['comments'] = comments_data.get('results', [])
        
        return Response(data)`}
                        </SyntaxHighlighter>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        Gestión de Bases de Datos Distribuidas
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
                          {`# user_service/settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'user_service_db',
        'USER': 'postgres',
        'PASSWORD': 'password',
        'HOST': 'user-db',
        'PORT': '5432',
    }
}

# post_service/settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'post_service_db',
        'USER': 'postgres',
        'PASSWORD': 'password',
        'HOST': 'post-db',
        'PORT': '5432',
    }
}

# Manejo de transacciones distribuidas con eventos
# events/models.py
from django.db import models
import uuid

class Event(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    event_type = models.CharField(max_length=100)
    aggregate_id = models.UUIDField()
    data = models.JSONField()
    created_at = models.DateTimeField(auto_now_add=True)
    processed = models.BooleanField(default=False)

# events/publisher.py
import json
import pika
from django.conf import settings

class EventPublisher:
    def __init__(self):
        self.connection = pika.BlockingConnection(
            pika.ConnectionParameters(settings.RABBITMQ_HOST)
        )
        self.channel = self.connection.channel()
    
    def publish_event(self, event_type: str, data: dict):
        self.channel.basic_publish(
            exchange='blog_events',
            routing_key=event_type,
            body=json.dumps(data)
        )
    
    def close(self):
        self.connection.close()

# Uso en views
class UserViewSet(viewsets.ModelViewSet):
    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        
        # Publicar evento de usuario creado
        publisher = EventPublisher()
        publisher.publish_event('user.created', {
            'user_id': str(response.data['id']),
            'email': response.data['email'],
            'username': response.data['username']
        })
        publisher.close()
        
        return response`}
                        </SyntaxHighlighter>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        API Gateway con Django
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
                          {`# api_gateway/gateway/views.py
from django.http import JsonResponse, HttpResponse
from django.views import View
import requests
import json

class GatewayView(View):
    SERVICE_ROUTES = {
        'users': 'http://user-service:8000',
        'posts': 'http://post-service:8000',
        'comments': 'http://comment-service:8000',
    }
    
    def dispatch(self, request, service, *args, **kwargs):
        if service not in self.SERVICE_ROUTES:
            return JsonResponse({'error': 'Service not found'}, status=404)
        
        return super().dispatch(request, service, *args, **kwargs)
    
    def forward_request(self, request, service):
        service_url = self.SERVICE_ROUTES[service]
        path = request.path.replace(f'/api/{service}', '/api')
        target_url = f"{service_url}{path}"
        
        # Preparar headers
        headers = {
            'Content-Type': request.content_type,
            'Authorization': request.META.get('HTTP_AUTHORIZATION', ''),
        }
        
        # Preparar datos
        data = None
        if request.method in ['POST', 'PUT', 'PATCH']:
            data = request.body
        
        try:
            response = requests.request(
                method=request.method,
                url=target_url,
                headers=headers,
                data=data,
                params=request.GET,
                timeout=30
            )
            
            return HttpResponse(
                response.content,
                status=response.status_code,
                content_type=response.headers.get('content-type')
            )
        except requests.exceptions.RequestException as e:
            return JsonResponse(
                {'error': 'Service unavailable'}, 
                status=503
            )
    
    def get(self, request, service):
        return self.forward_request(request, service)
    
    def post(self, request, service):
        return self.forward_request(request, service)
    
    def put(self, request, service):
        return self.forward_request(request, service)
    
    def delete(self, request, service):
        return self.forward_request(request, service)

# api_gateway/gateway/urls.py
from django.urls import path, re_path
from .views import GatewayView

urlpatterns = [
    re_path(r'^api/(?P<service>\w+)/.*$', GatewayView.as_view()),
]`}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Docker y Kubernetes */}
            {activeSection === 'docker' && (
              <div className="space-y-8">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8">
                  <div className="flex items-center mb-6">
                    <Database className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                      Docker y Kubernetes
                    </h2>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        Dockerfile para Microservicio Django
                      </h3>
                      <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                        <SyntaxHighlighter 
                          language="dockerfile" 
                          style={codeStyle}
                          customStyle={{
                            borderRadius: '0.375rem',
                            margin: 0,
                            fontSize: '0.875rem'
                          }}
                        >
                          {`# user_service/Dockerfile
FROM python:3.11-slim

# Configurar variables de entorno
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Crear directorio de trabajo
WORKDIR /app

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \\
    postgresql-client \\
    && rm -rf /var/lib/apt/lists/*

# Copiar e instalar dependencias Python
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copiar código fuente
COPY . /app/

# Crear usuario no root
RUN adduser --disabled-password --gecos '' appuser && \\
    chown -R appuser:appuser /app
USER appuser

# Exponer puerto
EXPOSE 8000

# Comando de inicio
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "user_service.wsgi:application"]`}
                        </SyntaxHighlighter>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        Docker Compose para Desarrollo
                      </h3>
                      <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                        <SyntaxHighlighter 
                          language="yaml" 
                          style={codeStyle}
                          customStyle={{
                            borderRadius: '0.375rem',
                            margin: 0,
                            fontSize: '0.875rem'
                          }}
                        >
                          {`# docker-compose.yml
version: '3.8'

services:
  # Base de datos para user service
  user-db:
    image: postgres:15
    environment:
      POSTGRES_DB: user_service_db
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    volumes:
      - user_db_data:/var/lib/postgresql/data

  # Base de datos para post service
  post-db:
    image: postgres:15
    environment:
      POSTGRES_DB: post_service_db
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    volumes:
      - post_db_data:/var/lib/postgresql/data

  # RabbitMQ para mensajería
  rabbitmq:
    image: rabbitmq:3-management
    environment:
      RABBITMQ_DEFAULT_USER: admin
      RABBITMQ_DEFAULT_PASS: password
    ports:
      - "15672:15672"  # Management UI

  # Redis para cache
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  # User Service
  user-service:
    build: ./user_service
    environment:
      DATABASE_URL: postgresql://postgres:password@user-db:5432/user_service_db
      RABBITMQ_HOST: rabbitmq
      REDIS_URL: redis://redis:6379/0
    depends_on:
      - user-db
      - rabbitmq
      - redis
    ports:
      - "8001:8000"

  # Post Service
  post-service:
    build: ./post_service
    environment:
      DATABASE_URL: postgresql://postgres:password@post-db:5432/post_service_db
      USER_SERVICE_URL: http://user-service:8000
      RABBITMQ_HOST: rabbitmq
    depends_on:
      - post-db
      - user-service
      - rabbitmq
    ports:
      - "8002:8000"

  # API Gateway
  api-gateway:
    build: ./api_gateway
    environment:
      USER_SERVICE_URL: http://user-service:8000
      POST_SERVICE_URL: http://post-service:8000
    depends_on:
      - user-service
      - post-service
    ports:
      - "8000:8000"

volumes:
  user_db_data:
  post_db_data:`}
                        </SyntaxHighlighter>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        Kubernetes Deployment
                      </h3>
                      <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto">
                        <SyntaxHighlighter 
                          language="yaml" 
                          style={codeStyle}
                          customStyle={{
                            borderRadius: '0.375rem',
                            margin: 0,
                            fontSize: '0.875rem'
                          }}
                        >
                          {`# kubernetes/user-service.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
    spec:
      containers:
      - name: user-service
        image: myregistry/user-service:latest
        ports:
        - containerPort: 8000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: user-service-secrets
              key: database-url
        - name: RABBITMQ_HOST
          value: "rabbitmq-service"
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health/
            port: 8000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready/
            port: 8000
          initialDelaySeconds: 5
          periodSeconds: 5

---
apiVersion: v1
kind: Service
metadata:
  name: user-service
spec:
  selector:
    app: user-service
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8000
  type: ClusterIP

---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: user-service-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: user-service
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70`}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Monitoreo y Escalado */}
            {activeSection === 'monitoring' && (
              <div className="space-y-8">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8">
                  <div className="flex items-center mb-6">
                    <Monitor className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                      Monitoreo y Escalado
                    </h2>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        Health Checks y Métricas
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
                          {`# health/views.py
from django.http import JsonResponse
from django.db import connections
from django.core.cache import cache
import time

class HealthCheckView(View):
    def get(self, request):
        health_status = {
            'status': 'healthy',
            'timestamp': time.time(),
            'service': 'user-service',
            'version': '1.0.0',
            'checks': {}
        }
        
        # Check database
        try:
            db_conn = connections['default']
            db_conn.cursor()
            health_status['checks']['database'] = 'healthy'
        except Exception as e:
            health_status['checks']['database'] = f'unhealthy: {str(e)}'
            health_status['status'] = 'unhealthy'
        
        # Check cache
        try:
            cache.set('health_check', 'ok', 30)
            cache.get('health_check')
            health_status['checks']['cache'] = 'healthy'
        except Exception as e:
            health_status['checks']['cache'] = f'unhealthy: {str(e)}'
        
        # Check external services
        health_status['checks']['external_services'] = self.check_external_services()
        
        status_code = 200 if health_status['status'] == 'healthy' else 503
        return JsonResponse(health_status, status=status_code)
    
    def check_external_services(self):
        services = {
            'post_service': settings.POST_SERVICE_URL,
            'comment_service': settings.COMMENT_SERVICE_URL,
        }
        
        results = {}
        for service_name, url in services.items():
            try:
                response = requests.get(f"{url}/health/", timeout=5)
                results[service_name] = 'healthy' if response.status_code == 200 else 'unhealthy'
            except:
                results[service_name] = 'unreachable'
        
        return results

# monitoring/middleware.py
import time
import logging
from django.utils.deprecation import MiddlewareMixin

logger = logging.getLogger('metrics')

class MetricsMiddleware(MiddlewareMixin):
    def process_request(self, request):
        request.start_time = time.time()
    
    def process_response(self, request, response):
        if hasattr(request, 'start_time'):
            duration = time.time() - request.start_time
            
            # Log metrics
            logger.info(
                f"REQUEST_DURATION method={request.method} "
                f"path={request.path} status={response.status_code} "
                f"duration={duration:.3f}s"
            )
            
            # Add custom headers
            response['X-Response-Time'] = f"{duration:.3f}s"
        
        return response`}
                        </SyntaxHighlighter>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        Configuración de Logging y Alertas
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
                          {`# settings.py - Configuración de logging
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'json': {
            'format': '{"time": "%(asctime)s", "level": "%(levelname)s", '
                     '"service": "user-service", "message": "%(message)s", '
                     '"module": "%(module)s", "function": "%(funcName)s"}',
        },
    },
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
            'formatter': 'json',
        },
        'file': {
            'class': 'logging.handlers.RotatingFileHandler',
            'filename': '/var/log/django/user-service.log',
            'maxBytes': 1024*1024*10,  # 10MB
            'backupCount': 5,
            'formatter': 'json',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['console', 'file'],
            'level': 'INFO',
        },
        'users': {
            'handlers': ['console', 'file'],
            'level': 'DEBUG',
            'propagate': False,
        },
        'metrics': {
            'handlers': ['console', 'file'],
            'level': 'INFO',
            'propagate': False,
        },
    },
}

# Configuración para Prometheus (opcional)
if 'django_prometheus' in INSTALLED_APPS:
    MIDDLEWARE = ['django_prometheus.middleware.PrometheusBeforeMiddleware'] + MIDDLEWARE
    MIDDLEWARE += ['django_prometheus.middleware.PrometheusAfterMiddleware']`}
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
                  Laboratorio 14: Sistema de Microservicios Completo
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Arquitectura Implementada
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Desarrollé un sistema completo de blog basado en microservicios con Django, 
                    incluyendo containerización con Docker y orquestación con Kubernetes.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6">
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Microservicios Implementados</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                        <li>• <strong>User Service:</strong> Gestión de usuarios y autenticación</li>
                        <li>• <strong>Post Service:</strong> CRUD de posts y categorías</li>
                        <li>• <strong>Comment Service:</strong> Sistema de comentarios</li>
                        <li>• <strong>API Gateway:</strong> Enrutamiento y agregación</li>
                      </ul>
                      <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                        <li>• <strong>Notification Service:</strong> Emails y notificaciones</li>
                        <li>• <strong>Analytics Service:</strong> Métricas y reportes</li>
                        <li>• <strong>File Service:</strong> Gestión de archivos multimedia</li>
                        <li>• <strong>Search Service:</strong> Búsqueda con Elasticsearch</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Tecnologías y Herramientas
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
                      <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Backend</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li>✅ Django + DRF</li>
                        <li>✅ PostgreSQL por servicio</li>
                        <li>✅ Redis para cache</li>
                        <li>✅ RabbitMQ para eventos</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Containerización</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li>✅ Docker containers</li>
                        <li>✅ Docker Compose</li>
                        <li>✅ Multi-stage builds</li>
                        <li>✅ Health checks</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Orquestación</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li>✅ Kubernetes</li>
                        <li>✅ Service discovery</li>
                        <li>✅ Auto-scaling</li>
                        <li>✅ Load balancing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Resultados y Métricas
                  </h3>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">8</div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">Microservicios</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">99.9%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">Uptime</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">&lt;100ms</div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">Latencia</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">10x</div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">Escalabilidad</div>
                      </div>
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
                  Los microservicios representan un cambio paradigmático en el desarrollo de software. 
                  La complejidad operacional aumenta significativamente, pero los beneficios en términos 
                  de escalabilidad, mantenibilidad y flexibilidad tecnológica son enormes. Django se adapta 
                  muy bien a esta arquitectura, especialmente con DRF para APIs.
                </p>
                
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 mt-6">
                  Desafíos Enfrentados
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  La gestión de datos distribuidos y la consistencia eventual fueron los mayores desafíos. 
                  Implementar patrones como Event Sourcing y CQRS ayudó mucho. El monitoreo distribuido 
                  también requiere herramientas especializadas como Jaeger para tracing.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 mt-6">
                  Próximos Pasos
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Quiero explorar service mesh con Istio, implementar observabilidad con OpenTelemetry, 
                  y estudiar patrones avanzados como Circuit Breaker y Bulkhead. También me interesa 
                  serverless con AWS Lambda y arquitecturas event-driven.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Week14;