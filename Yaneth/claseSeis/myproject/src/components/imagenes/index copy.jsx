
import Subtitulo from '../subtitulos';
import Titulo from '../titulos';
import estilo from './estilo.module.css'


const Imagen = (props) => {
    const imagenes = props.imagenes
    
    return(
        <div className={estilo.dato}>
            <div className ={estilo.estilo} >
                <img src= {imagenes} alt=""/>
            </div>
            <div>
                <p> {Titulo} </p>
                 <p>{Subtitulo} </p>
            </div>
        </div>
    )
}
export default Imagen;