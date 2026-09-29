# appPrueba - React Mobile Application

## Descripción del Proyecto

**appPrueba** es una aplicación web y mobile construida con **React**, diseñada para proporcionar una experiencia móvil responsiva y moderna. El proyecto utiliza las mejores prácticas de desarrollo con herramientas de Claude Code para garantizar calidad, seguridad y mantenibilidad.

### Stack Tecnológico

- **Frontend:** React 18+ con TypeScript
- **Styling:** Tailwind CSS / CSS Modules (a definir)
- **State Management:** Redux / Zustand / Context API (a definir)
- **Package Manager:** npm / yarn / pnpm (a definir)
- **Testing:** Jest + React Testing Library
- **Build:** Vite / Create React App (a definir)

## Flujo de Desarrollo

Seguimos el flujo recomendado por ECC:

```
plan -> test -> implement -> review -> verify -> remember -> improve
```

## Skills Aplicables

### Frontend & React
| Archivo | Skill | Descripción |
|---------|-------|-------------|
| `src/**/*.tsx`, `src/**/*.jsx` | `/react-review` | Revisar componentes React |
| `src/**/*.tsx`, `src/**/*.jsx` | `/react-patterns` | Patrones de React |
| `src/**/*.test.tsx` | `/react-test` | Testing con Jest y RTL |
| `src/**/*.tsx` | `/react-build` | Fijar errores de compilación |

### Arquitectura & Diseño
| Archivo | Skill | Descripción |
|---------|-------|-------------|
| `src/` (todo) | `/plan` | Planificar nuevas features |
| `src/components/**` | `/design-system` | Sistema de diseño |
| `src/**/*.tsx` | `/accessibility` | Accesibilidad WCAG 2.2 |

### Calidad & Testing
| Archivo | Skill | Descripción |
|---------|-------|-------------|
| `src/**/*.tsx` | `/tdd` | Test-Driven Development |
| Todos | `/code-review` | Revisión integral de código |
| `src/**/*.tsx` | `/typescript-reviewer` | Revisión de tipos TypeScript |

### Seguridad
| Archivo | Skill | Descripción |
|---------|-------|-------------|
| `src/**/*` | `/security-review` | Auditoría de seguridad |
| `src/api/**` | `/api-design` | Diseño seguro de APIs |

### Documentación
| Archivo | Skill | Descripción |
|---------|-------|-------------|
| `README.md` | `/update-docs` | Actualizar documentación |
| `docs/**` | `/doc-updater` | Mantenimiento de docs |

## Comandos Principales

```bash
# Planificación
/plan                    # Planificar una nueva feature o refactor

# Desarrollo TDD
/tdd                     # Iniciar flujo test-driven

# Revisión de código
/code-review             # Revisar cambios actuales
/react-review            # Revisar componentes React específicamente
/typescript-reviewer     # Revisar tipos y sintaxis TS

# Construcción
/react-build             # Fijar errores de compilación React
/build-fix               # Fijar errores de construcción generales

# Testing
/react-test              # Generar y ejecutar tests
/test-coverage           # Analizar cobertura

# Seguridad
/security-review         # Auditar seguridad del código
/security-scan           # Escaneo completo de seguridad

# Documentación
/update-docs             # Actualizar documentación del proyecto
```

## Estructura del Proyecto (Propuesta)

```
appPrueba/
├── .claude/                 # Skills y agentes de ECC
├── src/
│   ├── components/         # Componentes React reutilizables
│   │   ├── Button/
│   │   ├── Header/
│   │   └── Footer/
│   ├── pages/              # Páginas de la aplicación
│   ├── hooks/              # Custom hooks
│   ├── services/           # Servicios (API calls, etc)
│   ├── utils/              # Utilidades
│   ├── styles/             # Estilos globales
│   ├── types/              # Tipos TypeScript
│   └── App.tsx
├── public/                 # Archivos estáticos
├── tests/                  # Archivos de test
├── docs/                   # Documentación del proyecto
├── CLAUDE.md              # Este archivo
├── README.md              # Documentación principal
├── package.json
├── tsconfig.json
├── vite.config.ts (o webpack.config.js)
└── .gitignore
```

## Pautas de Desarrollo

### Testing
- **Mínimo 80% de cobertura** en código crítico
- Tests **antes de implementar** (TDD)
- Usar `/tdd` para iniciar features nuevas

### Código
- **TypeScript estricto** habilitado
- **ESLint + Prettier** para formateo
- Componentes **funcionales con hooks**
- Componentes pequeños y reutilizables

### Seguridad
- **Validar entrada de usuario** siempre
- **No hardcodear secrets** (usar `.env`)
- Usar `/security-review` antes de cada merge
- Seguir OWASP Top 10

### Componentes
- **Props con tipos** definidos
- **Props drilling mínimo** (usar Context/Redux si necesario)
- **Accesibilidad WCAG 2.2** (usar `/accessibility`)
- **Performance**: memoización cuando sea necesario

## Convenciones de Código

### Naming
- Componentes: `PascalCase` (e.g., `UserCard.tsx`)
- Hooks: `camelCase` con prefijo `use` (e.g., `useAuth.ts`)
- Funciones: `camelCase` (e.g., `formatDate()`)
- Constantes: `UPPER_SNAKE_CASE` (e.g., `API_TIMEOUT`)

### Archivos
- Componentes React: `.tsx`
- Lógica pura: `.ts`
- Tests: `.test.tsx` o `.test.ts`
- Estilos: `.module.css` o `.css` (según framework)

## Herramientas de Claude Code

### Agentes Disponibles
Los agentes de ECC están disponibles en `.claude/`:
- **code-reviewer:** Revisar cambios
- **react-reviewer:** Revisor experto de React
- **typescript-reviewer:** Revisor de TypeScript
- **planner:** Planificar arquitectura
- **performance-optimizer:** Optimizar performance

### Hooks Automáticos
Configurados para:
- ✅ Detectar cambios en `.tsx` y aplicar `react-review`
- ✅ Validar tipos TypeScript antes de commit
- ✅ Ejecutar tests automáticamente
- ✅ Generar resúmenes de sesión

## Primeros Pasos

1. **Configurar el proyecto:**
   ```bash
   npm install
   # o yarn install / pnpm install
   ```

2. **Crear primer componente con TDD:**
   ```
   /tdd
   # Sigue los pasos del agente
   ```

3. **Revisar código:**
   ```
   /code-review
   ```

4. **Documentar el proyecto:**
   ```
   /update-docs
   ```

## Actualizar Skills

Para actualizar las skills de ECC a la última versión:

```bash
cd C:\proyectosfullstack\ECC
git pull
# Las skills se actualizarán automáticamente en appPrueba
```

## Recursos Útiles

- 📚 [ECC Docs](https://ecc.tools)
- 🏗️ [React Best Practices](https://react.dev)
- 🎨 [Accesibilidad WCAG 2.2](https://www.w3.org/WAI/WCAG22/quickref/)
- 📋 [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- 🧪 [Testing Library](https://testing-library.com/)

## Soporte

Para dudas sobre ECC o skills:
- Discord de ECC: https://discord.gg/36yGMHGFbR
- Issues en GitHub: https://github.com/affaan-m/ECC/issues

---

**Última actualización:** 2026-09-29
**Estado:** Iniciado con ECC
**Versión:** 1.0.0
