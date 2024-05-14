import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'

export function useCatImage ({ fact, setLoading }) {
  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {
    if (!fact) return

    setLoading(false)
    const treeFistWord = fact.split(' ', 3).join(' ')
    setImageUrl(`${CAT_PREFIX_IMAGE_URL}${treeFistWord}?fontSize=50&fontColor=white`)
  }, [fact])

  return { imageUrl: `${imageUrl}` }
}
