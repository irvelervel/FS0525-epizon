// il reducer è il "cervellone", "robottone" della nostra app Redux
// si occupa di intercettare le actions che vengono "dispatchate" e
// interpretarne il type; a seconda del type, il reducer creerà
// il nuovo stato dell'app di conseguenza
// i reducer di un'app Redux sono delle FUNZIONI PURE:
// a) una funzione pure restituisce sempre lo stesso output se fornita
// sempre dello stesso input
// b) le funzioni pure NON mutano i loro parametri
// c) una funzione pura NON esegue "side-effects" (ad es. non può
// operare chiamate API)

const initialState = {
  // questo è lo stato iniziale dell'app, che servirà come punto
  // di partenza per ad es. il nostro carrello
  cart: {
    content: [],
  },
}

const mainReducer = function (currentState = initialState, action) {
  // il reducer ha il compito di GENERARE il NUOVO stato dell'app Redux
  // per farlo ha come punto di partenza lo stato corrente e l'azione
  // appena intercettata
  // per generare a ogni action dispatchata il nuovo stato dell'applicativo
  // il reducer legge il TYPE della action ricevuta

  //   sulla base di action.type creiamo uno SWITCH statement
  switch (action.type) {
    // case
    // case
    // case

    case 'ADD_TO_CART':
      return {
        // dobbiamo ritornare il nuovo stato dell'app
        ...currentState,
        cart: {
          ...currentState.cart,
          content: [...currentState.cart.content, action.payload],
          // action.type è il tipo, in questo caso 'ADD_TO_CART'
          // action.payload è nel nostro caso il LIBRO da aggiungere!
          // metodo alternativo
          // content: currentState.cart.content.concat(action.payload)
        },
      }

    case 'REMOVE_FROM_CART':
      return {
        ...currentState,
        cart: {
          ...currentState.cart,
          content: currentState.cart.content.filter((book) => {
            if (book.id === action.payload) {
              return false
            } else {
              return true
            }
            // PRO VERSION
            // return book.id !== action.payload
          }),
          //   ALTERNATIVA DA DEVIATI (funziona solo se action.payload è l'indice)
          //   content: [
          //     ...currentState.cart.content.slice(0, action.payload),
          //     ...currentState.cart.content.slice(action.payload + 1),
          //   ],
        },
      }

    default:
      // in questo caso limite che chiamiamo "default" finiscono
      // tutte le action "non riconosciute"
      // anche da qui dobbiamo sempre generare un nuovo stato per l'app
      // visto che non so cosa fare e non voglio fare danni, ritornerò
      // l'ultima "biglia" creata come nuovo stato dell'app
      return currentState
  }
}

export default mainReducer
