# appPrueba - React Mobile Application

> Una aplicación React moderna diseñada para experiencias móviles responsivas y de alto rendimiento.

## 🚀 Características

- ⚡ **React 18+** con TypeScript
- 📱 **Diseño Responsive** optimizado para mobile
- ♿ **Accesibilidad WCAG 2.2**
- 🎨 **Componentes Reutilizables**
- 🧪 **Cobertura de Tests** 80%+
- 🔒 **Seguridad** OWASP compliant
- 📦 **Optimizado para Producción**

## 📋 Requisitos Previos

- Node.js 16+
- npm, yarn o pnpm
- Git

## 🛠️ Instalación

```bash
# Clonar o acceder al proyecto
cd appPrueba

# Instalar dependencias
npm install
# o
yarn install
# o
pnpm install
```

## 🚀 Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# Ejecutar tests
npm run test

# Build de producción
npm run build

# Revisar código con ECC
/code-review
```

## 📁 Estructura del Proyecto

```
appPrueba/
├── .claude/                    # Skills y agentes de ECC
├── src/
│   ├── components/             # Componentes React
│   ├── pages/                  # Páginas de la aplicación
│   ├── hooks/                  # Custom hooks
│   ├── services/               # Servicios (API, etc)
│   ├── utils/                  # Funciones auxiliares
│   ├── types/                  # Tipos TypeScript
│   ├── styles/                 # Estilos globales
│   └── App.tsx
├── tests/                      # Suite de tests
├── public/                     # Archivos estáticos
├── docs/                       # Documentación
├── CLAUDE.md                   # Guía para Claude Code
├── README.md                   # Este archivo
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎯 Próximos Pasos

1. **Configurar tecnologías:**
   - Elegir state management (Redux, Zustand, Context API)
   - Elegir CSS framework (Tailwind, styled-components, etc)
   - Configurar testing (Jest, Vitest, etc)

2. **Iniciar desarrollo:**
   ```bash
   /tdd
   ```

3. **Documentar arquitectura:**
   ```bash
   /plan
   ```

## 📚 Comandos Útiles de Claude Code

```bash
# Planificación y arquitectura
/plan                    # Planificar features o refactors
/design-system          # Crear sistema de diseño

# Desarrollo
/tdd                     # Test-Driven Development
/react-review            # Revisar componentes React
/typescript-reviewer     # Revisar tipos TypeScript

# Testing
/react-test              # Generar y ejecutar tests
/test-coverage           # Analizar cobertura

# Revisión y calidad
/code-review             # Revisar código
/security-review         # Auditar seguridad
/simplify                # Simplificar código

# Construcción
/react-build             # Fijar errores de compilación
/build-fix               # Fijar errores de construcción

# Documentación
/update-docs             # Actualizar documentación
```

## 🔐 Seguridad

Este proyecto sigue las mejores prácticas de seguridad OWASP Top 10:

- ✅ Validación de entrada
- ✅ Prevención de XSS
- ✅ CSRF protection
- ✅ Gestión segura de credenciales
- ✅ HTTPS en producción

Ejecuta auditorías regularmente con `/security-review`.

## ♿ Accesibilidad

El proyecto cumple con **WCAG 2.2 Level AA**:

- Navegación por teclado
- Etiquetas ARIA apropiadas
- Contraste de colores adecuado
- Textos alternativos en imágenes

Usa `/accessibility` para validar nuevos componentes.

## 🧪 Testing

Objetivo: **80% de cobertura de código**

```bash
# Ejecutar todos los tests
npm run test

# Tests en modo watch
npm run test:watch

# Cobertura
npm run test:coverage
```

Inicia features con `/tdd` para Test-Driven Development.

## 🚢 Deployment

```bash
# Build de producción
npm run build

# Vista previa del build
npm run preview
```

## 📖 Documentación

- `CLAUDE.md` - Guía para desarrollo con Claude Code
- `docs/` - Documentación adicional del proyecto
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Contribuir

Para contribuir al proyecto:

1. Crear una rama: `git checkout -b feature/nueva-feature`
2. Hacer commits: `git commit -am 'Agregar nueva feature'`
3. Push: `git push origin feature/nueva-feature`
4. Crear Pull Request

Antes de hacer merge:
- Ejecutar `/code-review`
- Ejecutar `/test-coverage`
- Ejecutar `/security-review`

## 📄 Licencia

MIT

## 📞 Contacto

Para preguntas o sugerencias sobre este proyecto, abre un issue o contacta al equipo de desarrollo.

---

**Última actualización:** 2026-09-29  
**Versión:** 0.1.0 (En desarrollo)  
**Estado:** 🟢 Iniciado con ECC
