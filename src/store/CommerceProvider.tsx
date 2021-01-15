import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { commerce } from '../lib/commerce'

type State = {
  products: unknown
  cart: unknown
}

type Actions = {
  addItemToCart: (id: string, quantity: number) => Promise<void>
  updateItem: (lineItemId: string, quantity: number) => Promise<void>
  removeFromCart: (id: string) => Promise<void>
  clearCart: () => Promise<void>
}

const CommerceContext = createContext<(State & Actions) | null>(null)

const CommerceContextProvider: React.FC = ({ children }): JSX.Element => {
  const [cart, setCart] = useState(null)
  const [products, setProducts] = useState(null)

  const fetchProducts = useRef(async () => {
    const data = await commerce.products.list()
    setProducts(data)
  })

  const fetchCart = useRef(async () => {
    const data = await commerce.cart.retrieve()
    setCart(data)
  })

  const addItemToCart = useCallback(
    async (id: string, quantity: number): Promise<void> => {
      const { cart } = await commerce.cart.add(id, quantity)
      setCart(cart)
    },
    []
  )

  const updateItem = useCallback(
    async (lineItemId: string, quantity: number) => {
      const { cart } = await commerce.cart.update(lineItemId, { quantity })
      setCart(cart)
    },
    []
  )

  const removeFromCart = useCallback(async (lineItemId: string) => {
    const { cart } = await commerce.cart.remove(lineItemId)
    setCart(cart)
  }, [])

  const clearCart = useCallback(async () => {
    const { cart } = await commerce.cart.empty()
    setCart(cart)
  }, [])

  useEffect(() => {
    fetchCart.current()
    fetchProducts.current()
  }, [])

  return (
    <CommerceContext.Provider
      value={{
        cart,
        products,
        addItemToCart,
        removeFromCart,
        clearCart,
        updateItem,
      }}
    >
      {children}
    </CommerceContext.Provider>
  )
}

export default CommerceContextProvider

export const useCommerceCtx = (): State & Actions => useContext(CommerceContext)
