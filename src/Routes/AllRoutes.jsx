import { ItemListContainer, Cart } from "../pages/Index";
import { Route, Routes } from 'react-router-dom';


export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='cart' element={<Cart />} />
        </Routes>
    )
}
