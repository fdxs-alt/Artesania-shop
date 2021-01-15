import React, { createContext, useContext, useState } from 'react'

type State = {
  products: unknown
  cart: unknown
}
type Actions = {}

const CommerceContext = createContext<(State & Actions) | null>(null)

const CommerceContextProvider: React.FC = ({ children }): JSX.Element => {
  const [cart, setCart] = useState(null)
  const [products, setProducts] = useState(null)

  return (
    <CommerceContext.Provider value={{ cart, products }}>
      {children}
    </CommerceContext.Provider>
  )
}

export default CommerceContextProvider

export const useCommerceCtx = (): State & Actions => useContext(CommerceContext)
