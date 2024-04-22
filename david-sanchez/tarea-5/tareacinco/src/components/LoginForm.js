import React, {useState} from "react";

function LoginForm(){
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena ] = useState('');
    const [error, setError] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const usuarioMayuscula = usuario.toUpperCase();// coloca el texto en mayuscula
        const contraMayuscula= contrasena.toUpperCase();// coloca el texto en mayuscula
        setUsuario(usuarioMayuscula);
        setContrasena(contraMayuscula);
        if(usuarioMayuscula.trim()==='' || contraMayuscula.trim()===''){
            setError('por favor completa los campos');
            return;
        }
        if(usuarioMayuscula === 'USUARIO' && contraMayuscula === 'CONTRA123'){
            setError('');
            alert('inicio exitoso')
        } else{
            setError('usuario o contraseña con incorrectos');
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <h2>iniciar sesion</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Usuario:</label>
        <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
      </div>
      <button type="submit">Iniciar Sesión</button>
        </form>
    );
}

export default LoginForm;
