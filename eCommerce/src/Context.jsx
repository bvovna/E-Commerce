import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [cartItems, setCartItems] = useState([])
    const [categories, setCategories] = useState([])
    const [allProductsData, setAllProductsData] = useState([])
  
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json.map(item => item.replace(/[^a-zA-Z]+/g, '')))
            )
      fetch('https://fakestoreapi.com/products')
          .then(res=>res.json())
          .then(json=>setAllProductsData(json))
    }, [])

    function addToCart(newItem) {
        newItem = {...newItem,
            quantity: 1
        }

        const idMatch = (item) => item.id === newItem.id

        if(cartItems.some(idMatch)){
            setCartItems(cartItems.map(item => {
                if(item.id === newItem.id){
                    return {...item,
                    quantity: item.quantity+1}
                }
                return item
            }))
        }
        
        else{
            setCartItems(prevItems => [...prevItems, newItem])
        }
    }

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function removeSingleItem(id){
        setCartItems(prevItems => prevItems.map(item => {
            if(item.id === id && item.quantity >1){
                    return {
                    ...item,
                    quantity: item.quantity-1
                }
            }
            
            else{
                return item
            }
        }))
    }

    const electronicsItems = allProductsData.filter(item => {
        if(item.category ==="electronics"){
          return item
        }
      })

    const jeweleryItems = allProductsData.filter(item => {
        if(item.category ==="jewelery"){
          return item
        }
      })

    const mensClothingItems = allProductsData.filter(item => {
        if(item.category ==="men's clothing"){
          return item
        }
      })
    
    const womensClothingItems = allProductsData.filter(item => {
        if(item.category ==="women's clothing"){
          return item
        }
      })

    return (
        <Context.Provider value={{
            addToCart,
            cartItems,
            categories,
            electronicsItems,
            jeweleryItems,
            mensClothingItems,
            womensClothingItems,
            removeFromCart,
            removeSingleItem,
            
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
