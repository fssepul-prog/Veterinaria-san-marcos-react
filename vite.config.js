import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    globals: true,
    css: true,
    coverage: {
      exclude: [
        "src/main.jsx",
        "src/App.jsx",
        "vite.config.js",
        "**/*.spec.jsx",
        "**/*.spec.js",
        "src/components/Cabecera.jsx",
        "src/components/PiePagina.jsx",
        "src/components/FormularioServicio.jsx",
        "src/components/FormularioUsuario.jsx",
        "src/components/TarjetaCita.jsx",
        "src/components/recepcionista/FormularioReagendar.jsx",
        "src/components/recepcionista/FormularioFicha.jsx",
        "src/components/recepcionista/TarjetaFicha.jsx",
        "src/pages/Agenda.jsx",
        "src/pages/DetalleServicio.jsx",
        "src/pages/Inicio.jsx",
        "src/pages/NoEncontrada.jsx",
        "src/pages/Nosotros.jsx",
        "src/pages/Recursos.jsx",
        "src/pages/admin/AdminServicios.jsx",
        "src/pages/admin/AdminUsuarios.jsx",
        "src/pages/auth/Registro.jsx",
        "src/pages/cliente/MiCuenta.jsx",
        "src/pages/recepcionista/RecepcionCitas.jsx",
        "src/pages/recepcionista/RecepcionFichas.jsx",
        "src/data/fichas.js",
        "src/data/usuarios.js"
      ]
    }
  }
});