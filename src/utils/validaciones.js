// Valida que el email tenga formato básico (algo@algo.algo)
export function validarEmail(email) {
  return /\S+@\S+\.\S+/.test(email.trim());
}

