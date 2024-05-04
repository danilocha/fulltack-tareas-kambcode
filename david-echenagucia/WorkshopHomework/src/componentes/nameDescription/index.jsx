import image from '../image/david.jpg'
import style from './style.module.css'


function NameDescription() {
  return (
    <>
      <header>
        <div className={style.center}>
          <img className={style.image} src={image} alt="Foto David" />
          <div className={style.containerName}>
            <h2>David Echenagucia</h2>
            <h3>Desarrollador Fullstack Javascript</h3>
          </div>

        </div>
      </header>

    </>
  );
}

export default NameDescription;

// para agregar los estilos ej: className={style.title}