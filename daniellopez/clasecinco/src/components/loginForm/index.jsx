import React, { useState } from 'react';
import styleLoginForm from './styleLoginForm.module.css'

function LoginForm() {
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        if(usuario.trim() === "" || password.trim() === ""){
            setSuccess('')
            setError("el usuario no puede ir vacio y la Contraseña tampoco");
            return
        }
        if(password.length < 10){
            setSuccess('')
            setError("la contrasenia debe ser mayor a 10 caracteres");
            return
        }

        if(usuario === "usuario" && password === "password00"){
            setError('')
            setSuccess('iniciaste sesion')
        }else {
            setSuccess('')
            setError('Nombre o Contraseña no es correcto')
        }
    }

  return (
    <>
    <h2>Iniciar Sesión</h2>
    <form onSubmit={handleSubmit}>
      {error && <p className={`${styleLoginForm.box} ${styleLoginForm.error}`}>{error}</p>}
      {success && <p className={`${styleLoginForm.box} ${styleLoginForm.success}`}>{success}</p>}
      <div>
        <label>Usuario:</label>
        <input type="text" onChange={(e) => setUsuario(e.target.value)} value={usuario}
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
    </>
  );
}

export default LoginForm;