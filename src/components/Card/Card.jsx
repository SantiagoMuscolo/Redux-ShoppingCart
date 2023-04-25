import { Link } from 'react-router-dom'
import { add, remove } from '../../store/cartSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import './Card.css'

export const Card = ({ product }) => {
    const dispatch = useDispatch()
    const [isInCart, setIsInCart] = useState(false)
    const cartList = useSelector(state => state.cartState.cartList)
    const { id } = product

    useEffect(()=>{
        const productInCart = cartList.find(item => item.id === id)

        if(productInCart){
            setIsInCart(true)
        }else{
            setIsInCart(false)
        }

    }, [cartList, id])

    return (
        <div className="card">
            <img src={product.img} alt="" />
            <h4>{product.name}</h4>
            <p>$ {product.price}</p>
            {isInCart ? (<button className="remove" onClick={()=> dispatch(remove(product))}>Remove</button>) : (<Link to='cart'><button onClick={() => dispatch(add(product))}>Add To Cart</button></Link>)}
        </div>
    )
}
