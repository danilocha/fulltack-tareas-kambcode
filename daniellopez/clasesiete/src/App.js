import axios from 'axios'
import {useState} from 'react'
import './App.css';

// async, await

function App() {
  const [imagesInfo, setImagesInfo] = useState([])
  const [userSearch, setUserSearch] = useState('')
  const searchImages = async () => {
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: userSearch,
        client_id: "r5o2sPaaaTCzV3cz-pxHKC6FuDpyTyZlSg7zhASg0ro",
        per_page: 20
      }
    })
    setImagesInfo(response.data.results)
    } catch (error) {
      console.error('Error al buscar imagenes: ', error)
      alert('oops!! ocurrio un error, vuelve mas tarde :D ')
    }
  }
  
  return (
    <div className="App">
      <div className="App-header">
        <h1>Buscador de imagenes</h1>
        <input type='text' onChange={(e) => setUserSearch(e.target.value)} />
        <button onClick={searchImages} >buscar</button>
        {imagesInfo.map((imageInfo) => (
        <img src={imageInfo.urls.thumb} alt={imageInfo.alt_description} />
      ))}
      </div>
    </div>
  );
}

export default App;
