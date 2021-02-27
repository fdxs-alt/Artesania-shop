import { useEffect, useState, useCallback } from 'react'

export const useScrollHeight = () => {
  const [height, setHeight] = useState(window.scrollY)

  const handleScroll = useCallback(() => setHeight(window.scrollY), [])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return { height }
}
