# Architecture

## Visión General

appPrueba es una aplicación React moderna construida con:
- **React 18+** para componentes UI
- **TypeScript** para seguridad de tipos
- **Vite** para un build process optimizado
- **CSS Modules/CSS puro** para estilos
- **Testing Library + Vitest** para testing

## Estructura de Carpetas

```
src/
├── components/       # Componentes React reutilizables
├── pages/           # Páginas de la aplicación
├── hooks/           # Custom React hooks
├── services/        # Servicios (API calls, etc)
├── utils/           # Funciones auxiliares
├── types/           # Tipos TypeScript globales
├── styles/          # Estilos globales
└── assets/          # Imágenes, fonts, etc
```

## Principios de Diseño

1. **Componentes pequeños y enfocados**
   - Una responsabilidad por componente
   - Props bien tipadas

2. **Reutilización**
   - Componentes genéricos en `/components`
   - Hooks customizados en `/hooks`

3. **Tipado fuerte**
   - TypeScript estricto
   - Tipos en `src/types/`

4. **Testing First**
   - TDD para nuevas features
   - Tests en archivos `.test.tsx`

5. **Accesibilidad**
   - WCAG 2.2 Level AA
   - Semantic HTML
   - ARIA labels donde sea necesario

## Flujo de Datos

```
User Interaction
    ↓
Component Handler
    ↓
Hook Logic
    ↓
Service Call
    ↓
State Update
    ↓
Re-render
```
