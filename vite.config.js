import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración de Vite con el plugin de React.
// defineConfig le dice a Vite cómo compilar el proyecto.
export default defineConfig({
  plugins: [react()],
})
