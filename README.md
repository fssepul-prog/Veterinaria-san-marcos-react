# Veterinaria San Marcos — React SPA

Proyecto frontend desarrollado para la asignatura **DSY1104 Desarrollo FullStack II** (Evaluación Parcial 2 — Forma A).  
Aplicación web de una sola página (SPA) para la gestión de citas, fichas clínicas y servicios de la clínica veterinaria.

---

## Demo en producción

**URL:** [http://ec2-18-212-99-49.compute-1.amazonaws.com](http://ec2-18-212-99-49.compute-1.amazonaws.com)

Aplicación desplegada en una instancia **Amazon EC2** (Amazon Web Services).

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework frontend | React 18 + Vite 5 |
| Navegación | React Router DOM 7 |
| UI y responsividad | Bootstrap 5 + React Bootstrap 2 |
| Persistencia | localStorage (simulación de BD) |
| Pruebas unitarias | Vitest 2 + React Testing Library 16 |
| Entorno de pruebas | jsdom + @testing-library/jest-dom |
| Cobertura | @vitest/coverage-v8 |
| Despliegue | Amazon EC2 (AWS) |

> Vitest reemplaza a Jasmine/Karma según lo autorizado en la Guía 13 de la asignatura.

---

## Requisitos previos

- Node.js 20 LTS o superior
- npm 10+

---

## Instalación y ejecución

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Compilación de producción
npm run build
```

---

## Pruebas unitarias

```bash
# Ejecutar en modo observador (re-ejecuta al guardar)
npm test

# Ejecutar una sola vez
npm run test:run

# Generar informe de cobertura
npm run coverage
```

### Resultados actuales

```
Test Files  68 passed (68)
Tests       72 passed (72)

Statements  : 98.54%
Branches    : 94.21%
Functions   : 97.50%
Lines       : 98.54%
```

---

## Estructura del proyecto

```
src/
├── components/
│   ├── Cabecera.jsx
│   ├── Navegacion.jsx
│   ├── PiePagina.jsx
│   ├── TarjetaCita.jsx
│   ├── TarjetaServicio.jsx
│   ├── FormularioServicio.jsx
│   ├── FormularioUsuario.jsx
│   ├── MisSolicitudes.jsx
│   └── recepcionista/
│       ├── FormularioFicha.jsx
│       ├── FormularioReagendar.jsx
│       └── TarjetaFicha.jsx
├── data/
│   ├── citas.js
│   ├── fichas.js
│   ├── servicios.js
│   ├── usuarios.js
│   ├── medicamentos.js
│   ├── pacientes.js
│   └── reportes.js
├── pages/
│   ├── Inicio.jsx
│   ├── Nosotros.jsx
│   ├── Servicios.jsx
│   ├── DetalleServicio.jsx
│   ├── Agenda.jsx
│   ├── Recursos.jsx
│   ├── NoEncontrada.jsx
│   ├── auth/
│   │   ├── Ingreso.jsx
│   │   └── Registro.jsx
│   ├── cliente/
│   │   ├── Citas.jsx
│   │   └── MiCuenta.jsx
│   ├── admin/
│   │   ├── AdminCitas.jsx
│   │   ├── AdminServicios.jsx
│   │   ├── AdminUsuarios.jsx
│   │   ├── AdminReportes.jsx
│   │   ├── AdminHistorial.jsx
│   │   └── DetalleFicha.jsx
│   └── recepcionista/
│       ├── RecepcionCitas.jsx
│       └── RecepcionFichas.jsx
├── utils/
│   ├── validaciones.js
│   ├── guardarCitas.js
│   └── cargarCitas.js
├── test/
│   └── setup.js
├── App.jsx
└── main.jsx
```

---

## Rutas de la aplicación

| Ruta | Componente | Acceso |
|---|---|---|
| `/` | Inicio | Público |
| `/nosotros` | Nosotros | Público |
| `/servicios` | Servicios | Público |
| `/servicios/:id` | DetalleServicio | Público |
| `/agenda` | Agenda | Público |
| `/recursos` | Recursos | Público |
| `/ingreso` | Ingreso | Público |
| `/registro` | Registro | Público |
| `/citas` | Citas | Cliente |
| `/mi-cuenta` | MiCuenta | Cliente |
| `/admin/servicios` | AdminServicios | Administrador |
| `/admin/citas` | AdminCitas | Administrador |
| `/admin/usuarios` | AdminUsuarios | Administrador |
| `/admin/reportes` | AdminReportes | Administrador |
| `/admin/historial` | AdminHistorial | Administrador |
| `/admin/historial/:id` | DetalleFicha | Administrador |
| `/recepcion/citas` | RecepcionCitas | Recepcionista |
| `/recepcion/fichas` | RecepcionFichas | Recepcionista |
| `*` | NoEncontrada | Público |

---

## Roles y credenciales de demostración

| Rol | Email | Contraseña | Redirige a |
|---|---|---|---|
| Administrador | admin@sanmarcos.cl | admin123 | `/admin/servicios` |
| Recepcionista | recepcion@sanmarcos.cl | recep123 | `/recepcion/citas` |
| Cliente | cliente@sanmarcos.cl | cliente123 | `/mi-cuenta` |

---

## Cobertura de pruebas por tipo

Las 72 pruebas cubren los 10 tipos requeridos por las guías 13 y 14 y los amplían:

| # | Tipo | Ejemplo de archivo |
|---|---|---|
| 1 | Función pura | `validaciones.email-valido.spec.jsx` |
| 2 | Función pura (caso inválido) | `validaciones.email-invalido.spec.jsx` |
| 3 | Renderizado de datos (props) | `TarjetaCita.muestra-datos.spec.jsx` |
| 4 | Renderizado condicional | `MiCuenta.sin-sesion.spec.jsx` |
| 5 | Validación — errores en formulario | `FormularioFicha.errores.spec.jsx` |
| 6 | Submit válido llama callback (`vi.fn`) | `FormularioFicha.guarda-datos.spec.jsx` |
| 7 | Evento clic llama callback con id | `TarjetaCita.llama-callbacks.spec.jsx` |
| 8 | Estado / filtro dinámico | `RecepcionCitas.filtro-estado.spec.jsx` |
| 9 | Persistencia con `vi.spyOn` (Guía 14) | `RecepcionCitas.persiste-localStorage.spec.jsx` |
| 10 | Mock asíncrono `vi.fn().mockResolvedValue` | `cargarCitas.spec.js` |
| 11 | Flujo completo: abrir → guardar → cerrar | `RecepcionCitas.reagenda-cita.spec.jsx` |
| 12 | Flujo completo: editar registro existente | `RecepcionFichas.editar-ficha.spec.jsx` |
| 13 | Cancelar acción revierte estado | `RecepcionCitas.cancela-reagendar.spec.jsx` |
| 14 | Filtro por categoría / especie | `AdminHistorial.filtro-especie.spec.jsx` |
| 15 | Eliminar elemento de lista | `AdminServicios.elimina-servicio.spec.jsx` |
| 16 | Cambio de select actualiza estado | `AdminUsuarios.cambia-rol.spec.jsx` |
| 17 | Sesión condiciona menú renderizado | `Navegacion.administrador.spec.jsx` |
| 18 | Cerrar sesión limpia estado y navega | `Navegacion.administrador.spec.jsx` |

---

## Configuración de Vitest

```js
// vite.config.js
test: {
  environment: "jsdom",
  setupFiles: "./src/test/setup.js",
  globals: true,
  css: true,
  coverage: {
    exclude: [
      "src/main.jsx", "src/App.jsx", "vite.config.js",
      "**/*.spec.jsx", "**/*.spec.js",
      "src/components/Cabecera.jsx", "src/components/PiePagina.jsx"
    ]
  }
}
```

---

## Repositorio y despliegue

**GitHub:** [fssepul-prog/Veterinaria-san-marcos-react](https://github.com/fssepul-prog/Veterinaria-san-marcos-react)  
**Demo AWS:** [http://ec2-18-212-99-49.compute-1.amazonaws.com](http://ec2-18-212-99-49.compute-1.amazonaws.com)

---

## Curso

**Asignatura:** DSY1104 — Desarrollo FullStack II  
**Evaluación:** Parcial 2 (30%) — Forma A — Veterinaria San Marcos  
**Institución:** DuocUC
