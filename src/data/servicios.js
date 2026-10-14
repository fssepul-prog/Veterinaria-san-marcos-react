/*
  En la versión HTML original, los datos de servicios estaban
  escritos directamente en el HTML (texto estático) o en scripts JS sueltos.

  En React, se centraliza la información en un archivo .js separado
  que actúa como "fuente de verdad" para toda la aplicación.
  Cualquier componente que necesite estos datos simplemente los importa.

  Cada objeto representa un servicio de la veterinaria con los campos
  que se usarán en la tarjeta de servicio y en la tabla de precios.
*/

export const servicios = [
  {
    id: 1,
    codigo: 'SV001',
    nombre: 'Consulta general',
    categoria: 'Consultas',
    descripcion: 'Evaluación completa de la salud de tu mascota con uno de nuestros médicos veterinarios.',
    precio: 15000,
    especie: 'Perro / Gato',
    duracion: '30 min',
    imagen: 'consulta-general.jpg',
  },
  {
    id: 2,
    codigo: 'SV002',
    nombre: 'Consulta de urgencia',
    categoria: 'Consultas',
    descripcion: 'Atención prioritaria para casos que requieren diagnóstico y tratamiento inmediato.',
    precio: 25000,
    especie: 'Perro / Gato',
    duracion: '30 min',
    imagen: 'consulta-general.jpg',
  },
  {
    id: 3,
    codigo: 'VA001',
    nombre: 'Vacuna antirrábica canina',
    categoria: 'Vacunación',
    descripcion: 'Plan de vacunas al día para perros, con recordatorio de controles anuales.',
    precio: 12000,
    especie: 'Perro',
    duracion: '10 min',
    imagen: 'vacunacion.jpg',
  },
  {
    id: 4,
    codigo: 'VA003',
    nombre: 'Vacuna bivalente felina',
    categoria: 'Vacunación',
    descripcion: 'Vacuna esencial para gatos que protege contra las principales enfermedades virales.',
    precio: 15000,
    especie: 'Gato',
    duracion: '10 min',
    imagen: 'vacunacion.jpg',
  },
  {
    id: 5,
    codigo: 'DE001',
    nombre: 'Desparasitación interna',
    categoria: 'Desparasitación',
    descripcion: 'Desparasitación interna según el peso del paciente con antiparasitario externo en pipeta.',
    precio: 8000,
    especie: 'Perro / Gato',
    duracion: '5 min',
    imagen: 'desparasitacion.jpg',
  },
  {
    id: 6,
    codigo: 'CI003',
    nombre: 'Esterilización felina',
    categoria: 'Cirugía',
    descripcion: 'Procedimiento de esterilización para hembra felina realizado por nuestro equipo quirúrgico.',
    precio: 65000,
    especie: 'Gato',
    duracion: '60 min',
    imagen: 'equipo-clinico.jpg',
  },
  {
    id: 7,
    codigo: 'OT001',
    nombre: 'Corte de uñas',
    categoria: 'Otros',
    descripcion: 'Servicio de corte de uñas seguro para el bienestar y comodidad de tu mascota.',
    precio: 5000,
    especie: 'Perro / Gato',
    duracion: '15 min',
    imagen: 'equipo-clinico.jpg',
  },
  {
    id: 8,
    codigo: 'OT002',
    nombre: 'Control postoperatorio',
    categoria: 'Consultas',
    descripcion: 'Revisión del estado de recuperación del paciente tras un procedimiento quirúrgico.',
    precio: 10000,
    especie: 'Perro / Gato',
    duracion: '20 min',
    imagen: 'consulta-general.jpg',
  },
]
