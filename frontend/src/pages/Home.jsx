import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
    const[products, setProducts] = useState([]); 

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('http://localhost:5000/api/products');
            setProducts(data);
        }
        fetchProducts();
    }, []);

    return(
        <div>
            <h2>All Products</h2>
            {products.length > 0 ? ( 
            <div style={{ display:"flex", flexWrap:'wrap', gap:'20px' }}>
                { products.map( product => (
                    <div key={product._id} style={{ border: '1px solid #ccc', padding: '10px'}}>
                        <h3>{product.name}</h3>
                        <img src={product.image} alt={product.name} width="150"/>
                        <p>{product.description}</p>
                        <p><strong>Rs: </strong>{product.price}</p>
                    </div>
                ))}
            </div>):(
                <h3>No Products Available</h3>
            )}
        </div>
    )
}

export default Home;