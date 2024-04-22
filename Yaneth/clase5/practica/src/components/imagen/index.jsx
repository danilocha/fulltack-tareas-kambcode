import estilo from './estilo.module.css'


const Imagen = (props) => {
    const imagenes = props.imagenes
    return(
        <div className ={estilo.estilo} >
            <img src= {imagenes} alt=""  />
            

        </div>
    )
}
export default Imagen;
