import React, { useState } from 'react';

function LoginForm() {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const mayuscula = /[A-Z]/.test(contraseña);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!mayuscula){
        alert('la contraseña debe contener una mayuscula.');
    }
    // Validación de nombre de usuario y contraseña
    if (usuario.trim() === '' || contraseña.trim() === '') {
      setError('Por favor, completa todos los campos.');
      return;
    }
    // Lógica de autenticación (simulada)
    if (usuario === 'usuario' && contraseña === 'contraseña') {
      setError('');
      alert('Inicio de sesión exitoso!');
    } else {
      setError('Nombre de usuario o contraseña incorrectos.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Usuario:</label>
        <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}

export default LoginForm;