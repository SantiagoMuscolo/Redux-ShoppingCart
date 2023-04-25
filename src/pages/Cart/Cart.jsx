import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { remove } from '../../store/cartSlice'
import './Cart.css'


export const Cart = () => {
    const cartList = useSelector(state => state.cartState.cartList)
    const total = useSelector(state => state.cartState.total)
    const dispatch = useDispatch()

    return (
        <main>
            <div className="Container">
                <div>
                    <h2>Cart Items: {cartList.length} / $ {total}</h2>
                </div>
                <div className="cards">
                    {cartList && cartList.map(producto => {
                        return (
                            <div className="Item" key={producto.id}>
                                <img src={producto.img} alt="" />
                                <p>{producto.name}</p>
                                <p>$ {producto.price}</p>
                                <button className="remove" onClick={()=> dispatch(remove(producto))}>Remove</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}
