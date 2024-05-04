import axios from 'axios'
import { useState } from 'react'
import style from './style.module.css'

function Api() {
  const [imagesInfo, setImagesInfo] = useState([])
  const [userSearch, setUserSearch] = useState('')
  const searchImages = async () => {
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: userSearch,
          client_id: "VOFfyVPRc1aZ72eB_IiyXqY2kQGjKaRribif4gw0_Bo",
        }
      })
      setImagesInfo(response.data.results)
    } catch (error) {
      console.error('Error al buscar imagenes: ', error)
      alert('oops!! ocurrio un error, vuelve mas tarde :D ')
    }
  }

  return (
  <>
    <div className={style.btncontainer}>
      <div>
        <h1 className={style.h1}>Buscador de imagenes</h1>
        <div className={style.btnclass}>
          <input className={style.btnserach} type='text' onChange={(e) => setUserSearch(e.target.value)} />
          <button onClick={searchImages} className={style.btnserach}> Buscar</button>
          {imagesInfo.map((imageInfo) => (
            <img src={imageInfo.urls.thumb} alt={imageInfo.alt_description} />
          ))}
        </div>
      </div>
    </div>
  </>
  );
}

export default Api;