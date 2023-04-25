import { useEffect, useState } from 'react'
import { Card } from '../../components/Card/Card'
import { productos } from '../../Hook/mockFetch'
import './ItemListContainer.css'

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
            setProducts(productos)
    }, [])


    return (
        <main>
            <div className='ItemList'>
                {products && products.map(product => <Card key={product.id} product= {product}/>)}
            </div>
        </main>
    )
}
