import Logo from '../../assets/vans.png'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Header.css'


export const Header = () => {
    const cartList = useSelector(state => state.cartState.cartList)

    return (
        <header>
            <div className='cabecera'>
                <Link to='/'><img src={Logo} alt="" /></Link>
                <Link to='/'><span className='Brand'>REDUX CART</span></Link>
            </div>
            <div className='cabecera__buttons'>
                <Link to='/'><button>Home</button></Link>
                <Link to='cart'><button>Cart</button></Link>
            </div>
            <div>
                <span>CART: {cartList.length}</span>
            </div>
        </header>
    )
}
