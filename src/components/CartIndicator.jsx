import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'

// vogliamo sostituire lo 0 all'interno del bottone con l'effettiva
// lunghezza dell'array "content" all'interno della fetta "cart" nello
// store di Redux
// per farlo utilizzeremo l'hook useSelector, che ci permette di accedere
// "in lettura" alle proprietà del Redux Store, il nostro stato centralizzato
// condiviso

const CartIndicator = () => {
  const navigate = useNavigate()

  const carrello = useSelector((currentState) => {
    return currentState.cart.content
  })

  return (
    <div className="d-flex justify-content-end my-4">
      <Button
        onClick={() => navigate('/cart')}
        className="d-flex align-items-center"
      >
        <FaShoppingCart />
        <span className="ms-2">{carrello.length}</span>
      </Button>
    </div>
  )
}

export default CartIndicator
