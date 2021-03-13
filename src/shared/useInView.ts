import { useEffect, useRef, useState } from 'react'

export const useInView = (
  options = { treshhold: [0.5], rootMargin: '0px 0px 0px 0px' }
) => {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLElement | null>(null)
  const intersectionObserver = useRef(
    new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        setInView(true)
      } else {
        setInView(false)
      }
    }, options)
  )

  useEffect(() => {
    const current = intersectionObserver.current
    if (ref.current) {
      current.observe(ref.current)
    }
    return () => {
      current.disconnect()
    }
  }, [])

  return { ref, inView }
}
