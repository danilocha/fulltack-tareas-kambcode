import React, { useState } from 'react';
import styles from './LoginForm.module.css';


function LoginForm() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación de nombre de usuario y contraseña
    if (usuario.trim() === '' || contrasena.trim() === '') {
      setError('Por favor, completa todos los campos.');
      return;
    }
    if (contrasena.length < 8) {
        setError('La contraseña debe tener al menos 8 caracteres.');
        return;
      }
    // Lógica de autenticación (simulada)
    if (usuario === 'pablo' && contrasena === '12345678') {
      setError('');
      alert('Inicio de sesión exitoso!');
    } else {
      setError('Nombre de usuario o contraseña incorrectos.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formDiv}>
      <h2>Iniciar Sesión</h2>
      {error && <p className={styles.errorDesing}>{error}</p>}
      <div className={styles.justifyDiv}>
        <label>Usuario:</label>
        <input type="text" className={styles.inputField} value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      </div>
      <div className={styles.justifyDiv}>
        <label>Contraseña:</label>
        <input type="password" className={styles.inputField} value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
      </div>
      <button type="submit" className={styles.buttonDesing} >Iniciar Sesión</button>
    </form>
  );
}

export default LoginForm;