import './App.css'
import { useState } from 'react'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const [loading, setLoading] = useState(true)
  const { imageUrl } = useCatImage({ fact, setLoading })

  const handleClick = async () => {
    setLoading(true)
    refreshFact()
  }

  return (
    <main>
      <h1>Fact de gatos </h1>
      <div><button onClick={handleClick}> Obtener nuevo hecho</button></div>
      {fact && <p>{fact}</p>}
      {loading && (
        <div className='image-loading'> </div>
      )}
      {(imageUrl && !loading) && <img src={imageUrl} alt={`Imagen extraída de la primera tres palabras de ${fact}`} />}
    </main>
  )
}
