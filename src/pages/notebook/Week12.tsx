import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Code, Shield,  Lightbulb, Users } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useTheme } from '../../context/ThemeContext';
import vscDarkPlus from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';
import vs from 'react-syntax-highlighter/dist/cjs/styles/prism/vs';

const Week12: React.FC = () => {
  const { theme } = useTheme();
  const codeStyle = theme === 'dark' ? vscDarkPlus : vs;

  // Estado para mostrar diferentes ejemplos
  const [activeSection, setActiveSection] = useState('forms');

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
              Semana 12: Formularios, Admin y Middleware
            </h1>

            {/* Navegación de secciones */}
            <div className="flex justify-center mb-8">
              <div className="flex bg-slate-100 dark:bg-slate-700 rounded-lg p-1">
                <button
                  onClick={() => setActiveSection('forms')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === 'forms'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  Formularios
                </button>
                <button
                  onClick={() => setActiveSection('admin')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === 'admin'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  Django Admin
                </button>
                <button
                  onClick={() => setActiveSection('middleware')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === 'middleware'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  Middleware
                </button>
              </div>
            </div>

            {/* Gestión de Formularios */}
            {activeSection === 'forms' && (
              <div className="space-y-8">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8">
                  <div className="flex items-center mb-6">
                    <BookOpen className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                      Gestión de Formularios en Django
                    </h2>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        Creación de Formularios
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        Django proporciona un sistema robusto para crear, validar y procesar formularios web de manera segura y eficiente.
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
                          {`# forms.py
from django import forms
from django.contrib.auth.models import User
from .models import Post, Categoria

class ContactoForm(forms.Form):
    nombre = forms.CharField(
        max_length=100,
        widget=forms.TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Tu nombre completo'
        })
    )
    email = forms.EmailField(
        widget=forms.EmailInput(attrs={
            'class': 'form-control',
            'placeholder': 'tu@email.com'
        })
    )
    asunto = forms.CharField(
        max_length=200,
        widget=forms.TextInput(attrs={
            'class': 'form-control'
        })
    )
    mensaje = forms.CharField(
        widget=forms.Textarea(attrs={
            'class': 'form-control',
            'rows': 5,
            'placeholder': 'Escribe tu mensaje aquí...'
        })
    )
    acepta_terminos = forms.BooleanField(
        required=True,
        error_messages={
            'required': 'Debes aceptar los términos y condiciones'
        }
    )
    
    def clean_email(self):
        email = self.cleaned_data.get('email')
        if email and User.objects.filter(email=email).exists():
            raise forms.ValidationError("Este email ya está registrado")
        return email
    
    def clean(self):
        cleaned_data = super().clean()
        nombre = cleaned_data.get('nombre')
        mensaje = cleaned_data.get('mensaje')
        
        if nombre and mensaje and nombre.lower() in mensaje.lower():
            raise forms.ValidationError(
                "El mensaje no puede contener tu nombre"
            )
        
        return cleaned_data`}
                        </SyntaxHighlighter>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        ModelForm - Formularios basados en modelos
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
                          {`# forms.py
class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['titulo', 'categoria', 'contenido', 'imagen', 'tags']
        widgets = {
            'titulo': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Título del post'
            }),
            'categoria': forms.Select(attrs={
                'class': 'form-control'
            }),
            'contenido': forms.Textarea(attrs={
                'class': 'form-control',
                'rows': 10,
                'placeholder': 'Contenido del post...'
            }),
            'tags': forms.CheckboxSelectMultiple(),
        }
        
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['categoria'].queryset = Categoria.objects.filter(activa=True)
        self.fields['titulo'].help_text = "Máximo 200 caracteres"
        
    def clean_titulo(self):
        titulo = self.cleaned_data.get('titulo')
        if titulo:
            # Verificar si ya existe un post con este título
            if Post.objects.filter(titulo__iexact=titulo).exclude(pk=self.instance.pk).exists():
                raise forms.ValidationError("Ya existe un post con este título")
        return titulo
    
    def save(self, commit=True):
        post = super().save(commit=False)
        if commit:
            post.slug = slugify(post.titulo)
            post.save()
            self.save_m2m()  # Guardar relaciones many-to-many
        return post

class RegistroForm(forms.ModelForm):
    password1 = forms.CharField(
        label='Contraseña',
        widget=forms.PasswordInput(attrs={'class': 'form-control'})
    )
    password2 = forms.CharField(
        label='Confirmar contraseña',
        widget=forms.PasswordInput(attrs={'class': 'form-control'})
    )
    
    class Meta:
        model = User
        fields = ['username', 'email', 'first_name', 'last_name']
        widgets = {
            'username': forms.TextInput(attrs={'class': 'form-control'}),
            'email': forms.EmailInput(attrs={'class': 'form-control'}),
            'first_name': forms.TextInput(attrs={'class': 'form-control'}),
            'last_name': forms.TextInput(attrs={'class': 'form-control'}),
        }
    
    def clean_password2(self):
        password1 = self.cleaned_data.get('password1')
        password2 = self.cleaned_data.get('password2')
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Las contraseñas no coinciden")
        return password2
    
    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data['password1'])
        if commit:
            user.save()
        return user`}
                        </SyntaxHighlighter>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        Plantillas de Formularios
                      </h3>
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
                          {`<!-- templates/formularios/contacto.html -->
{% extends 'base.html' %}

{% block title %}Contacto{% endblock %}

{% block content %}
<div class="container mt-4">
    <h2>Formulario de Contacto</h2>
    
    <form method="post" novalidate>
        {% csrf_token %}
        
        <!-- Mostrar errores no específicos de campo -->
        {% if form.non_field_errors %}
            <div class="alert alert-danger">
                {{ form.non_field_errors }}
            </div>
        {% endif %}
        
        <!-- Renderizado manual de campos -->
        <div class="row">
            <div class="col-md-6">
                <div class="form-group mb-3">
                    <label for="{{ form.nombre.id_for_label }}">{{ form.nombre.label }}</label>
                    {{ form.nombre }}
                    {% if form.nombre.errors %}
                        <div class="text-danger">
                            {{ form.nombre.errors.0 }}
                        </div>
                    {% endif %}
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group mb-3">
                    <label for="{{ form.email.id_for_label }}">{{ form.email.label }}</label>
                    {{ form.email }}
                    {% if form.email.errors %}
                        <div class="text-danger">
                            {{ form.email.errors.0 }}
                        </div>
                    {% endif %}
                </div>
            </div>
        </div>
        
        <div class="form-group mb-3">
            <label for="{{ form.asunto.id_for_label }}">{{ form.asunto.label }}</label>
            {{ form.asunto }}
            {% if form.asunto.errors %}
                <div class="text-danger">
                    {{ form.asunto.errors.0 }}
                </div>
            {% endif %}
        </div>
        
        <div class="form-group mb-3">
            <label for="{{ form.mensaje.id_for_label }}">{{ form.mensaje.label }}</label>
            {{ form.mensaje }}
            {% if form.mensaje.errors %}
                <div class="text-danger">
                    {{ form.mensaje.errors.0 }}
                </div>
            {% endif %}
        </div>
        
        <div class="form-check mb-3">
            {{ form.acepta_terminos }}
            <label class="form-check-label" for="{{ form.acepta_terminos.id_for_label }}">
                {{ form.acepta_terminos.label }}
            </label>
            {% if form.acepta_terminos.errors %}
                <div class="text-danger">
                    {{ form.acepta_terminos.errors.0 }}
                </div>
            {% endif %}
        </div>
        
        <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
    </form>
</div>

<!-- Renderizado automático alternativo -->
<div class="container mt-5">
    <h3>Renderizado Automático</h3>
    <form method="post">
        {% csrf_token %}
        {{ form.as_p }}
        <button type="submit" class="btn btn-success">Enviar</button>
    </form>
</div>
{% endblock %}`}
                        </SyntaxHighlighter>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        Validación y Procesamiento en Vistas
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
from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
from .forms import ContactoForm, PostForm

def contacto_view(request):
    if request.method == 'POST':
        form = ContactoForm(request.POST)
        if form.is_valid():
            # Datos validados disponibles en form.cleaned_data
            nombre = form.cleaned_data['nombre']
            email = form.cleaned_data['email']
            asunto = form.cleaned_data['asunto']
            mensaje = form.cleaned_data['mensaje']
            
            # Enviar email
            try:
                send_mail(
                    subject=f'Contacto: {asunto}',
                    message=f'De: {nombre} <{email}>\\n\\n{mensaje}',
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=['admin@misite.com'],
                    fail_silently=False,
                )
                messages.success(request, 'Mensaje enviado correctamente')
                return redirect('contacto')
            except Exception as e:
                messages.error(request, 'Error al enviar el mensaje')
    else:
        form = ContactoForm()
    
    return render(request, 'formularios/contacto.html', {'form': form})

def crear_post_view(request):
    if request.method == 'POST':
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            post = form.save(commit=False)
            post.autor = request.user
            post.save()
            form.save_m2m()  # Guardar relaciones many-to-many
            messages.success(request, 'Post creado exitosamente')
            return redirect('post_detalle', pk=post.pk)
    else:
        form = PostForm()
    
    return render(request, 'blog/crear_post.html', {'form': form})

# Vista basada en clase para formularios
from django.views.generic import CreateView
from django.urls import reverse_lazy

class CrearPostView(CreateView):
    model = Post
    form_class = PostForm
    template_name = 'blog/crear_post.html'
    success_url = reverse_lazy('blog:lista')
    
    def form_valid(self, form):
        form.instance.autor = self.request.user
        messages.success(self.request, 'Post creado exitosamente')
        return super().form_valid(form)`}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Django Admin */}
            {activeSection === 'admin' && (
              <div className="space-y-8">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8">
                  <div className="flex items-center mb-6">
                    <Users className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                      Django Admin - Administración Avanzada
                    </h2>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        Personalización Avanzada del Admin
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
from django.utils.html import format_html
from django.urls import reverse
from django.utils.safestring import mark_safe
from .models import Post, Categoria, Tag, Comentario

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = [
        'titulo', 'autor', 'categoria', 'estado', 
        'fecha_creacion', 'vistas', 'tiene_imagen',
        'numero_comentarios', 'acciones_personalizadas'
    ]
    list_filter = [
        'estado', 'categoria', 'fecha_creacion', 
        'autor', 'tags'
    ]
    search_fields = ['titulo', 'contenido', 'autor__username']
    prepopulated_fields = {'slug': ('titulo',)}
    raw_id_fields = ['autor']
    filter_horizontal = ['tags']
    date_hierarchy = 'fecha_creacion'
    ordering = ['-fecha_creacion']
    
    # Campos calculados
    def tiene_imagen(self, obj):
        if obj.imagen:
            return format_html(
                '<img src="{}" width="50" height="50" style="border-radius: 5px;" />',
                obj.imagen.url
            )
        return "Sin imagen"
    tiene_imagen.short_description = "Imagen"
    
    def numero_comentarios(self, obj):
        count = obj.comentarios.count()
        url = reverse('admin:blog_comentario_changelist') + f'?post__id__exact={obj.id}'
        return format_html(
            '<a href="{}">{} comentarios</a>',
            url, count
        )
    numero_comentarios.short_description = "Comentarios"
    
    def acciones_personalizadas(self, obj):
        return format_html(
            '<a class="button" href="{}">Ver en sitio</a>',
            obj.get_absolute_url()
        )
    acciones_personalizadas.short_description = "Acciones"
    
    # Fieldsets para organizar campos
    fieldsets = (
        ('Información Principal', {
            'fields': ('titulo', 'slug', 'autor', 'categoria')
        }),
        ('Contenido', {
            'fields': ('resumen', 'contenido', 'imagen'),
            'classes': ('wide',)
        }),
        ('Metadatos', {
            'fields': ('estado', 'tags', 'publicado_en'),
            'classes': ('collapse',)
        }),
        ('Estadísticas', {
            'fields': ('vistas',),
            'classes': ('collapse',)
        }),
    )
    
    # Acciones personalizadas
    def marcar_como_publicado(self, request, queryset):
        updated = queryset.update(estado='publicado')
        self.message_user(
            request,
            f'{updated} posts marcados como publicados.'
        )
    marcar_como_publicado.short_description = "Marcar posts seleccionados como publicados"
    
    def duplicar_posts(self, request, queryset):
        for post in queryset:
            post.pk = None
            post.titulo = f"Copia de {post.titulo}"
            post.slug = f"copia-{post.slug}"
            post.save()
        self.message_user(request, f'{queryset.count()} posts duplicados.')
    duplicar_posts.short_description = "Duplicar posts seleccionados"
    
    actions = [marcar_como_publicado, duplicar_posts]
    
    # Personalizar formulario
    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        # Filtrar categorías activas
        form.base_fields['categoria'].queryset = Categoria.objects.filter(activa=True)
        return form
    
    # Personalizar queryset
    def get_queryset(self, request):
        return super().get_queryset(request).select_related(
            'autor', 'categoria'
        ).prefetch_related('tags', 'comentarios')

@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'activa', 'numero_posts', 'fecha_creacion']
    list_filter = ['activa']
    search_fields = ['nombre', 'descripcion']
    prepopulated_fields = {'slug': ('nombre',)}
    
    def numero_posts(self, obj):
        return obj.posts.count()
    numero_posts.short_description = "Número de Posts"

@admin.register(Comentario)
class ComentarioAdmin(admin.ModelAdmin):
    list_display = ['autor', 'post', 'fecha_creacion', 'aprobado', 'contenido_corto']
    list_filter = ['aprobado', 'fecha_creacion']
    search_fields = ['autor', 'email', 'contenido']
    list_editable = ['aprobado']
    date_hierarchy = 'fecha_creacion'
    
    def contenido_corto(self, obj):
        return obj.contenido[:50] + "..." if len(obj.contenido) > 50 else obj.contenido
    contenido_corto.short_description = "Contenido"
    
    def aprobar_comentarios(self, request, queryset):
        queryset.update(aprobado=True)
    aprobar_comentarios.short_description = "Aprobar comentarios seleccionados"
    
    actions = [aprobar_comentarios]

# Personalizar el sitio admin
admin.site.site_header = "Administración del Blog"
admin.site.site_title = "Blog Admin"
admin.site.index_title = "Panel de Administración"`}
                        </SyntaxHighlighter>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        Formularios Personalizados en Admin
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
                          {`# admin.py - Formularios personalizados
from django import forms
from django.contrib import admin
from ckeditor.widgets import CKEditorWidget

class PostAdminForm(forms.ModelForm):
    contenido = forms.CharField(widget=CKEditorWidget())
    
    class Meta:
        model = Post
        fields = '__all__'
    
    def clean_titulo(self):
        titulo = self.cleaned_data.get('titulo')
        if titulo and len(titulo) < 10:
            raise forms.ValidationError("El título debe tener al menos 10 caracteres")
        return titulo

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    form = PostAdminForm
    
    # Inline para manejar comentarios desde el post
    class ComentarioInline(admin.TabularInline):
        model = Comentario
        extra = 0
        fields = ['autor', 'email', 'contenido', 'aprobado']
        readonly_fields = ['fecha_creacion']
    
    inlines = [ComentarioInline]
    
    # Campos de solo lectura
    readonly_fields = ['fecha_creacion', 'fecha_modificacion', 'vistas']
    
    # Personalizar el cambio de lista
    def changelist_view(self, request, extra_context=None):
        extra_context = extra_context or {}
        extra_context['posts_publicados'] = Post.objects.filter(estado='publicado').count()
        extra_context['posts_borradores'] = Post.objects.filter(estado='borrador').count()
        return super().changelist_view(request, extra_context)

# Crear vista personalizada en admin
from django.urls import path
from django.shortcuts import render
from django.http import HttpResponse

class BlogAdminSite(admin.AdminSite):
    site_header = "Administración del Blog"
    
    def get_urls(self):
        urls = super().get_urls()
        custom_urls = [
            path('estadisticas/', self.estadisticas_view, name='estadisticas'),
            path('exportar/', self.exportar_view, name='exportar'),
        ]
        return custom_urls + urls
    
    def estadisticas_view(self, request):
        context = {
            'total_posts': Post.objects.count(),
            'posts_publicados': Post.objects.filter(estado='publicado').count(),
            'total_comentarios': Comentario.objects.count(),
            'comentarios_pendientes': Comentario.objects.filter(aprobado=False).count(),
        }
        return render(request, 'admin/estadisticas.html', context)
    
    def exportar_view(self, request):
        import csv
        from django.http import HttpResponse
        
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="posts.csv"'
        
        writer = csv.writer(response)
        writer.writerow(['Título', 'Autor', 'Fecha', 'Estado'])
        
        for post in Post.objects.all():
            writer.writerow([post.titulo, post.autor.username, post.fecha_creacion, post.estado])
        
        return response

# Usar el sitio personalizado
# blog_admin_site = BlogAdminSite(name='blog_admin')`}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Middleware y Sesiones */}
            {activeSection === 'middleware' && (
              <div className="space-y-8">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                      Middleware, Sesiones y Autenticación
                    </h2>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        Middleware Personalizado
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        El middleware permite procesar requests y responses globalmente en toda la aplicación.
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
                          {`# middleware.py
import time
import logging
from django.utils.deprecation import MiddlewareMixin
from django.shortcuts import redirect
from django.contrib import messages
from django.urls import reverse

logger = logging.getLogger(__name__)

class RequestTimingMiddleware:
    """Middleware para medir tiempo de respuesta"""
    
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        start_time = time.time()
        
        response = self.get_response(request)
        
        end_time = time.time()
        duration = end_time - start_time
        
        # Agregar header con tiempo de respuesta
        response['X-Response-Time'] = f'{duration:.2f}s'
        
        # Log para requests lentos
        if duration > 1.0:
            logger.warning(f'Slow request: {request.path} took {duration:.2f}s')
        
        return response

class UserActivityMiddleware:
    """Middleware para rastrear actividad del usuario"""
    
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.user.is_authenticated:
            # Actualizar última actividad
            request.session['last_activity'] = time.time()
            request.session['page_views'] = request.session.get('page_views', 0) + 1
        
        response = self.get_response(request)
        return response

class SecurityMiddleware:
    """Middleware de seguridad personalizado"""
    
    def __init__(self, get_response):
        self.get_response = get_response
        self.blocked_ips = ['192.168.1.100']  # IPs bloqueadas
        self.rate_limit = {}  # Control de tasa

    def __call__(self, request):
        # Bloquear IPs
        client_ip = self.get_client_ip(request)
        if client_ip in self.blocked_ips:
            from django.http import HttpResponseForbidden
            return HttpResponseForbidden("IP bloqueada")
        
        # Rate limiting simple
        current_time = time.time()
        if client_ip in self.rate_limit:
            if current_time - self.rate_limit[client_ip] < 1:  # 1 request por segundo
                from django.http import HttpResponseTooManyRequests
                return HttpResponseTooManyRequests("Demasiadas requests")
        
        self.rate_limit[client_ip] = current_time
        
        response = self.get_response(request)
        
        # Agregar headers de seguridad
        response['X-Content-Type-Options'] = 'nosniff'
        response['X-Frame-Options'] = 'DENY'
        response['X-XSS-Protection'] = '1; mode=block'
        
        return response
    
    def get_client_ip(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip

class MaintenanceModeMiddleware:
    """Middleware para modo mantenimiento"""
    
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        from django.conf import settings
        
        if getattr(settings, 'MAINTENANCE_MODE', False):
            # Permitir acceso a superusuarios
            if request.user.is_superuser:
                response = self.get_response(request)
                return response
            
            # Mostrar página de mantenimiento
            from django.shortcuts import render
            return render(request, 'maintenance.html', status=503)
        
        response = self.get_response(request)
        return response`}
                        </SyntaxHighlighter>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        Manejo de Sesiones
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
                          {`# views.py - Manejo de sesiones
from django.shortcuts import render, redirect
from django.contrib import messages

def agregar_al_carrito(request, producto_id):
    """Agregar producto al carrito en sesión"""
    carrito = request.session.get('carrito', {})
    
    if str(producto_id) in carrito:
        carrito[str(producto_id)] += 1
    else:
        carrito[str(producto_id)] = 1
    
    request.session['carrito'] = carrito
    request.session.modified = True  # Marcar sesión como modificada
    
    messages.success(request, 'Producto agregado al carrito')
    return redirect('tienda')

def ver_carrito(request):
    """Ver contenido del carrito"""
    carrito = request.session.get('carrito', {})
    productos = []
    total = 0
    
    for producto_id, cantidad in carrito.items():
        try:
            producto = Producto.objects.get(id=producto_id)
            subtotal = producto.precio * cantidad
            total += subtotal
            productos.append({
                'producto': producto,
                'cantidad': cantidad,
                'subtotal': subtotal
            })
        except Producto.DoesNotExist:
            continue
    
    context = {
        'productos': productos,
        'total': total,
        'cantidad_items': sum(carrito.values())
    }
    return render(request, 'tienda/carrito.html', context)

def limpiar_carrito(request):
    """Limpiar carrito de compras"""
    if 'carrito' in request.session:
        del request.session['carrito']
    messages.info(request, 'Carrito limpiado')
    return redirect('tienda')

def configurar_preferencias(request):
    """Configurar preferencias del usuario"""
    if request.method == 'POST':
        # Guardar preferencias en sesión
        request.session['tema'] = request.POST.get('tema', 'claro')
        request.session['idioma'] = request.POST.get('idioma', 'es')
        request.session['posts_por_pagina'] = int(request.POST.get('posts_por_pagina', 10))
        
        messages.success(request, 'Preferencias guardadas')
        return redirect('configuracion')
    
    return render(request, 'configuracion.html')

# Context processor para datos de sesión
def session_data(request):
    """Context processor para agregar datos de sesión a todas las plantillas"""
    return {
        'carrito_items': len(request.session.get('carrito', {})),
        'tema_usuario': request.session.get('tema', 'claro'),
        'page_views': request.session.get('page_views', 0),
    }`}
                        </SyntaxHighlighter>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        Autenticación y Autorización
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
                          {`# views.py - Autenticación personalizada
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required, user_passes_test
from django.contrib.auth.mixins import LoginRequiredMixin, PermissionRequiredMixin
from django.contrib.auth.models import Group
from django.views.generic import CreateView

def login_view(request):
    """Vista de login personalizada"""
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        remember_me = request.POST.get('remember_me')
        
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            
            # Configurar expiración de sesión
            if not remember_me:
                request.session.set_expiry(0)  # Expira al cerrar navegador
            else:
                request.session.set_expiry(1209600)  # 2 semanas
            
            # Registrar login exitoso
            import logging
            logger = logging.getLogger(__name__)
            logger.info(f'Usuario {username} inició sesión desde {request.META.get("REMOTE_ADDR")}')
            
            messages.success(request, f'Bienvenido, {user.get_full_name() or user.username}!')
            
            # Redirigir a página solicitada o home
            next_url = request.GET.get('next', '/')
            return redirect(next_url)
        else:
            messages.error(request, 'Credenciales inválidas')
    
    return render(request, 'auth/login.html')

@login_required
def perfil_view(request):
    """Vista de perfil que requiere autenticación"""
    return render(request, 'auth/perfil.html')

def es_autor(user):
    """Función para verificar si el usuario es autor"""
    return user.groups.filter(name='Autores').exists()

@user_passes_test(es_autor)
def crear_post_view(request):
    """Solo usuarios del grupo 'Autores' pueden crear posts"""
    # Lógica para crear post
    pass

# Decorador personalizado
def grupo_requerido(grupo_nombre):
    """Decorador personalizado para verificar membresía en grupo"""
    def decorator(view_func):
        def wrapper(request, *args, **kwargs):
            if request.user.is_authenticated and request.user.groups.filter(name=grupo_nombre).exists():
                return view_func(request, *args, **kwargs)
            else:
                messages.error(request, f'Necesitas ser miembro del grupo {grupo_nombre}')
                return redirect('login')
        return wrapper
    return decorator

@grupo_requerido('Editores')
def editar_post_view(request, post_id):
    """Solo editores pueden editar posts"""
    pass

# Vistas basadas en clases con permisos
class CrearPostView(LoginRequiredMixin, PermissionRequiredMixin, CreateView):
    model = Post
    form_class = PostForm
    template_name = 'blog/crear_post.html'
    permission_required = 'blog.add_post'
    
    def handle_no_permission(self):
        messages.error(self.request, 'No tienes permisos para crear posts')
        return redirect('blog:lista')
    
    def form_valid(self, form):
        form.instance.autor = self.request.user
        return super().form_valid(form)

# Middleware de autenticación personalizado
class CustomAuthMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Verificar si la cuenta está activa
        if request.user.is_authenticated and not request.user.is_active:
            logout(request)
            messages.warning(request, 'Tu cuenta ha sido desactivada')
            return redirect('login')
        
        response = self.get_response(request)
        return response`}
                        </SyntaxHighlighter>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                        Configuración en settings.py
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
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    
    # Middleware personalizado
    'mi_app.middleware.RequestTimingMiddleware',
    'mi_app.middleware.UserActivityMiddleware',
    'mi_app.middleware.SecurityMiddleware',
]

# Configuración de sesiones
SESSION_ENGINE = 'django.contrib.sessions.backends.db'  # Base de datos (default)
# SESSION_ENGINE = 'django.contrib.sessions.backends.cache'  # Cache
# SESSION_ENGINE = 'django.contrib.sessions.backends.file'  # Archivos

SESSION_COOKIE_AGE = 1209600  # 2 semanas
SESSION_COOKIE_SECURE = True  # Solo HTTPS en producción
SESSION_COOKIE_HTTPONLY = True  # No accesible desde JavaScript
SESSION_SAVE_EVERY_REQUEST = True  # Renovar expiración en cada request

# Configuración de autenticación
LOGIN_URL = '/auth/login/'
LOGIN_REDIRECT_URL = '/'
LOGOUT_REDIRECT_URL = '/'

# Context processors
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'mi_app.context_processors.session_data',  # Personalizado
            ],
        },
    },
]

# Configuración de logging
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'file': {
            'level': 'INFO',
            'class': 'logging.FileHandler',
            'filename': 'django.log',
        },
    },
    'loggers': {
        'mi_app': {
            'handlers': ['file'],
            'level': 'INFO',
            'propagate': True,
        },
    },
}`}
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
                  Laboratorio 12: Sistema Web Backend Completo
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Sistema de Gestión de Blog con Autenticación
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Para este laboratorio desarrollé un sistema completo de gestión de blog que integra formularios avanzados, 
                    administración personalizada, middleware de seguridad y sistema de autenticación robusto.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6">
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Características Implementadas</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                        <li>• <strong>Formularios:</strong> Registro, login, creación de posts, contacto</li>
                        <li>• <strong>Validación:</strong> Server-side y client-side completa</li>
                        <li>• <strong>Admin personalizado:</strong> Campos calculados, acciones, inlines</li>
                        <li>• <strong>Middleware:</strong> Timing, seguridad, actividad de usuario</li>
                      </ul>
                      <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                        <li>• <strong>Sesiones:</strong> Carrito de compras, preferencias</li>
                        <li>• <strong>Autenticación:</strong> Login/logout, grupos, permisos</li>
                        <li>• <strong>Autorización:</strong> Decoradores personalizados, mixins</li>
                        <li>• <strong>Seguridad:</strong> CSRF, rate limiting, headers</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Flujo de Trabajo Implementado
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
                      <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Frontend</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li>✅ Formularios responsivos con Bootstrap</li>
                        <li>✅ Validación JavaScript</li>
                        <li>✅ Mensajes de feedback</li>
                        <li>✅ Upload de archivos</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Backend</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li>✅ Procesamiento seguro de datos</li>
                        <li>✅ Validación servidor</li>
                        <li>✅ Manejo de errores</li>
                        <li>✅ Logging de actividad</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Administración</h4>
                      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
                        <li>✅ Panel admin personalizado</li>
                        <li>✅ Acciones masivas</li>
                        <li>✅ Filtros avanzados</li>
                        <li>✅ Estadísticas en tiempo real</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Resultados del Laboratorio
                  </h3>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Funcionalidades Destacadas</h4>
                    <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                      <li>🔐 <strong>Sistema de autenticación completo:</strong> Registro, login, logout, recuperación de contraseña</li>
                      <li>📝 <strong>Gestión de contenido:</strong> CRUD completo para posts con validación y sanitización</li>
                      <li>👥 <strong>Sistema de roles:</strong> Autores, editores, administradores con permisos específicos</li>
                      <li>🛡️ <strong>Seguridad avanzada:</strong> CSRF protection, rate limiting, validación de entrada</li>
                      <li>📊 <strong>Panel administrativo:</strong> Estadísticas, acciones masivas, campos calculados</li>
                      <li>🔄 <strong>Middleware personalizado:</strong> Logging, timing, control de acceso</li>
                    </ul>
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
                  Esta semana profundizó mi comprensión de Django como un framework completo para desarrollo web backend. 
                  El sistema de formularios de Django es particularmente potente, proporcionando validación automática, 
                  protección CSRF y renderizado flexible. La integración entre formularios y modelos a través de ModelForm 
                  acelera significativamente el desarrollo.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  El panel de administración de Django sigue sorprendiéndome con su flexibilidad. La capacidad de personalizar 
                  completamente la interfaz, agregar campos calculados y crear acciones personalizadas lo convierte en una 
                  herramienta invaluable para la gestión de contenido. El middleware proporciona un punto de control poderoso 
                  para implementar funcionalidades transversales como seguridad, logging y monitoreo.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 mt-6">
                  Próximos Pasos
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Quiero explorar Django REST Framework para crear APIs, implementar cache con Redis, 
                  y estudiar el deployment en producción con Docker y nginx. También me interesa aprender sobre 
                  testing avanzado, optimización de consultas y implementación de WebSockets con Django Channels.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Week12;